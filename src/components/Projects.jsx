import { Icon } from '@iconify/react';

const Projects = () => {
    return (
        <section id="projects" className="py-24 px-6 md:px-12 relative z-10">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gs-reveal">
                    <div>
                        <h2 className="text-3xl serif font-medium text-stone-900">Selected Works</h2>
                        <p className="text-stone-500 font-light mt-2">Algorithms applied to real-world challenges.</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Project 1 */}
                    <div className="glass-card p-8 rounded-lg card-hovering flex flex-col justify-between h-full gs-reveal">
                        <div>
                            <div className="flex justify-between items-start mb-6">
                                <Icon icon="solar:graph-new-linear" className="text-stone-800 text-2xl" />
                                <span className="text-[10px] border border-stone-200 px-2 py-1 rounded text-stone-500 uppercase tracking-widest">FinTech</span>
                            </div>
                            <h3 className="text-lg font-medium text-stone-900 mb-2">Fraud Detection System</h3>
                            <p className="text-sm text-stone-500 leading-relaxed mb-4">
                                Real-time transaction monitoring using an ensemble of XGBoost and Isolation Forest models.
                            </p>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="glass-card p-8 rounded-lg card-hovering flex flex-col justify-between h-full gs-reveal">
                        <div>
                            <div className="flex justify-between items-start mb-6">
                                <Icon icon="solar:users-group-rounded-linear" className="text-stone-800 text-2xl" />
                                <span className="text-[10px] border border-stone-200 px-2 py-1 rounded text-stone-500 uppercase tracking-widest">Retail</span>
                            </div>
                            <h3 className="text-lg font-medium text-stone-900 mb-2">Customer Segmentation</h3>
                            <p className="text-sm text-stone-500 leading-relaxed mb-4">
                                Unsupervised clustering (K-Means) on 2M+ records to identify high-value micro-segments.
                            </p>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="glass-card p-8 rounded-lg card-hovering flex flex-col justify-between h-full gs-reveal">
                        <div>
                            <div className="flex justify-between items-start mb-6">
                                <Icon icon="solar:chat-round-line-linear" className="text-stone-800 text-2xl" />
                                <span className="text-[10px] border border-stone-200 px-2 py-1 rounded text-stone-500 uppercase tracking-widest">NLP</span>
                            </div>
                            <h3 className="text-lg font-medium text-stone-900 mb-2">Legal Doc Summarizer</h3>
                            <p className="text-sm text-stone-500 leading-relaxed mb-4">
                                Fine-tuned BERT model to extract key clauses from legal contracts with 92% accuracy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
