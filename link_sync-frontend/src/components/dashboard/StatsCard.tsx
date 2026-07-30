import { StatsCardProps } from "@/src/types/dashboard";
import { TrendingUp } from "lucide-react";

const StatsCard = ({
    title,
    value,
    change,
    icon: Icon,
    iconBg,
    iconColor,
}: StatsCardProps) => {
    return (
        <div className="flex items-center gap-4 p-6">
            <div
                className={`flex h-10 w-10 items-center justify-center rounded-full ${iconBg}`}
            >
                <Icon className={`h-5 w-5 ${iconColor}`} />
            </div>

            <div>
                <p className="text-sm text-muted-foreground font-mono">{title}</p>

                <h2 className="mt-1 text-xl font-display">{value}</h2>

                <div className="mt-2 flex items-center gap-1 text-sm text-emerald-600">
                    <TrendingUp className="h-4 w-4" />
                    <span>{change} this week</span>
                </div>
            </div>
        </div>
    );
};

export default StatsCard;