import Image, { StaticImageData } from "next/image";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

interface LinkCardProps {
  platform: string;
  icon: StaticImageData;
  url: string;
  enabled: boolean;
  onUrlChange: (value: string) => void;
  onSwitchChange: (checked: boolean) => void;
}

const LinkCard = ({ platform, icon, url, enabled, onUrlChange, onSwitchChange }: LinkCardProps) => {
  return (
    <article className={`group rounded-xl border p-3 transition-all sm:p-4 ${enabled ? "border-hairline/90 bg-white shadow-sm" : "border-hairline/60 bg-paper/45 opacity-75"}`}>
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-hairline/70 bg-white p-2 sm:size-12">
          <Image src={icon} alt="" width={32} height={32} className="size-7 rounded-md object-contain sm:size-8" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="mb-2.5 flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-ink">{platform}</p>
              <p className="text-[11px] text-ink-soft">{enabled ? "Visible on your profile" : "Hidden from your profile"}</p>
            </div>
            <Switch checked={enabled} onCheckedChange={onSwitchChange} aria-label={`Show ${platform} on your profile`} />
          </div>
          <Input
            value={url}
            placeholder={`Paste your ${platform} profile URL...`}
            onChange={(e) => onUrlChange(e.target.value)}
            className="h-10 rounded-lg border-hairline bg-paper/30 px-3 text-sm shadow-none placeholder:text-ink-soft/60 focus-visible:border-teal focus-visible:ring-teal/20"
          />
        </div>
      </div>
    </article>
  );
};

export default LinkCard;
