import { Icon } from '@iconify/react';

const LoadingOverlay = ({ isVisible }) => {
    if (!isVisible) return null; // Or use opacity transition

    // In the original, it was fixed z-9999
    // We can keep it or make it fade out
    // The original gsap animation fades it out and sets display none.
    // We can handle that via props or CSS class.

    return (
        <div
            className={`fixed top-0 left-0 w-full h-screen z-[9999] pointer-events-none flex flex-col justify-end pb-12 items-center transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
            <div className="flex flex-col items-center gap-3">
                <div className="w-px h-8 bg-stone-400"></div>
                <div className="text-stone-700 font-sans text-xs tracking-[0.3em] uppercase font-medium">
                    Ingesting Data Stream
                </div>
            </div>
        </div>
    );
};

export default LoadingOverlay;
