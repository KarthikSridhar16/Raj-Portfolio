import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Icon } from '@iconify/react';

const About = () => {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Mobile Parallax: Fade out image as user scrolls down
            if (window.innerWidth < 768) {
                gsap.to(imageRef.current, {
                    opacity: 0.2, // Fade to 20%
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top top",
                        end: "center top",
                        scrub: true
                    }
                });
            }
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
            <div className="grid md:grid-cols-12 gap-12 items-start">

                {/* Left Column: Image & Headline (Sticky on Mobile & Desktop) */}
                <div className="md:col-span-5 relative group gs-reveal w-full sticky top-24 self-start z-0">
                    <div ref={imageRef} className="bg-stone-50/40 backdrop-blur-md p-4 rounded-2xl border border-stone-200/60 shadow-xl mb-8 transition-opacity duration-500">
                        <div className="aspect-[4/5] overflow-hidden rounded-xl relative">
                            <img
                                src="/rajimg-Photoroom.png"
                                alt="Rajkumar M V"
                                className="w-full h-full object-cover transition-all duration-700 ease-out"
                            />
                        </div>
                    </div>
                    <h2 className="text-5xl serif font-medium text-stone-900 leading-tight">
                        Decoding the chaos of information.
                    </h2>
                </div>

                {/* Right Column: Bio, Stats, Bento Grid (Scrollable over image on mobile) */}
                <div className="md:col-span-7 flex flex-col gap-10 relative z-10 md:bg-transparent bg-stone-50/80 md:backdrop-blur-none backdrop-blur-xl md:p-0 p-6 rounded-3xl md:rounded-none md:shadow-none shadow-2xl md:mt-0 mt-[10vh]">

                    {/* Bio Text */}
                    <div className="gs-reveal">
                        <p className="text-lg md:text-xl font-light text-stone-700 leading-relaxed">
                            Data isn't just numbers—it's the footprint of human behavior. As a <span className="font-medium text-stone-900">Results-oriented Data Scientist</span>, I construct the lens through which organizations can see their future.
                        </p>
                        <p className="text-lg md:text-xl font-light text-stone-700 leading-relaxed mt-4">
                            I design and embed <span className="font-medium text-stone-900">advanced analytics and ML solutions</span> to transform raw, structured, and unstructured data into <span className="font-medium text-stone-900">actionable business insights</span>, bridging the gap between theoretical models and tangible impact.
                        </p>
                    </div>

                    {/* Stats Row */}
                    <div className="flex flex-wrap gap-8 md:gap-16 border-y border-stone-200/50 py-8 gs-reveal">
                        <div>
                            <h3 className="text-4xl font-serif text-stone-900">4+</h3>
                            <p className="text-xs tracking-widest uppercase text-stone-500 mt-1">Years Exp</p>
                        </div>
                        <div>
                            <h3 className="text-4xl font-serif text-stone-900">25+</h3>
                            <p className="text-xs tracking-widest uppercase text-stone-500 mt-1">Projects</p>
                        </div>
                        <div>
                            <h3 className="text-4xl font-serif text-stone-900">100%</h3>
                            <p className="text-xs tracking-widest uppercase text-stone-500 mt-1">Commitment</p>
                        </div>
                    </div>

                    {/* Bento Grid */}
                    <div className="grid gap-6">
                        {/* Card 1: Advanced Analytics */}
                        <div className="bg-stone-50/60 backdrop-blur-sm p-8 rounded-2xl border border-stone-200/50 shadow-sm hover:shadow-md transition-shadow gs-reveal">
                            <div className="w-10 h-10 bg-stone-200/50 rounded-lg flex items-center justify-center mb-6 text-stone-700">
                                <Icon icon="solar:graph-up-linear" className="text-2xl" />
                            </div>
                            <h3 className="text-xl font-serif text-stone-900 mb-3">Advanced Analytics & Strategy</h3>
                            <p className="text-stone-600 text-sm leading-relaxed">
                                Translating complex datasets into clear strategic directives. I build dashboards that don't just show data, but tell the story behind it.
                            </p>
                            <div className="absolute top-6 right-6 text-stone-400">
                                <Icon icon="solar:arrow-right-up-linear" />
                            </div>
                        </div>

                        {/* Row 2: ML & Data Eng */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Card 2: ML */}
                            <div className="bg-stone-50/60 backdrop-blur-sm p-8 rounded-2xl border border-stone-200/50 shadow-sm hover:shadow-md transition-shadow gs-reveal">
                                <div className="w-10 h-10 bg-stone-200/50 rounded-lg flex items-center justify-center mb-6 text-stone-700">
                                    <Icon icon="solar:magic-stick-3-linear" className="text-2xl" />
                                </div>
                                <h3 className="text-lg font-serif text-stone-900 mb-2">Machine Learning</h3>
                                <p className="text-stone-600 text-xs leading-relaxed">
                                    Deploying predictive models (XGBoost, LSTM) to anticipate market shifts.
                                </p>
                            </div>

                            {/* Card 3: Data Eng */}
                            <div className="bg-stone-50/60 backdrop-blur-sm p-8 rounded-2xl border border-stone-200/50 shadow-sm hover:shadow-md transition-shadow gs-reveal">
                                <div className="w-10 h-10 bg-stone-200/50 rounded-lg flex items-center justify-center mb-6 text-stone-700">
                                    <Icon icon="solar:server-path-linear" className="text-2xl" />
                                </div>
                                <h3 className="text-lg font-serif text-stone-900 mb-2">Data Engineering</h3>
                                <p className="text-stone-600 text-xs leading-relaxed">
                                    Architecting robust pipelines using SQL, Airflow, and Cloud infrastructure.
                                </p>
                            </div>
                        </div>

                        {/* Card 4: Predictive Analytics (Dark) */}
                        <div className="bg-stone-900 text-stone-100 p-8 rounded-2xl border border-stone-800 shadow-xl gs-reveal relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-emerald-500/20 transition-colors"></div>

                            <div className="relative z-10 flex items-start justify-between">
                                <div>
                                    <div className="w-10 h-10 bg-stone-800 rounded-lg flex items-center justify-center mb-6 text-emerald-400">
                                        <Icon icon="solar:pie-chart-linear" className="text-2xl" />
                                    </div>
                                    <h3 className="text-xl font-serif text-white mb-3">Predictive Analytics</h3>
                                    <p className="text-stone-400 text-sm leading-relaxed max-w-sm">
                                        Developing algorithms to predict market currents, customer behavior, and mitigate financial risks.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
