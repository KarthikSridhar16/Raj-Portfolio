import { Icon } from '@iconify/react';

const Skills = () => {
    // Skills Data
    const skills = [
        { name: 'Python', icon: 'logos:python' },
        { name: 'SQL', icon: 'carbon:sql' },
        { name: 'Azure', icon: 'logos:azure-icon' },
        { name: 'Hadoop', icon: 'logos:hadoop' },
        { name: 'Tableau', icon: 'logos:tableau-icon' },
        { name: 'Power BI', icon: 'logos:microsoft-power-bi' },
        { name: 'PyTorch', icon: 'logos:pytorch-icon' },
        { name: 'TensorFlow', icon: 'logos:tensorflow' },
        { name: 'Scikit-learn', icon: 'simple-icons:scikitlearn', color: '#F7931E' },
        { name: 'Pandas', icon: 'logos:pandas' },
        { name: 'NumPy', icon: 'logos:numpy' },
        { name: 'Git', icon: 'logos:git-icon' },
        { name: 'Docker', icon: 'logos:docker-icon' },
        { name: 'Kubernetes', icon: 'logos:kubernetes' }
    ];

    // Duplicate list for seamless looping - 4 sets to align with -50% translation (2 sets viewable, 2 sets hidden/transitioning)
    const marqueeItems = [...skills, ...skills, ...skills, ...skills];

    return (
        <section className="py-24 relative z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
                <h2 className="text-3xl serif font-medium text-stone-900 gs-reveal">Technical Ecosystem</h2>
            </div>

            {/* Infinite Marquee Container */}
            <div className="relative w-full mask-gradient">
                <div className="flex gap-16 py-8 animate-marquee">
                    {marqueeItems.map((skill, index) => (
                        <div key={index} className="flex flex-col items-center gap-4 group min-w-[100px]">
                            <div className="w-20 h-20 rounded-2xl bg-white/40 backdrop-blur-sm border border-stone-200/50 flex items-center justify-center p-4 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                <Icon
                                    icon={skill.icon}
                                    width="40"
                                    height="40"
                                    className="grayscale group-hover:grayscale-0 transition-all duration-300"
                                    color={skill.color}
                                />
                            </div>
                            <span className="text-sm font-medium text-stone-600 group-hover:text-stone-900 transition-colors uppercase tracking-wider text-[10px]">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
