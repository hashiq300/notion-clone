"use client";

import useScrollTop from "@/hooks/use-scroll-top";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { ModeToggle } from "@/components/common/mode-toggle";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export default function Navbar() {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const scrolled = useScrollTop();
  return (
    <header
      className={cn(
        "z-50 bg-background dark:bg-[#1f1f1f] fixed top-0 flex items-center w-full p-6",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        {isLoading && <Button className="min-w-[70px]"  size="sm" disabled><Skeleton className="w-[40px] h-5" /></Button>}
        {!isLoading && !isAuthenticated && (
          <>
          <SignInButton mode="modal">
            <Button className="min-w-[70px]" size="sm">
              Log in
            </Button>
          </SignInButton>
          </>
        )}
        <ModeToggle />
      </div>
    </header>
  );
}
