import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ThreeCanvas = ({ onLoadComplete }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // --- Single Canvas: Tornado to Sphere Transformation ---
        const container = containerRef.current;
        const scene = new THREE.Scene();
        // Background color to match Stone-50 with slight fog
        scene.fog = new THREE.Fog('#f5f5f0', 20, 100);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        // Initial Camera Position (Looking at Tornado Base/Mid)
        camera.position.set(0, -10, 30);
        camera.rotation.x = 0.2;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        // --- Geometry Setup ---
        const particleCount = 2000;
        const geometry = new THREE.BufferGeometry();

        // Attributes to store positions
        const currentPos = new Float32Array(particleCount * 3);
        const tornadoPos = new Float32Array(particleCount * 3);
        const spherePos = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);

        const color1 = new THREE.Color(0x44403c); // Stone 700
        const color2 = new THREE.Color(0x059669); // Emerald 600

        // 1. Calculate Tornado Positions & Sphere Positions
        for (let i = 0; i < particleCount; i++) {
            // --- TORNADO LOGIC ---
            // Height from -30 to 30
            const h = (Math.random() * 60) - 30;
            // Radius gets wider as height goes up (Funnel shape)
            const tRadius = 2 + Math.pow((h + 30) / 60, 2) * 15;
            const angle = h * 0.5 + Math.random() * Math.PI * 2; // Spin based on height

            const tx = Math.cos(angle) * tRadius;
            const ty = h;
            const tz = Math.sin(angle) * tRadius;

            tornadoPos[i * 3] = tx;
            tornadoPos[i * 3 + 1] = ty;
            tornadoPos[i * 3 + 2] = tz;

            // --- SPHERE LOGIC (Target) ---
            // Random point on sphere surface radius 12
            const sRadius = 12;
            const phi = Math.acos(-1 + (2 * i) / particleCount);
            const theta = Math.sqrt(particleCount * Math.PI) * phi;

            const sx = sRadius * Math.cos(theta) * Math.sin(phi);
            const sy = sRadius * Math.sin(theta) * Math.sin(phi);
            const sz = sRadius * Math.cos(phi);

            spherePos[i * 3] = sx;
            spherePos[i * 3 + 1] = sy;
            spherePos[i * 3 + 2] = sz;

            // Initialize current positions at Tornado
            currentPos[i * 3] = tx;
            currentPos[i * 3 + 1] = ty;
            currentPos[i * 3 + 2] = tz;

            // Colors
            const mixedColor = Math.random() > 0.5 ? color1 : color2;
            colors[i * 3] = mixedColor.r;
            colors[i * 3 + 1] = mixedColor.g;
            colors[i * 3 + 2] = mixedColor.b;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(currentPos, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const material = new THREE.PointsMaterial({
            size: 0.15,
            vertexColors: true,
            transparent: true,
            opacity: 0.5 // Reduced from 0.8
        });

        const pointsMesh = new THREE.Points(geometry, material);
        scene.add(pointsMesh);

        // Add a subtle wireframe sphere that fades in later
        const sphereGeo = new THREE.IcosahedronGeometry(11.8, 1);
        const wireMat = new THREE.MeshBasicMaterial({
            color: 0xa8a29e,
            wireframe: true,
            transparent: true,
            opacity: 0
        });
        const earthWire = new THREE.Mesh(sphereGeo, wireMat);
        scene.add(earthWire);

        // --- Debris Logic ---
        const debrisCount = 150;
        const debrisGeo = new THREE.BufferGeometry();
        const debrisPos = new Float32Array(debrisCount * 3);
        const debrisTargetPos = new Float32Array(debrisCount * 3);

        // Tornado Debris Positions
        for (let i = 0; i < debrisCount; i++) {
            // WIDER Funnel and Taller
            const h = (Math.random() * 100) - 50;
            const tRadius = 10 + Math.pow((h + 50) / 100, 2) * 50; // Much wider funnel
            const angle = Math.random() * Math.PI * 2;

            debrisPos[i * 3] = Math.cos(angle) * tRadius;
            debrisPos[i * 3 + 1] = h;
            debrisPos[i * 3 + 2] = Math.sin(angle) * tRadius;

            // Target Cloud (Random points around sphere, not just surface)
            // Radius 18 to 35
            const cloudRadius = 18 + Math.random() * 17;
            const cAngle = Math.random() * Math.PI * 2;
            const cY = (Math.random() * 40) - 20;
            const cR = Math.sqrt(cloudRadius * cloudRadius - cY * cY); // Cylindrical proj correction or simple sphere random

            // Simpler random sphere point distribution
            const u = Math.random();
            const v = Math.random();
            const theta = 2 * Math.PI * u;
            const phi = Math.acos(2 * v - 1);
            const r = 18 + Math.random() * 20;

            debrisTargetPos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            debrisTargetPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            debrisTargetPos[i * 3 + 2] = r * Math.cos(phi);
        }

        debrisGeo.setAttribute('position', new THREE.BufferAttribute(debrisPos, 3));
        const debrisMat = new THREE.PointsMaterial({
            size: 0.25,
            color: 0x57534e, // Data debris color
            transparent: true,
            opacity: 0.3 // Reduced from 0.6
        });
        const debrisMesh = new THREE.Points(debrisGeo, debrisMat);
        scene.add(debrisMesh);


        // --- Animation State ---
        const state = {
            morph: 0, // 0 = Tornado, 1 = Sphere
            spinSpeed: 0.15, // FASTER initial spin for tornado
            time: 0
        };

        let animationId;

        // --- Animation Loop ---
        const animate = () => {
            animationId = requestAnimationFrame(animate);
            state.time += 0.01;

            const positions = geometry.attributes.position.array;

            // Rotate the whole mesh
            pointsMesh.rotation.y -= state.spinSpeed;
            earthWire.rotation.y -= state.spinSpeed;

            // Morph Logic (Main Particles)
            if (state.morph > 0 && state.morph <= 1) {
                for (let i = 0; i < particleCount; i++) {
                    const ix = i * 3;
                    // Linear interpolation between Tornado and Sphere positions
                    positions[ix] = tornadoPos[ix] + (spherePos[ix] - tornadoPos[ix]) * state.morph;
                    positions[ix + 1] = tornadoPos[ix + 1] + (spherePos[ix + 1] - tornadoPos[ix + 1]) * state.morph;
                    positions[ix + 2] = tornadoPos[ix + 2] + (spherePos[ix + 2] - tornadoPos[ix + 2]) * state.morph;
                }
                geometry.attributes.position.needsUpdate = true;
            }

            // Debris Morph - SYNCED with 'state.morph' for smoothness
            const dPositions = debrisGeo.attributes.position.array;
            if (state.morph > 0 && state.morph <= 1) {
                for (let i = 0; i < debrisCount; i++) {
                    const ix = i * 3;
                    dPositions[ix] = debrisPos[ix] + (debrisTargetPos[ix] - debrisPos[ix]) * state.morph;
                    dPositions[ix + 1] = debrisPos[ix + 1] + (debrisTargetPos[ix + 1] - debrisPos[ix + 1]) * state.morph;
                    dPositions[ix + 2] = debrisPos[ix + 2] + (debrisTargetPos[ix + 2] - debrisPos[ix + 2]) * state.morph;
                }
                debrisGeo.attributes.position.needsUpdate = true;
            }

            // Debris Rotation
            if (state.morph < 1) {
                // Tornado Spin (Fast)
                debrisMesh.rotation.y -= state.spinSpeed * 1.2;
            } else {
                // Final Cloud Spin (Slow)
                debrisMesh.rotation.y -= 0.001;
            }

            // Scroll Parallax (Only active when morph is complete)
            if (state.morph >= 1) {
                camera.position.y = 5 - window.scrollY * 0.005;
            }

            renderer.render(scene, camera);
        };

        animate();

        // --- Transition Sequence ---
        const tl = gsap.timeline();

        // 1. Wait a moment while tornado spins fast (Loading...)
        tl.to({}, { duration: 1.5 });

        // 2. Collapse Tornado into Sphere
        tl.to(state, {
            morph: 1,
            duration: 2.5,
            ease: "power2.inOut",
            onStart: () => {
                // Trigger loading text fade out as soon as morph starts
                // We add a tiny delay to ensure smooth transition
                setTimeout(() => {
                    if (onLoadComplete) onLoadComplete();
                }, 200);
            }
        }, "morphing");

        // 3. Slow down spin speed
        tl.to(state, {
            spinSpeed: 0.002, // Slow earth rotation
            duration: 2.5,
            ease: "power2.out"
        }, "morphing");

        // 4. Move Camera to "Home" position
        tl.to(camera.position, {
            x: 0,
            y: 5,
            z: 22,
            duration: 2.5,
            ease: "power2.inOut"
        }, "morphing");

        // 5. Fade in wireframe
        tl.to(wireMat, {
            opacity: 0.1,
            duration: 1.5
        }, "-=1");

        // Handle Resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);
            if (container && renderer.domElement) {
                container.removeChild(renderer.domElement);
            }
            // Dispose geometries/materials
            geometry.dispose();
            material.dispose();
            sphereGeo.dispose();
            wireMat.dispose();
            debrisGeo.dispose();
            debrisMat.dispose();
            tl.kill();
        };
    }, [onLoadComplete]);

    return <div ref={containerRef} className="fixed top-0 left-0 w-full h-screen -z-10" />;
};

export default ThreeCanvas;
