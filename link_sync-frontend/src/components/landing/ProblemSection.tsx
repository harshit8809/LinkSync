import { steps } from "@/src/constent/dummyData";

function ProblemSection() {
    return (
        <section id="why" className="border-t border-hairline bg-white">
            <div className="mx-auto max-w-6xl px-6 py-20">
                <p className="font-mono text-xs uppercase tracking-widest text-teal">
                    The problem
                </p>
                <h2 className="mt-4 max-w-2xl font-display text-3xl text-ink sm:text-4xl">
                    Bios were never built for someone with this many accounts.
                </h2>
                <p className="mt-4 max-w-2xl text-ink-soft">
                    Instagram gives you one link. So does TikTok. Meanwhile you&apos;re running a GitHub, a
                    LinkedIn, a portfolio site, a WhatsApp number for clients, maybe a Snapchat for people
                    who actually know you. Every time something changes, you&apos;re back in five different
                    bio fields, swapping URLs and hoping nobody bookmarked the old one.
                </p>

                <div className="mt-12 grid gap-6 md:grid-cols-2">
                    <div className="rounded-2xl border border-hairline bg-paper p-6">
                        <p className="font-mono text-xs uppercase tracking-wide text-ink-soft">
                            Without LinkSync
                        </p>
                        <div className="mt-4 rounded-xl bg-white p-4 font-mono text-sm text-ink-soft">
                            insta.gr/jasmine.t · linkedin.com/in/jasm... · jasmine-portfolio.de...
                            <span className="block text-ink-soft/60">— ran out of room —</span>
                        </div>
                        <p className="mt-3 text-sm italic text-ink-soft">
                            Forced to pick one link. The rest get cut.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-hairline bg-paper p-6">
                        <p className="font-mono text-xs uppercase tracking-wide text-teal">
                            With LinkSync
                        </p>
                        <div className="mt-4 rounded-xl bg-white p-4 font-mono text-sm text-ink">
                            linksync.app/jasmine
                        </div>
                        <p className="mt-3 text-sm italic text-ink-soft">
                            One link. Everything behind it.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProblemSection;


export function HowItWorks() {

    return (
        <section id="how-it-works" className="border-t border-hairline">
            <div className="mx-auto max-w-6xl px-6 py-20">
                <p className="font-mono text-xs uppercase tracking-widest text-teal">
                    How it works
                </p>
                <h2 className="mt-4 font-display text-3xl text-ink sm:text-4xl">
                    Three steps, one link.
                </h2>

                <div className="mt-12 grid gap-10 md:grid-cols-3">
                    {steps.map((s) => (
                        <div key={s.n} className="border-t-2 border-hairline pt-6">
                            <span className="font-mono text-2xl text-amber">{s.n}</span>
                            <h3 className="mt-3 font-display text-xl text-ink">{s.title}</h3>
                            <p className="mt-2 text-sm text-ink-soft">{s.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}