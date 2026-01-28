import { Icon } from '@iconify/react';

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center relative px-6">
            <div className="text-center max-w-4xl z-10 hero-content">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-600/30 bg-stone-200/20 backdrop-blur-sm mb-6 opacity-0 translate-y-4 animate-in">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 animate-pulse"></span>
                    <span className="text-xs uppercase tracking-widest text-stone-700 font-medium">Available for Hire</span>
                </div>

                <h1 className="text-6xl md:text-8xl serif font-medium text-stone-900 tracking-tighter leading-none mb-6 opacity-0 translate-y-8 animate-in">
                    Rajkumar M V
                </h1>

                <div className="relative inline-block max-w-2xl mx-auto rounded-xl bg-white/20 backdrop-blur-sm p-4 mb-10 opacity-0 translate-y-8 animate-in border border-white/30">
                    <p className="text-xl md:text-2xl font-light text-stone-600 leading-relaxed">
                        Data Scientist synthesizing <span className="text-stone-800 font-normal italic serif">planetary scale data</span> into actionable intelligence.
                    </p>
                </div>

                <div className="flex flex-col gap-8 opacity-0 translate-y-8 animate-in items-center">
                    {/* Main CTAs */}
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        <a href="#projects" className="px-7 py-3 bg-stone-900 text-stone-50 rounded-full text-base tracking-wide transition-all hover:bg-stone-800 hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-2 group">
                            View Projects <Icon icon="solar:arrow-right-linear" className="group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                        <a href="#experience" className="px-7 py-3 bg-white/30 border border-stone-200/50 text-stone-700 rounded-full text-base tracking-wide transition-all hover:bg-white/60 hover:shadow-lg hover:-translate-y-0.5 backdrop-blur-md">
                            My Journey
                        </a>
                    </div>

                    {/* Social Links - Smaller */}
                    <div className="flex gap-6 items-center">
                        <a href="https://www.linkedin.com/in/rajkumarmv" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-stone-900 transition-colors transform hover:scale-110 duration-300" aria-label="LinkedIn">
                            <Icon icon="brandico:linkedin-rect" className="text-2xl" />
                        </a>
                        <a href="https://github.com/Mvr1010" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-stone-900 transition-colors transform hover:scale-110 duration-300" aria-label="GitHub">
                            <Icon icon="brandico:github" className="text-2xl" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-in delay-1000">
                <span className="text-[10px] tracking-[0.2em] text-stone-400 uppercase">Explore</span>
                <Icon icon="solar:mouse-circle-linear" className="text-2xl text-stone-400 animate-bounce" />
            </div>
        </section>
    );
};

export default Hero;
