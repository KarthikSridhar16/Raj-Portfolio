import { Icon } from '@iconify/react';

const About = () => {
    return (
        <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
            <div className="grid md:grid-cols-12 gap-12 items-start">
                <div className="md:col-span-5 relative group gs-reveal w-3/4 mx-auto md:w-full md:mx-0">
                    <div className="aspect-[4/5] overflow-hidden rounded-sm relative">
                        <img
                            src="/rajimg-Photoroom.png"
                            alt="Rajkumar M V"
                            className="w-full h-full object-cover transition-all duration-700 ease-out"
                        />
                    </div>
                </div>
                <div className="md:col-span-7 space-y-8 md:pt-12">
                    <h2 className="text-4xl serif font-medium tracking-tight text-stone-900 gs-reveal">Data Scientist &<br />Strategic Analyst.</h2>
                    <div className="space-y-6 text-lg font-light text-stone-600 leading-relaxed">
                        <p className="gs-reveal">
                            Results-oriented Data Scientist experience designing, developing, and embedding advanced analytics and ML solutions to transform structured and unstructured data into actionable business insights.
                        </p>
                        <p className="gs-reveal">
                            Strong expertise in statistical modelling, predictive analytics, data integration, and visualization, with proven ability to translate business requirements into measurable analytical outcomes.
                        </p>
                    </div>

                    {/* Education Removed as per request */}
                    {/* Focus Areas */}
                    <div className="pt-8 border-t border-stone-200">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="flex flex-col items-center text-center space-y-3 group gs-reveal">
                                <div className="w-12 h-12 flex items-center justify-center rounded-xl transition-colors">
                                    <Icon icon="solar:graph-up-linear" className="text-4xl text-stone-700" />
                                </div>
                                <h3 className="text-sm font-medium text-stone-900">Statistical Modelling</h3>
                            </div>
                            <div className="flex flex-col items-center text-center space-y-3 group gs-reveal">
                                <div className="w-12 h-12 flex items-center justify-center rounded-xl transition-colors">
                                    <Icon icon="solar:magic-stick-3-linear" className="text-4xl text-stone-700" />
                                </div>
                                <h3 className="text-sm font-medium text-stone-900">Predictive Analytics</h3>
                            </div>
                            <div className="flex flex-col items-center text-center space-y-3 group gs-reveal">
                                <div className="w-12 h-12 flex items-center justify-center rounded-xl transition-colors">
                                    <Icon icon="solar:server-path-linear" className="text-4xl text-stone-700" />
                                </div>
                                <h3 className="text-sm font-medium text-stone-900">Data Engineering</h3>
                            </div>
                            <div className="flex flex-col items-center text-center space-y-3 group gs-reveal">
                                <div className="w-12 h-12 flex items-center justify-center rounded-xl transition-colors">
                                    <Icon icon="solar:pie-chart-linear" className="text-4xl text-stone-700" />
                                </div>
                                <h3 className="text-sm font-medium text-stone-900">Visualization</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
