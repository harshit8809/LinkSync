import { PLATFORMS } from "@/src/constent/dummyData";

function PlatformsGrid() {
    return (
        <section id="platforms" className="border-t border-hairline bg-white">
            <div className="mx-auto max-w-6xl px-6 py-20">
                <p className="font-mono text-xs uppercase tracking-widest text-teal">
                    Where you already are
                </p>
                <h2 className="mt-4 font-display text-3xl text-ink sm:text-4xl">
                    Bring every account along.
                </h2>
                <p className="mt-4 max-w-xl text-ink-soft">
                    Add as many as you&apos;ve got. If it has a URL, it has a place on your page.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                    {PLATFORMS.map((p) => (
                        <span
                            key={p}
                            className="rounded-full border border-hairline px-4 py-2 font-mono text-xs text-ink-soft"
                        >
                            {p}
                        </span>
                    ))}
                    <span className="rounded-full border border-dashed border-ink/30 px-4 py-2 font-mono text-xs text-ink">
                        + any link you&apos;ve got
                    </span>
                </div>
            </div>
        </section>
    );
}

export default PlatformsGrid;