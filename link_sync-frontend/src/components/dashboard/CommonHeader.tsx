import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Bell, Sun } from "lucide-react"

const CommonHeader = () => {
    return (
        <header className="sticky top-0 z-30 h-20 backdrop-blur-xl">
            <div className="flex h-full items-center justify-between px-10">
                <div>
                    {/* <h1 className="text-xl font-semibold">
                        Dashboard
                    </h1> */}
                </div>

                <div className="flex items-center gap-3">

                    <Button size="icon" variant="ghost">
                        <Bell />
                    </Button>

                    <Button size="icon" variant="ghost">
                        <Sun />
                    </Button>

                    <Avatar>
                        <AvatarFallback>
                            HC
                        </AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </header>
    )
}

export default CommonHeader