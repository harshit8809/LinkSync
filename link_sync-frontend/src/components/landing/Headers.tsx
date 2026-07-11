import { memo } from "react";
import AppLogo from "../AppLogo";

type AuthTab = "signup" | "login";


function Header({ onAuth }: { onAuth: (tab: AuthTab) => void }) {
    return (
        <header className="sticky top-0 z-50 border-b border-hairline bg-paper/90 backdrop-blur">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
               <AppLogo/>

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