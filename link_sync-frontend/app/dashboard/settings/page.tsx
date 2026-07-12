import { Button } from "@/components/ui/button"
import Sidebar from "@/src/components/dashboard/Sidebar"

const page = () => {
    return (
        
            <nav className="md:hidden fixed bg-amber-400">
                <Button
                    variant="default"
                    // onClick={handleLogout}
                    className="flex flex-col items-center gap-1 px-3 py-2 h-auto rounded-xl text-white/40 hover:text-red-400 hover:bg-red-500/10 transition-all"
                >
                    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M13 15l3-5-3-5" />
                        <path d="M16 10H7" />
                        <path d="M7 3H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h3" />
                    </svg>
                    <span className="text-[10px] font-mono">Logout</span>
                </Button>
            </nav>
    )
}

export default page