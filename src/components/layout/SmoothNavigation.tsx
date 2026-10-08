"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export function SmoothNavigation({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      // Instantly scroll to top on route change without animation delay
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return <div className="w-full flex-grow flex flex-col">{children}</div>;
}
