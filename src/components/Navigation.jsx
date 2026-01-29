import { useState } from 'react';
import { Icon } from '@iconify/react';

const Navigation = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 pointer-events-none">
            {/* Top Bar Container with Blend Mode */}
            <div className="px-6 py-6 mix-blend-multiply opacity-0 nav-fade relative z-50">
                <div className="max-w-7xl mx-auto flex justify-between items-center text-stone-600">
                    <a href="#" className="serif text-xl tracking-tight font-medium pointer-events-auto text-stone-900">RMV.</a>
                    <div className="hidden md:flex gap-6 pointer-events-auto">
                        <a href="#about" className="text-sm font-light tracking-wide hover:text-stone-900 transition-colors">About</a>
                        <a href="#skills" className="text-sm font-light tracking-wide hover:text-stone-900 transition-colors">Skills</a>
                        <a href="#experience" className="text-sm font-light tracking-wide hover:text-stone-900 transition-colors">Experience</a>
                        <a href="#projects" className="text-sm font-light tracking-wide hover:text-stone-900 transition-colors">Work</a>
                        <a href="#contact" className="text-sm font-light tracking-wide hover:text-stone-900 transition-colors">Contact</a>
                    </div>
                    {/* Mobile Menu Icon */}
                    <div className="md:hidden pointer-events-auto cursor-pointer" onClick={toggleMobileMenu}>
                        <Icon icon={isMobileMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} className="text-2xl text-stone-900" />
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`md:hidden fixed inset-0 bg-[#f5f5f0] z-40 flex flex-col items-center justify-center space-y-8 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'} transition-all duration-500 ease-in-out pointer-events-auto`}>
                <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl serif font-medium text-stone-800 hover:text-stone-500 transition-colors">About</a>
                <a href="#skills" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl serif font-medium text-stone-800 hover:text-stone-500 transition-colors">Skills</a>
                <a href="#experience" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl serif font-medium text-stone-800 hover:text-stone-500 transition-colors">Experience</a>
                <a href="#projects" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl serif font-medium text-stone-800 hover:text-stone-500 transition-colors">Work</a>
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl serif font-medium text-stone-800 hover:text-stone-500 transition-colors">Contact</a>
            </div>
        </nav>
    );
};

export default Navigation;
