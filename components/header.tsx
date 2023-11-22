'use client'
import Nav from "./nav"
import { usePathname } from "next/navigation"
export default function Header(){
    const pathname = usePathname().slice(1);
    return(
        <header className={`z-10 flex flex-col items-center w-full dark`}>
            <Nav/>
        </header>
    )
}