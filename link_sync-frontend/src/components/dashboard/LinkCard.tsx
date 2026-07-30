import Image, { StaticImageData } from "next/image";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

interface LinkCardProps {
  name: string;
  icon: StaticImageData;
  url: string;
  enabled: boolean;
  onUrlChange: (value: string) => void;
  onSwitchChange: (checked: boolean) => void;
}

const LinkCard = ({
  name,
  icon,
  url,
  enabled,
  onUrlChange,
  onSwitchChange,
}: LinkCardProps) => {
  return (
    <div className="rounded-xl border-2 p-6 flex items-center gap-4">
      <Image
        src={icon}
        alt={name}
        width={60}
        height={60}
        className="rounded-full"
      />

      <div className="flex-1">
        <div className="mb-2 flex items-center justify-between">
          <p className="text-xs font-mono">{name}</p>

          <Switch
            checked={enabled}
            onCheckedChange={onSwitchChange}
          />
        </div>

        <Input
          value={url}
          placeholder={`Paste your ${name} profile URL...`}
          onChange={(e) => onUrlChange(e.target.value)}
          className="rounded-2xl border-2 py-6"
        />
      </div>
    </div>
  );
};

export default LinkCard;