'use client'
import Nav from "./nav"
export default function Header(){
    return(
        <header className={`z-10 flex flex-col items-center w-full dark`}>
            <Nav/>
        </header>
    )
}