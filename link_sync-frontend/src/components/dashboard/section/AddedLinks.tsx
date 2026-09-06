"use client"
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Plus, Save } from 'lucide-react'
import LinkedIn from "../../../../public/img/icons/linkedin.png"
import Github from "../../../../public/img/icons/github.png"
import Instagram from "../../../../public/img/icons/instagram.png"
import { useEffect, useState } from 'react'
import LinkCard from '../LinkCard'
import { useSetPlatformMutation } from '@/src/redux/apis/appApis'
import { useAppDispatch, useAppSelector } from '@/src/redux/hooks'
import { setIsSaved } from '@/src/redux/features/linkSlice'

const linksData = [
    {
        id: 1,
        platform: "LinkedIn",
        icon: LinkedIn,
        url: "",
        enabled: true,
    },
    {
        id: 2,
        platform: "GitHub",
        icon: Github,
        url: "",
        enabled: true,
    },
    {
        id: 3,
        platform: "Instagram",
        icon: Instagram,
        url: "",
        enabled: true,
    },
]

type SavedLink = {
    platform: string;
    url: string;
    enabled: boolean;
};

const AddedLinks = () => {

    const [links, setLinks] = useState(linksData)
    const [setPlatform, { isLoading: isSaving }] = useSetPlatformMutation()
    const user = useAppSelector((state) => state?.auth?.user?.links)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (!user) return;

        // The authenticated profile arrives after hydration, so initialize the editable draft once it is available.
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLinks((currentLinks) =>
            currentLinks.map((localLink) => {
                const apiLink = user.find(
                    (item: SavedLink) => item.platform === localLink.platform
                );

                if (!apiLink) {
                    return localLink;
                }

                return {
                    ...localLink,
                    url: apiLink.url,
                    enabled: apiLink.enabled,
                };
            })
        );
    }, [user]);

    const handleUrlChange = (id: number, url: string) => {
        setLinks((prev) =>
            prev.map((link) =>
                link.id === id ? { ...link, url } : link
            )
        );
    };

    const handleSwitchChange = (id: number, enabled: boolean) => {
        setLinks((prev) =>
            prev.map((link) =>
                link.id === id ? { ...link, enabled } : link
            )
        );
    };

    const handleSave = async () => {
        const formattedLinks = links.map((link, index) => ({
            platform: link.platform,
            url: link.url,
            enabled: link.enabled,
            order: index,
        }));

        // console.log("Formatted Links:", formattedLinks);

        try {
            const resp = await setPlatform({
                links: formattedLinks,
            }).unwrap();
            if (resp.success) {
                dispatch(setIsSaved(true));
            }
            // console.log(resp);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <section className="mt-5 overflow-hidden rounded-2xl border border-hairline/80 bg-white shadow-[0_12px_40px_-24px_rgba(14,42,46,0.35)]">
            <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                <div>
                    <p className="text-lg font-semibold text-ink">Your links</p>
                    <p className="mt-1 text-sm text-ink-soft">Add and edit your profile links anytime.</p>
                </div>

                <Button variant="outline" className="h-10 self-start rounded-xl border-dashed border-teal/40 px-4 text-teal hover:bg-teal/5 sm:self-auto">
                    <Plus className="size-4" /> <span>Add new link</span>
                </Button>
            </div>

            <Separator className="bg-hairline/70" />

            <div className="space-y-3 p-4 sm:p-6">
                {links.map((link) => (
                    <LinkCard
                        key={link.id}
                        platform={link.platform}
                        icon={link.icon}
                        url={link.url}
                        enabled={link.enabled}
                        onUrlChange={(value) => handleUrlChange(link.id, value)}
                        onSwitchChange={(checked) =>
                            handleSwitchChange(link.id, checked)
                        }
                    />
                ))}
                <div className="mt-5 flex items-center justify-between gap-4 border-t border-hairline/70 pt-5">
                    <p className="hidden text-xs text-ink-soft sm:block">Changes will appear in your live preview after saving.</p>
                    <Button className="ml-auto h-10 rounded-xl bg-[#194d33] px-5 text-white hover:bg-[#123b27]" onClick={handleSave} disabled={isSaving}>
                        <Save className="size-4" />
                        {isSaving ? "Saving..." : "Save changes"}
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default AddedLinks
