'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef } from "react";

export default function Nav(){
    const [navbar, setNavbar] = useState(false);
    const Navref = useRef();
    const pathname = usePathname();
    function handleMainNavButton(){
        (navbar == false ? setNavbar(true): setNavbar(false))
      }
    function handleClose(){
        setNavbar(false)
    }
    return(
        <nav className="flex sticky z-50 md:justify-center top-0 w-full mt-4">
            <div className="flex flex-col-reverse md:flex-row flex-grow justify-end">
                <button className="fixed z-10 md:hidden px-2 rounded-lg focus mr-auto mt-4 ml-5 transition ease-in-out" onMouseDown={handleMainNavButton}>
                  {navbar ? (
                    <svg xmlns="http://www.w3.org/2000/svg"className="w-6 h-6 bg-primary text-background rounded-md"viewBox="0 0 20 20"fill="currentColor">
                      <path fillRule="evenodd"d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"clipRule="evenodd"/>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 border-solid border-1 bg-primary text-background rounded-md"fill="none"viewBox="0 0 24 24"stroke="currentColor"strokeWidth={2}>
                      <path strokeLinecap="round"strokeLinejoin="round"d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                  )}
                </button>
                <div ref={Navref} className={`flex mx-auto md:block  ${navbar ? 'fixed top-0 flex-col min-h-content items-center w-full h-full scale-100 bg-background opacity-80 text-foreground pt-20 text-center' : 'hidden scale-0 md:scale-100'}`}>
                    <ul className="flex flex-col md:flex-row md:items-end gap-2 text-xs">
                        <Link href={'/'} className={`${pathname == '/' ? 'scale-125 px-2 font-normal text-primary hover:text-secondary' : 'scale-100 font-thin hover:text-primary'} transition-all ease-in-out font-sans`} onClick={handleClose}>
                          Home
                          </Link>
                        <Link href={'/about'} className={`${pathname == '/about' ? 'scale-125 px-2 font-normal text-primary hover:text-secondary' : 'scale-100 font-thin hover:text-primary'} transition-all ease-in-out font-sans`} onClick={handleClose}>
                          About
                          </Link>
                        <Link href={'/portfolio'} className={`${pathname == '/portfolio' ? 'scale-125 px-2 font-normal text-primary hover:text-secondary' : 'scale-100 font-thin hover:text-primary'} transition-all ease-in-out font-sans`} onClick={handleClose}> 
                          Portfolio
                          </Link>
                        <Link href={'/stories'} className={`${pathname == '/stories' ? 'scale-125 px-2 font-normal text-primary hover:text-secondary' : 'scale-100 font-thin hover:text-primary'} transition-all ease-in-out font-sans`} onClick={handleClose}>
                          Stories
                          </Link>
                        <Link href={'/contact'} className={`${pathname == '/contact' ? 'scale-125 px-2 font-normal text-primary hover:text-secondary' : 'scale-100 font-thin hover:text-primary'} transition-all ease-in-out font-sans`} onClick={handleClose}>
                          Contact
                          </Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}