"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useGetUserLinks } from "@/src/customHook/useGetUserLinks";
import { useAppSelector } from "@/src/redux/hooks";
import { RootState } from "@/src/redux/store";
import { Eye, ExternalLink, Link2 } from "lucide-react";
import { useEffect } from "react";

const PreviewPanel = () => {
    const user = useAppSelector(
        (state: RootState) => state.auth.user
    );

    const isSaved = useAppSelector(
        (state: RootState) => state.link.isSaved
    );

    const { fetchUserLinks, userLinks } = useGetUserLinks();

    const initials = user?.username
        ? user.username.slice(0, 2).toUpperCase()
        : "??";

    useEffect(() => {
        fetchUserLinks();
    }, []);

    useEffect(() => {
        if (isSaved) {
            fetchUserLinks();
        }
    }, [isSaved]);

    const enabledLinks = userLinks.filter(
        (link: any) => link.enabled
    );

    return (
        <aside className="hidden xl:block w-md border-l border-border/60 bg-background/70 backdrop-blur-xl">

            <div className="sticky top-20 p-6">

                {/* Header */}
                <div className="flex items-center justify-between">

                    <div>
                        <div className="flex items-center gap-2">
                            <Eye className="h-4 w-4 text-muted-foreground" />

                            <h2 className="text-lg font-semibold">
                                Live Preview
                            </h2>
                        </div>

                        <p className="mt-1 text-xs text-muted-foreground">
                            This is how your profile looks
                        </p>
                    </div>

                    <div className="rounded-full border px-3 py-1 text-xs text-muted-foreground">
                        Preview
                    </div>

                </div>


                {/* Phone Preview */}
                <div className="mt-6 rounded-[2.5rem] border border-white/10 bg-linear-to-br from-[#1f3b33] via-[#16332b] to-[#071b15] p-3 shadow-2xl">

                    {/* Phone Screen */}
                    <div className="min-h-155 rounded-[2rem] border border-white/10 bg-black/10 px-6 py-8">

                        {/* Phone notch */}
                        <div className="mx-auto mb-8 h-1.5 w-16 rounded-full bg-white/20" />


                        {/* Profile */}
                        <div className="flex flex-col items-center text-center">

                            <Avatar className="h-24 w-24 border-4 border-white/10 shadow-xl">

                                <AvatarFallback className="bg-white text-2xl font-bold text-[#16332b]">
                                    {initials}
                                </AvatarFallback>

                            </Avatar>


                            <h3 className="mt-4 text-xl font-semibold text-white">
                                {user?.username ?? "Your Name"}
                            </h3>


                            <p className="mt-1 text-xs text-white/50">
                                {user?.email ?? ""}
                            </p>


                            <div className="mt-4 h-px w-16 bg-white/20" />

                        </div>


                        {/* Links */}
                        <div className="mt-8 space-y-3">

                            {enabledLinks.length > 0 ? (

                                enabledLinks.map((link: any) => (

                                    <a
                                        key={link._id || link.url}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="
                                            group
                                            flex
                                            items-center
                                            justify-between
                                            rounded-xl
                                            border
                                            border-white/10
                                            bg-white/10
                                            px-4
                                            py-4
                                            text-white
                                            backdrop-blur-md
                                            transition-all
                                            duration-200
                                            hover:-translate-y-0.5
                                            hover:bg-white/20
                                            hover:shadow-lg
                                        "
                                    >

                                        <div className="flex items-center gap-3">

                                            <div className="
                                                flex
                                                h-9
                                                w-9
                                                items-center
                                                justify-center
                                                rounded-lg
                                                bg-white/10
                                            ">
                                                <Link2 className="h-4 w-4" />
                                            </div>


                                            <span className="text-sm font-medium">
                                                {link.platform}
                                            </span>

                                        </div>


                                        <ExternalLink
                                            className="
                                                h-4
                                                w-4
                                                text-white/40
                                                transition
                                                group-hover:text-white
                                            "
                                        />

                                    </a>

                                ))

                            ) : (

                                <div className="
                                    flex
                                    flex-col
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    border
                                    border-dashed
                                    border-white/20
                                    py-12
                                    text-center
                                ">

                                    <div className="
                                        flex
                                        h-12
                                        w-12
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-white/10
                                    ">
                                        <Link2 className="h-5 w-5 text-white/60" />
                                    </div>


                                    <p className="mt-4 text-sm font-medium text-white">
                                        No active links
                                    </p>


                                    <p className="mt-1 text-xs text-white/40">
                                        Enable your links to see them here
                                    </p>

                                </div>

                            )}

                        </div>


                        {/* Footer */}
                        <div className="mt-10 text-center">

                            <p className="text-[10px] tracking-widest text-white/30 uppercase">
                                Powered by LinkSync
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </aside>
    );
};

export default PreviewPanel;