"use client"
import {ReactNode} from "react";
import {useConvexAuth} from "convex/react";
import {Loader} from "lucide-react";
import {redirect} from "next/navigation";
import Navigation from "@/app/(main)/_components/Navigation";

export default function MainLayout({children}: {children: ReactNode}){
    const {isLoading, isAuthenticated} = useConvexAuth();

    if(isLoading){
        return (
            <div className="h-full flex justify-center items-center">
                <Loader className="w-6 h-6 animate-spin" />
            </div>
        )
    }

    if(!isAuthenticated){
        return redirect("/")
    }
    return <div className="h-full flex dark:bg-[#1f1f1f]">
        <Navigation />
        <main className="flex-1 h-full overflow-y-auto">
            {children}
        </main>
    </div>
}