"use client"
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useAppSelector } from "@/src/redux/hooks";
import { RootState } from "@/src/redux/store";

const PreviewPanel = () => {
    const user = useAppSelector((state: RootState) => state.auth.user);
    const initials = user?.username
        ? user.username.slice(0, 2).toUpperCase()
        : "??";
    return (
        <aside className="hidden xl:block w-120 border-l border-border bg-background/60 backdrop-blur-xl">
            <div className="sticky top-20 p-6">
                <h2 className="font-semibold text-lg">Live Preview</h2>

                <div className="mt-6 flex justify-center min-h-96 bg-green-950 rounded-3xl">
                    {/* Phone mockup goes here */}
                    <div
                        className="flex items-center flex-col gap-2.5 px-3 py-2 rounded-xl justify-center"
                    >
                        <Avatar className="h-20 w-20 shrink-0">
                            <AvatarFallback
                                className="font-mono text-xl font-bold"
                            //   style={{ backgroundColor: SIGNAL, color: SCOPE }}
                            >
                                {initials}
                            </AvatarFallback>
                        </Avatar>
                        <span className="text-white/70 text-2xl font-display truncate">
                            {user?.username ?? ""}
                        </span>
                        <span className="text-white/70 text-xs font-mono">
                            email: {user?.email ?? ""}
                        </span>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default PreviewPanel;