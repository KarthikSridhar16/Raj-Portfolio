import { Icon } from '@iconify/react';

const Skills = () => {
    // Top Row Tools (Marquee) - Kept as is per instructions to only change specified content
    const tools = [
        { name: 'PyTorch', icon: 'logos:pytorch-icon' },
        { name: 'TensorFlow', icon: 'logos:tensorflow' },
        { name: 'Scikit-learn', icon: 'simple-icons:scikitlearn', color: '#F7931E' },
        { name: 'Pandas', icon: 'logos:pandas-icon' },
        { name: 'NumPy', icon: 'logos:numpy' },
        { name: 'Python', icon: 'logos:python' },
        { name: 'AWS', icon: 'logos:aws' },
        { name: 'Hadoop', icon: 'logos:hadoop' },
        { name: 'Azure', icon: 'logos:microsoft-azure' },
        { name: 'MLflow', icon: 'simple-icons:mlflow', color: '#0194E2' }
    ];

    // Engineering Infrastructure Tags
    // Removed: Apache Spark, Airflow, PostgreSQL, Kubernetes
    // Added: Databricks, Jupyter Notebook, Google Colab, Azure, Dataiku
    const infrastructure = [
        "AWS Sagemaker", "Docker", "Git Actions", "Snowflake", "MLflow",
        "Databricks", "Jupyter Notebook", "Google Colab", "Azure", "Dataiku"
    ];

    // External Libraries (New Section)
    const libraries = [
        "NumPy", "Pandas", "Scikit-learn", "SciPy", "Matplotlib", "Seaborn"
    ];

    // Industry Exposure
    const industries = [
        { name: "CPG", icon: "carbon:product" },
        { name: "Retail", icon: "solar:shop-linear" },
        { name: "Pharma", icon: "solar:medical-kit-linear" },
        { name: "Real Estate", icon: "solar:buildings-linear" },
        { name: "Renewable Energy", icon: "solar:leaf-linear" },
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
                            {/* Machine Learning */}
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="font-medium text-stone-700">Machine Learning (ML)</span>
                                    <span className="text-xs text-stone-400 uppercase tracking-wider">Expert</span>
                                </div>
                                <div className="h-1.5 bg-stone-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-stone-800 w-[95%]"></div>
                                </div>
                            </div>

                            {/* Python */}
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="font-medium text-stone-700">Python</span>
                                    <span className="text-xs text-stone-400 uppercase tracking-wider">Expert</span>
                                </div>
                                <div className="h-1.5 bg-stone-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-stone-800 w-[98%]"></div>
                                </div>
                            </div>

                            {/* Advanced SQL */}
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="font-medium text-stone-700">Advanced SQL</span>
                                    <span className="text-xs text-stone-400 uppercase tracking-wider">Advanced</span>
                                </div>
                                <div className="h-1.5 bg-stone-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-stone-800 w-[90%]"></div>
                                </div>
                            </div>

                            {/* Predictive Analytics */}
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="font-medium text-stone-700">Predictive Analytics</span>
                                    <span className="text-xs text-stone-400 uppercase tracking-wider">Expert</span>
                                </div>
                                <div className="h-1.5 bg-stone-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-stone-800 w-[92%]"></div>
                                </div>
                            </div>

                            {/* Data Visualization */}
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="font-medium text-stone-700">Data Visualization (Tableau/Power BI)</span>
                                    <span className="text-xs text-stone-400 uppercase tracking-wider">Advanced</span>
                                </div>
                                <div className="h-1.5 bg-stone-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-stone-800 w-[88%]"></div>
                                </div>
                            </div>
                        </div>


                    </div>

                    {/* Right: Infrastructure & Libraries */}
                    <div className="gs-reveal space-y-12">
                        {/* Engineering Infrastructure */}
                        <div>
                            <div className="flex items-center gap-3 mb-8">
                                <Icon icon="solar:server-square-linear" className="text-2xl text-stone-400" />
                                <h3 className="text-2xl font-serif text-stone-800">Engineering Infrastructure</h3>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {infrastructure.map((tech, i) => (
                                    <span key={i} className="px-5 py-2.5 border rounded-xl text-sm font-medium shadow-sm transition-all hover:scale-105 duration-300 bg-stone-900 border-stone-800 text-emerald-400 hover:bg-stone-800">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* External Libraries (New Section) */}
                        <div>
                            <div className="flex items-center gap-3 mb-8">
                                <Icon icon="solar:library-linear" className="text-2xl text-stone-400" />
                                <h3 className="text-2xl font-serif text-stone-800">External Libraries</h3>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {libraries.map((lib, i) => (
                                    <span key={i} className="px-5 py-2.5 border rounded-xl text-sm font-medium shadow-sm transition-all hover:scale-105 duration-300 bg-stone-900 border-stone-800 text-emerald-400 hover:bg-stone-800">
                                        {lib}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

                {/* Industry Exposure - Full Width Horizontal */}
                <div className="mt-24 gs-reveal">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-serif text-stone-800 mb-4">Industry Exposure</h3>
                        <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full opacity-50"></div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">
                        {industries.map((ind, i) => (
                            <div key={i} className="flex flex-col items-center justify-center p-6 bg-stone-900 border border-stone-800 rounded-2xl shadow-sm hover:shadow-lg hover:shadow-emerald-900/20 hover:-translate-y-1 transition-all duration-300 min-w-[160px] group cursor-default">
                                <div className="w-14 h-14 flex items-center justify-center bg-stone-800 rounded-full mb-4 group-hover:bg-emerald-900/30 transition-colors">
                                    <Icon icon={ind.icon} width="28" height="28" className="text-emerald-400 group-hover:text-emerald-300 transition-colors" />
                                </div>
                                <span className="text-stone-300 font-medium text-sm group-hover:text-emerald-400 transition-colors">{ind.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Skills;
