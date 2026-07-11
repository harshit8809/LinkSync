import { memo } from "react";

type AuthTab = "signup" | "login";

export function Logomark() {
    return (
        <svg viewBox="0 0 20 20" className="h-5 w-5" aria-hidden="true">
            <circle cx="7" cy="10" r="6" fill="var(--teal)" opacity="0.85" style={{ mixBlendMode: "multiply" }} />
            <circle cx="13" cy="10" r="6" fill="var(--amber)" opacity="0.85" style={{ mixBlendMode: "multiply" }} />
        </svg>
    );
}



function Header({ onAuth }: { onAuth: (tab: AuthTab) => void }) {
    return (
        <header className="sticky top-0 z-50 border-b border-hairline bg-paper/90 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <a href="#top" className="flex items-center gap-2">
                    <Logomark />
                    <span className="font-display text-lg font-semibold text-ink">LinkSync</span>
                </a>

                <nav className="hidden items-center gap-8 font-mono text-xs uppercase tracking-wide text-ink-soft md:flex">
                    <a href="#why" className="hover:text-ink">Why</a>
                    <a href="#how-it-works" className="hover:text-ink">How it works</a>
                    <a href="#platforms" className="hover:text-ink">Platforms</a>
                </nav>

                <div className="flex items-center gap-3">
                    <a
                        href="#auth"
                        onClick={() => onAuth("login")}
                        className="rounded-full px-4 py-2 text-sm font-medium text-ink hover:bg-black/5"
                    >
                        Log in
                    </a>

                    <a
                        href="#auth"
                        onClick={() => onAuth("signup")}
                        className="rounded-full bg-amber px-4 py-2 text-sm font-semibold text-ink transition hover:brightness-95"
                    >
                        Sign up
                    </a>
                </div>
            </div>
        </header>
    );
}

export default memo(Header);