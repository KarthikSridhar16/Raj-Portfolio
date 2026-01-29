import React from 'react';

const Experience = () => {
    // Experience Data
    const experiences = [
        {
            company: "MathCo.",
            location: "Bengaluru",
            role: "Data Scientist II",
            period: "Jan 2025 – Present",
            description: "Embedding innovative analytical models and ML solutions to increase analytics adoption by 20%+ and drive model-driven impact by 15–20%.",
        },
        {
            company: "GJ Square Solutions",
            location: "Remote",
            role: "Data Scientist II",
            period: "Mar 2024 – Dec 2024",
            description: "Developed predictive algorithms for property prices, achieving 40% increase in customer experience. Built classification models to mitigate financial risks.",
        },
        {
            company: "Arcadia",
            location: "Chennai",
            role: "Data Analyst",
            period: "Oct 2022 – Mar 2024",
            description: "Streamlined reporting processes by creating automated visual dashboards using BI tools, significantly supporting data-driven strategy development.",
        },
        {
            company: "Elixir Infotech",
            location: "Remote",
            role: "Data Science Intern",
            period: "Feb 2022 – Oct 2022",
            description: "Assisted in building and validating machine learning models while performing data cleaning and preprocessing to enhance model accuracy.",
        }
    ];

    return (
        <section id="experience" className="py-24 px-6 md:px-12 bg-white/40 relative z-10">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-24 gs-reveal">
                    <h2 className="text-5xl serif font-medium text-stone-900 mb-6">Professional Timeline</h2>
                </div>

                <div className="relative">
                    {/* Vertical Center Line (Desktop) */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-stone-200 via-stone-300 to-stone-200 -translate-x-1/2 hidden md:block"></div>

                    {/* Vertical Line (Mobile) */}
                    <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-stone-200 via-stone-300 to-stone-200 md:hidden"></div>

                    {experiences.map((exp, index) => (
                        <div key={index} className={`relative mb-16 md:mb-24 last:mb-0 group flex flex-col md:flex-row items-center justify-between ${index % 2 !== 0 ? 'flex-col-reverse' : ''}`}>

                            {/* Desktop Center Node */}
                            <div className="absolute left-1/2 top-0 -translate-x-1/2 hidden md:flex items-center justify-center w-6 h-6 rounded-full bg-white border border-stone-200 z-10 shadow-sm mt-1">
                                <div className="w-2 h-2 rounded-full bg-stone-300 group-hover:bg-emerald-500 transition-colors"></div>
                            </div>

                            {/* Mobile Node */}
                            <div className="absolute left-4 top-2 md:top-0 -translate-x-[5px] md:hidden w-3 h-3 rounded-full bg-white border border-stone-300 z-10"></div>

                            {/* Left Side */}
                            <div className={`pl-12 md:pl-0 md:w-5/12 w-full ${index % 2 === 0 ? 'md:text-right md:pr-16' : 'md:text-left md:pl-16'} gs-reveal`}>
                                {index % 2 === 0 ? (
                                    /* Even Index: Company Info on Left */
                                    <div className="mb-4 md:mb-0">
                                        <h3 className="text-2xl md:text-3xl font-serif text-stone-900 leading-tight">{exp.company}</h3>
                                        <p className="text-emerald-700 font-medium text-base md:text-lg mt-1">{exp.role}</p>
                                        <p className="text-stone-400 text-xs md:text-sm font-mono mt-1 uppercase tracking-widest">{exp.period}</p>
                                        <p className="text-stone-400 text-xs mt-1 md:hidden">{exp.location}</p>
                                    </div>
                                ) : (
                                    /* Odd Index: Description on Left */
                                    <div>
                                        <p className="text-stone-600 text-base md:text-lg font-light leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Right Side */}
                            <div className={`pl-12 md:pl-0 md:w-5/12 w-full ${index % 2 === 0 ? 'md:text-left md:pl-16' : 'md:text-right md:pr-16'} gs-reveal`}>
                                {index % 2 === 0 ? (
                                    /* Even Index: Description on Right */
                                    <div>
                                        <p className="text-stone-600 text-base md:text-lg font-light leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </div>
                                ) : (
                                    /* Odd Index: Company Info on Right */
                                    <div className="mb-4 md:mb-0">
                                        <h3 className="text-2xl md:text-3xl font-serif text-stone-900 leading-tight">{exp.company}</h3>
                                        <p className="text-emerald-700 font-medium text-base md:text-lg mt-1">{exp.role}</p>
                                        <p className="text-stone-400 text-xs md:text-sm font-mono mt-1 uppercase tracking-widest">{exp.period}</p>
                                        <p className="text-stone-400 text-xs mt-1 md:hidden">{exp.location}</p>
                                    </div>
                                )}
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
