'use client';
import { useRef, useState, useEffect } from "react";
import { useOnClickOutside } from "./click-handler";
import {DashboardDetails} from "./details";
import { AnimatePresence, motion, useAnimate, stagger, } from "framer-motion";
export default function DashboardModal({id, children, column, details, position, title, list, listTitle, link}:{id, children, column?, details: string, list: { item: string, link: string}[], listTitle: string, link: any, position?: any, title: string}){
    const ref = useRef();
    const [isModalOpen, setModalOpen] = useState(false)
    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);
    useOnClickOutside(ref, () => setModalOpen(false));

    return(
      <AnimatePresence>
        {isModalOpen && (
        <div
        id={id}
        key={`${id} modal open`} 
        className={`fixed top-0 left-0 w-full h-full grow max-h-screen mx-auto place-content-center bg-background/75 z-60 overflow-auto overscroll-contain py-12`}
        >
          <motion.li 
                  initial={{
                    opacity: 0,
                    scale: 0,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0,
                  }}
                  className={`flex transform justify-center items-center overscroll-contain px-3 pt-3`}>
            <div className="flex flex-col transform duration-300 ease-in-out p-2">
              <button className="absolute justify-self-end right-0 top-0 hover:scale-105 rounded-sm bg-accent2 pb-1 z-40 -mt-6 h-6 w-6 active:animate-hardwiggle" onClick={!isModalOpen ? close : open }>
                <p className="text-2xl hover:animate-pulse -mt-[5px] text-gray-300 font-black">x</p>
              </button>
              <div ref={ref} className="">
                <DashboardDetails
                  details={details}
                  link={link}
                  list={list}
                  title={title}
                  listTitle={listTitle} />
              </div>
            </div>
          </motion.li>
        </div>
        )}
        {!isModalOpen && (
        <motion.li
        id={id} 
        key={`${id} modal closed`} 
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          scale: 0,
        }}
        className={`${!column ? "": ("col-start-"+column)} ${position == "top"?"justify-start":"justify-end"} relative group flex flex-col overscroll-none rounded-lg bg-gradient-radial from-zinc-900 to-background/75 hover:text-center z-10 aspect-square`} onClick={!isModalOpen ? open : close } style={{cursor: "pointer"}}>
            {children}
        </motion.li>
        )}
        </AnimatePresence>
        )
}