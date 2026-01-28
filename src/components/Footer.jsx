import { Icon } from '@iconify/react';

const Footer = () => {
    return (
        <footer id="contact" className="py-24 px-6 bg-stone-900 text-stone-300 relative overflow-hidden z-10">
            <div className="max-w-4xl mx-auto text-center relative z-20">
                <h2 className="text-4xl md:text-5xl serif font-medium text-stone-50 mb-8 tracking-tight gs-reveal">Ready to explore your data?</h2>

                <div className="flex justify-center gap-8 mt-12 gs-reveal">
                    <a href="mailto:rajkumarmv2000@gmail.com" className="group flex flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-full border border-stone-700 flex items-center justify-center group-hover:bg-stone-800 transition-colors">
                            <Icon icon="solar:letter-linear" className="text-xl" />
                        </div>
                        <span className="text-xs uppercase tracking-widest text-stone-500 group-hover:text-stone-300">Email</span>
                    </a>
                    <a href="tel:9444952369" className="group flex flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-full border border-stone-700 flex items-center justify-center group-hover:bg-stone-800 transition-colors">
                            <Icon icon="solar:phone-linear" className="text-xl" />
                        </div>
                        <span className="text-xs uppercase tracking-widest text-stone-500 group-hover:text-stone-300">Phone</span>
                    </a>
                </div>

                <div className="mt-24 text-xs text-stone-600 font-mono">
                    RAJ.MV © 2026
                </div>
            </div>
        </footer>
    );
};

export default Footer;
