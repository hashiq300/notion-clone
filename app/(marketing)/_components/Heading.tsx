"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

function Heading() {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">Your Idea's, Documents, & Plans. Unified. Welcome to <span className="underline">Jotion</span>.</h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Jotion is the connected workspace where <br />
        better, faster work happens
      </h3>
      <Button className="gap-1.5 group">
        Enter Joshan
        <ArrowRight className="h-4 group-hover:translate-x-1 group-focus-visible:translate-x-1 group-focus:translate-x-1 transition-transform" />
      </Button>
    </div>
  )
}

export default Heading