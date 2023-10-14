"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import {useConvexAuth} from "convex/react";
import {SignInButton} from "@clerk/clerk-react";
import {Skeleton} from "@/components/ui/skeleton";
import Link from "next/link";

function Heading() {
   const { isAuthenticated, isLoading } = useConvexAuth()
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">Your Idea&apos;s, Documents, & Plans. Unified. Welcome to <span className="underline">Jotion</span>.</h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Jotion is the connected workspace where <br />
        better, faster work happens
      </h3>
        {isLoading && (
            <Button role="alert" aria-busy="true" disabled className="gap-1.5 group min-w-[12.5em]">
                <Skeleton className="h-5 w-[10em]" />
            </Button>
        )}
        {!isLoading && isAuthenticated && (

           <Button className="gap-1.5 group min-w-[12.5em]" asChild>
               <Link href="/documents">
                   Enter Jotion
                   <ArrowRight className="h-4 group-hover:translate-x-2 group-focus-visible:translate-x-2 group-focus:translate-x-2 transition-transform" />
               </Link>
           </Button>

        )}
        {!isAuthenticated && !isLoading && (
           <SignInButton mode="modal">
               <Button className="gap-1.5 group min-w-[12.5em]">
                   Get Jotion Free
                   <ArrowRight className="h-4 group-hover:translate-x-2 group-focus-visible:translate-x-2 group-focus:translate-x-2 transition-transform" />
               </Button>
           </SignInButton>
        )}
    </div>
  )
}

export default Heading