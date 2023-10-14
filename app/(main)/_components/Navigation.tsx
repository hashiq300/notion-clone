"use client"

import {ChevronLeft, MenuIcon} from "lucide-react";
import {useRef, ElementRef, useState} from "react";
import {useMediaQuery} from "usehooks-ts";
import {usePathname} from "next/navigation";
import {cn} from "@/lib/utils";

export default function Navigation(){
    const pathname = usePathname();
    const isResizingRef = useRef(false);
    const sidebarRef = useRef<ElementRef<"aside">>(null);
    const navbarRef = useRef<ElementRef<"div">>(null);
    const isMobile = useMediaQuery("(max-width: 768px)");
    const [isResetting, setIsResetting] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(isMobile);

    const MAX_SIDEBAR_WIDTH = 480;
    const MIN_SIDEBAR_WIDTH = 480;

    const handleMouseUp = () => {
        isResizingRef.current = false;
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
    }

    const  handleMouseMove = (event: MouseEvent) => {
        if(!isResizingRef.current){
            return
        }

        let newWidth = event.clientX;

        if(newWidth < MIN_SIDEBAR_WIDTH){
            newWidth = MIN_SIDEBAR_WIDTH;
        }

        if(newWidth > MAX_SIDEBAR_WIDTH){
            newWidth = MAX_SIDEBAR_WIDTH;
        }

        if(sidebarRef.current && navbarRef.current){
            sidebarRef.current.style.width = `${newWidth}px`;
            navbarRef.current.style.left = `${newWidth}px`;
            navbarRef.current.style.width = `calc(100% - ${newWidth}px)`;
        }
    }
    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.preventDefault();
        event.stopPropagation();


        isResizingRef.current = true;
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    }





    return (
        <>
            <aside ref={sidebarRef} className={cn("group/sidebar h-full bg-secondary overflow-y-auto relative flex w-60 flex-col z-[100]", isResetting && "transition-all ease-in-out duration-300", isMobile && "w-0")}>

                <button className={cn(
                    "h-6 w-6 text-muted-foreground rounded-full hover:bg-neutral-300 dark:hover:bg-neutral-600 absolute top-3 right-2 opacity-0 group-hover/sidebar:opacity-100 transition-opacity flex justify-center items-center",
                    isMobile && "opacity-100"
                )}>
                    <ChevronLeft className="h-6 w-6" />
                </button>
                <div>
                    <p>Action Item</p>
                </div>
                <div className="mt-4">
                    <p>Action Item</p>
                </div>
               <div
                   onMouseDown={handleMouseDown}
                   onClick={() => {}}
                   className="opacity-0 group-hover/sidebar:opacity-100 transition-opacity cursor-ew-resize absolute h-full w-1 bg-primary/10 right-0 top-0"
               />
            </aside>
            <div ref={navbarRef} className={cn(
                "absolute top-0 z-[1000] left-[240px] w-[calc(100%-240px)]",
                isResetting && "transition-all ease-in-out duration-300",
                isMobile && "left-0 w-full"
            )}>
                <nav className="bg-transparent px-3 py-2 w-full">
                    {isCollapsed && (
                        <button>
                            <MenuIcon className="h-6 w-6 text-muted-foreground" />
                        </button>
                    )}
                </nav>
            </div>
        </>
    )
}