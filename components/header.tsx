'use client'
import Nav from "./nav"
import { usePathname } from "next/navigation"
export default function Header(){
    const pathname = usePathname().slice(1);
    return(
        <header className={`z-10 flex flex-col items-center w-full mt-32 dark`}>
            <Nav/>
            <div className={`z-10 absolute py-20 md:py-10 w-full`}>
                <h2 className={`text-6xl uppercase text-center font-black pb-4`}>{pathname == "" ? "Home" : `${pathname}`}</h2>
            </div>
        </header>
    )
}