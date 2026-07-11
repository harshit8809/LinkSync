import AppLogo from "./AppLogo";

function Footer() {
    return (
        <footer className="border-t border-hairline bg-white">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row">
                <div className="flex items-center gap-2">
                    <AppLogo/>
                    <span className="hidden font-mono text-xs text-ink-soft sm:inline">
                        — all your channels, one current.
                    </span>
                </div>
                <p className="font-mono text-xs text-ink-soft">© 2026 LinkSync</p>
            </div>
        </footer>
    );
}

export default Footer;