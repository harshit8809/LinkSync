import ConfluenceDiagram from "./ConfluenceDiagram";

function Hero() {
    return (
        <section id="top" className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
            <div>
                <p className="font-mono text-xs uppercase tracking-widest text-teal">
                    One link · every channel
                </p>
                <h1 className="mt-4 font-display text-4xl leading-tight text-ink sm:text-5xl">
                    All your channels.
                    <br />
                    One <em className="italic text-amber">current</em>.
                </h1>
                <p className="mt-6 max-w-md text-ink-soft">
                    You&apos;re not one platform. LinkSync gathers Instagram, LinkedIn, GitHub, your
                    portfolio, WhatsApp, Snapchat — everywhere people might look for you — onto one page,
                    behind one link.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                    <a
                        href="#auth"
                        className="rounded-full bg-amber px-6 py-3 font-semibold text-ink transition hover:brightness-95"
                    >
                        Create your page
                    </a>

                    <a
                        href="#how-it-works"
                        className="rounded-full border border-ink/15 px-6 py-3 font-medium text-ink hover:bg-black/5"
                    >
                        See how it works
                    </a>
                </div>
                <p className="mt-4 font-mono text-xs text-ink-soft">
                    Takes less than two minutes to set up.
                </p>
            </div >

            <div className="mx-auto w-full max-w-md">
                <ConfluenceDiagram />
            </div>
        </section >
    );
}
export default Hero;