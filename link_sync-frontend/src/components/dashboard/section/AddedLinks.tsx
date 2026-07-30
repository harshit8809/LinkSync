"use client"
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Plus } from 'lucide-react'
import LinkedIn from "../../../../public/img/icons/linkedin.png"
import Github from "../../../../public/img/icons/github.png"
import Instagram from "../../../../public/img/icons/instagram.png"
import { useState } from 'react'
import LinkCard from '../LinkCard'

const linksData = [
    {
        id: 1,
        name: "LinkedIn",
        icon: LinkedIn,
        url: "",
        enabled: true,
    },
    {
        id: 2,
        name: "GitHub",
        icon: Github,
        url: "",
        enabled: true,
    },
    {
        id: 3,
        name: "Instagram",
        icon: Instagram,
        url: "",
        enabled: true,
    },
]

const AddedLinks = () => {

    const [links, setLinks] = useState(linksData)

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

    const handleSave = () => {
        console.log(links);
    };

    return (
        <div className="rounded-xl border-2 mt-4 p-4">
            <div className="flex items-center justify-between mb-5">
                <div>
                    <p className="font-bold">Your links</p>
                    <p className="font-mono text-xs">Add and edit your profile links anytime</p>
                </div>

                <Button className="md:px-6 md:py-5 rounded-4xl">
                    <Plus /> <p className="md:text-s text-xs font-mono">Add New Link</p>
                </Button>
            </div>

            <Separator />

            <div className="mt-4 space-y-4">
                {links.map((link) => (
                    <LinkCard
                        key={link.id}
                        name={link.name}
                        icon={link.icon}
                        url={link.url}
                        enabled={link.enabled}
                        onUrlChange={(value) => handleUrlChange(link.id, value)}
                        onSwitchChange={(checked) =>
                            handleSwitchChange(link.id, checked)
                        }
                    />
                ))}
            </div>

            <Button className="mt-4" onClick={handleSave}>
                Save
            </Button>
        </div>
    )
}

export default AddedLinks