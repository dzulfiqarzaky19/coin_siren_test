import { cn } from "@/utils/cn";

interface IDividerProps {
    className?: string;
}

export const Divider = ({ className }: IDividerProps) => (
    <div className={cn("border-t-2 w-[129px]", className)} />
);
