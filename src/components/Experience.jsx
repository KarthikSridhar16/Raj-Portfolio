const Experience = () => {
    return (
        <section id="experience" className="py-24 px-6 md:px-12 relative z-10">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl serif font-medium text-stone-900 mb-20 text-center gs-reveal">Professional Timeline</h2>

                <div className="relative pl-0 md:pl-0">
                    {/* Vertical Line */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-stone-300 -translate-x-1/2"></div>
                    <div className="md:hidden absolute left-4 top-0 bottom-0 w-px bg-stone-300"></div>

                    {/* Item 1: MathCo */}
                    <div className="relative mb-20 md:flex justify-between items-center w-full group">
                        <div className="pl-12 md:pl-0 md:w-5/12 md:text-right mb-4 md:mb-0 md:pr-8 gs-reveal">
                            <div className="md:inline-block p-5 rounded-xl bg-stone-50/20 backdrop-blur-sm border border-stone-100/30 shadow-sm">
                                <h3 className="text-xl font-medium text-stone-900">MathCo, Bengaluru</h3>
                                <p className="text-emerald-700 text-sm mt-1 tracking-wide">Data Scientist II</p>
                                <p className="text-stone-400 text-xs mt-1 font-mono">Jan 2025 – Present</p>
                            </div>
                        </div>
                        <div className="absolute left-4 md:left-1/2 -translate-x-[5px] w-2.5 h-2.5 rounded-full border border-stone-400 bg-stone-50 z-10 group-hover:bg-emerald-700 group-hover:border-emerald-700 transition-colors shadow-[0_0_0_4px_rgba(255,255,255,1)] gs-reveal"></div>
                        <div className="pl-12 md:pl-8 md:w-5/12 gs-reveal">
                            <div className="text-stone-600 text-sm font-light leading-relaxed space-y-4 bg-stone-50/20 backdrop-blur-sm border border-stone-100/30 p-6 rounded-xl shadow-sm">
                                <p>Embedding innovative analytical models and ML solutions to increase analytics adoption by 20%+ and drive model-driven impact by 15–20%.</p>
                                <p>Designing intuitive dashboards and formulating technical requirements to enhance stakeholder decision-making speed by 30%+.</p>
                            </div>
                        </div>
                    </div>

                    {/* Item 2: GJ Square Solutions */}
                    <div className="relative mb-20 md:flex justify-between items-center w-full group flex-row-reverse">
                        <div className="pl-12 md:pl-8 md:w-5/12 md:text-left mb-4 md:mb-0 gs-reveal">
                            <div className="md:inline-block p-5 rounded-xl bg-stone-50/20 backdrop-blur-sm border border-stone-100/30 shadow-sm">
                                <h3 className="text-xl font-medium text-stone-900">GJ Square Solutions, Remote</h3>
                                <p className="text-emerald-700 text-sm mt-1 tracking-wide">Data Scientist II</p>
                                <p className="text-stone-400 text-xs mt-1 font-mono">Mar 2024 – Dec 2024</p>
                            </div>
                        </div>
                        <div className="absolute left-4 md:left-1/2 -translate-x-[5px] w-2.5 h-2.5 rounded-full border border-stone-400 bg-stone-50 z-10 group-hover:bg-emerald-700 group-hover:border-emerald-700 transition-colors shadow-[0_0_0_4px_rgba(255,255,255,1)] gs-reveal"></div>
                        <div className="pl-12 md:pr-8 md:w-5/12 md:text-right gs-reveal">
                            <div className="text-stone-600 text-sm font-light leading-relaxed space-y-4 bg-stone-50/20 backdrop-blur-sm border border-stone-100/30 p-6 rounded-xl shadow-sm">
                                <p>Developed predictive algorithms for property prices, achieving 40% increase in customer experience.</p>
                                <p>Built classification models to mitigate financial risks, resulting in a 25% revenue increase.</p>
                            </div>
                        </div>
                    </div>

                    {/* Item 3: Arcadia */}
                    <div className="relative mb-20 md:flex justify-between items-center w-full group">
                        <div className="pl-12 md:pl-0 md:w-5/12 md:text-right mb-4 md:mb-0 md:pr-8 gs-reveal">
                            <div className="md:inline-block p-5 rounded-xl bg-stone-50/20 backdrop-blur-sm border border-stone-100/30 shadow-sm">
                                <h3 className="text-xl font-medium text-stone-900">Arcadia, Chennai</h3>
                                <p className="text-stone-500 text-sm mt-1 tracking-wide">Data Analyst</p>
                                <p className="text-stone-400 text-xs mt-1 font-mono">Oct 2022 – Mar 2024</p>
                            </div>
                        </div>
                        <div className="absolute left-4 md:left-1/2 -translate-x-[5px] w-2.5 h-2.5 rounded-full border border-stone-400 bg-stone-50 z-10 group-hover:bg-emerald-700 group-hover:border-emerald-700 transition-colors shadow-[0_0_0_4px_rgba(255,255,255,1)] gs-reveal"></div>
                        <div className="pl-12 md:pl-8 md:w-5/12 gs-reveal">
                            <p className="text-stone-600 text-sm font-light leading-relaxed bg-stone-50/20 backdrop-blur-sm border border-stone-100/30 p-6 rounded-xl shadow-sm">
                                Streamlined reporting processes by creating automated visual dashboards using BI tools, significantly supporting data-driven strategy development.
                            </p>
                        </div>
                    </div>

                    {/* Item 4: Elixir Infotech */}
                    <div className="relative mb-20 md:flex justify-between items-center w-full group flex-row-reverse">
                        <div className="pl-12 md:pl-8 md:w-5/12 md:text-left mb-4 md:mb-0 gs-reveal">
                            <div className="md:inline-block p-5 rounded-xl bg-stone-50/20 backdrop-blur-sm border border-stone-100/30 shadow-sm">
                                <h3 className="text-xl font-medium text-stone-900">Elixir Infotech, Remote</h3>
                                <p className="text-stone-500 text-sm mt-1 tracking-wide">Data Science Intern</p>
                                <p className="text-stone-400 text-xs mt-1 font-mono">Feb 2022 – Oct 2022</p>
                            </div>
                        </div>
                        <div className="absolute left-4 md:left-1/2 -translate-x-[5px] w-2.5 h-2.5 rounded-full border border-stone-400 bg-stone-50 z-10 group-hover:bg-emerald-700 group-hover:border-emerald-700 transition-colors shadow-[0_0_0_4px_rgba(255,255,255,1)] gs-reveal"></div>
                        <div className="pl-12 md:pr-8 md:w-5/12 md:text-right gs-reveal">
                            <p className="text-stone-600 text-sm font-light leading-relaxed bg-stone-50/20 backdrop-blur-sm border border-stone-100/30 p-6 rounded-xl shadow-sm">
                                Assisted in building and validating machine learning models while performing data cleaning and preprocessing to enhance model accuracy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
