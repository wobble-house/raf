'use client'
import Nav from "./nav"
export default function Header(){
    return(
        <nav className={`z-10 relative flex flex-col items-center w-full rounded-md bg-gradient-radial from-slate-900 to-background/75`}>
            <Nav/>
        </nav>
    )
}