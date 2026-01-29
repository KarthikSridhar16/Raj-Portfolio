import { Icon } from '@iconify/react';

const Skills = () => {
    // Top Row Tools
    const tools = [
        { name: 'PyTorch', icon: 'logos:pytorch-icon' },
        { name: 'TensorFlow', icon: 'logos:tensorflow' },
        { name: 'Scikit-learn', icon: 'simple-icons:scikitlearn', color: '#F7931E' },
        { name: 'Pandas', icon: 'logos:pandas-icon' },
        { name: 'NumPy', icon: 'logos:numpy' },
        { name: 'Python', icon: 'logos:python' },
        { name: 'AWS', icon: 'logos:aws' },
        { name: 'Hadoop', icon: 'logos:hadoop' }
    ];

    // Engineering Infrastructure Tags
    const infrastructure = [
        "AWS Sagemaker", "Docker", "Kubernetes", "Apache Spark",
        "Airflow", "PostgreSQL", "Git Actions", "Snowflake", "MLflow"
    ];

    // Duplicate list for seamless looping
    const marqueeItems = [...tools, ...tools, ...tools, ...tools];

    return (
        <section id="skills" className="py-24 px-0 relative z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20 gs-reveal text-center">
                <h2 className="text-5xl serif font-medium text-stone-900 mb-6">Technical Ecosystem</h2>
                <p className="text-stone-500 max-w-2xl mx-auto font-light text-lg">
                    A curated stack of best-in-class tools and frameworks powering my data science workflows.
                </p>
            </div>

            {/* Top Row: Infinite Marquee */}
            <div className="relative w-full mb-24 mask-gradient">
                <div className="flex gap-8 py-4 animate-marquee hover:pause">
                    {marqueeItems.map((tool, index) => (
                        <div key={index} className="flex flex-col items-center justify-center gap-4 bg-white/50 backdrop-blur-sm border border-stone-100 rounded-2xl p-6 min-w-[150px] shadow-sm hover:shadow-md transition-all group">
                            <div className="w-12 h-12 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                                <Icon icon={tool.icon} width="40" height="40" color={tool.color} />
                            </div>
                            <span className="text-[10px] font-bold tracking-widest text-stone-400 uppercase group-hover:text-stone-800 transition-colors">
                                {tool.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12">
                {/* Bottom Split Section */}
                <div className="grid md:grid-cols-2 gap-12 md:gap-24">

                    {/* Left: Core Competencies */}
                    <div className="gs-reveal">
                        <div className="flex items-center gap-3 mb-8">
                            <Icon icon="solar:chart-square-linear" className="text-2xl text-stone-400" />
                            <h3 className="text-2xl font-serif text-stone-800">Core Competencies</h3>
                        </div>
                        <div className="space-y-8">
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="font-medium text-stone-700">Predictive Modeling (XGBoost/LightGBM)</span>
                                    <span className="text-xs text-stone-400 uppercase tracking-wider">Expert</span>
                                </div>
                                <div className="h-1.5 bg-stone-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-stone-800 w-[95%]"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="font-medium text-stone-700">NLP & LLMs (HuggingFace/OpenAI)</span>
                                    <span className="text-xs text-stone-400 uppercase tracking-wider">Advanced</span>
                                </div>
                                <div className="h-1.5 bg-stone-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-stone-800 w-[85%]"></div>
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="font-medium text-stone-700">Data Visualization (Tableau/D3.js)</span>
                                    <span className="text-xs text-stone-400 uppercase tracking-wider">Advanced</span>
                                </div>
                                <div className="h-1.5 bg-stone-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-stone-800 w-[90%]"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Engineering Infrastructure */}
                    <div className="gs-reveal">
                        <div className="flex items-center gap-3 mb-8">
                            <Icon icon="solar:server-square-linear" className="text-2xl text-stone-400" />
                            <h3 className="text-2xl font-serif text-stone-800">Engineering Infrastructure</h3>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {infrastructure.map((tech, i) => (
                                <span key={i} className="px-5 py-2.5 bg-white border border-stone-200 rounded-xl text-stone-600 text-sm font-medium shadow-sm hover:border-stone-300 transition-colors">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Skills;
