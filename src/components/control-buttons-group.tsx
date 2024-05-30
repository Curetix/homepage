"use client";

import { useEffect, useState } from "react";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export function ControlButtonsGroup({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Skeleton className={cn("w-[40px] h-[40px]", className)} />;
  }

  return (
    <div className={cn("flex gap-3", className)}>
      {/*<LocaleSwitcher className="z-10" />*/}
      <ThemeSwitcher className="z-10" />
    </div>
  );
}
