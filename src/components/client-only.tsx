"use client";

import { type ReactNode, useEffect, useState } from "react";

export interface ClientOnlyProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export function ClientOnly(props: ClientOnlyProps): ReactNode {
  const { children, fallback } = props;
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return fallback || null;
  }

  return <>{children}</>;
}
