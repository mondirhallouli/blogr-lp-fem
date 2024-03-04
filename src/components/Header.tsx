import Navigation from "./Navigation";

export default function Header() {
    return (
        <header className="px-6 min-h-[600px] rounded-bl-[110px] md:min-h-[700px]">
            <Navigation />

            <section className="font-overpass text-white text-center">
                <h1 className="font-medium text-4xl mb-5 md:text-5xl lg:text-7xl">A modern publishing platform</h1>

                <p className="text-lg text-white/90 mb-8 lg:text-xl lg:tracking-wide lg:font-light">
                    Grow your audience and build your online band
                </p>

                <div className="flex justify-center items-center gap-4 flex-wrap">

                    <button className="px-4 py-3 rounded-full border-2 border-white bg-white font-ubuntu font-medium text-light-red transition-colors hover:bg-very-light-red hover:text-white hover:border-very-light-red">
                        Start for Free
                    </button>

                    <button className="px-5 py-3 rounded-full border-2 border-white font-ubuntu font-medium text-white transition-colors hover:bg-white hover:text-light-red">
                        Learn More
                    </button>
                </div>
            </section>
        </header>
    )
}