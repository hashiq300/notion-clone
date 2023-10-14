"use client";

import useScrollTop from "@/hooks/use-scroll-top";
import {SignInButton, UserButton} from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import { ModeToggle } from "@/components/common/mode-toggle";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link"

export default function Navbar() {
  const { isAuthenticated, isLoading } = useConvexAuth();
  const isLoggedIn = isAuthenticated && !isLoading;
  const scrolled = useScrollTop();
  return (
    <header
      className={cn(
        "z-50 bg-background dark:bg-[#1f1f1f] fixed top-0 flex items-center w-full p-6",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-3.5">
        {isLoading && <Button role="alert" aria-busy="true" className="min-w-[8em]"  size="sm" disabled><Skeleton className="w-[5.5em] h-5" /></Button>}
        {!isLoading && !isAuthenticated && (
          <>
          <SignInButton mode="modal">
            <Button className="min-w-[8em]" size="sm">
              Log in
            </Button>
          </SignInButton>
          </>
        )}
        {isLoggedIn && (
            <>
              {/* TODO: Dark theme for userbutton*/}
              <UserButton afterSignOutUrl="/"/>
              <Button size="sm" asChild className="min-w-[6em]">
                  <Link href="/documents">
                    Enter Joshan
                  </Link>
              </Button>
            </>
        )}
        <ModeToggle />
      </div>
    </header>
  );
}
