'use client';
import Image from "next/image"
import { AnimatePresence, motion, stagger } from "framer-motion";
import { useRef, useState } from "react";
import { useOnClickOutside } from "./click-handler";
import {ProjectDetails} from "./details";
import { H3 } from "./header-text";
import Line from "./line";
export default function ProjectModal({id, details, title, image, list, listTitle, link}:{id, details: string, list: { alt: string, href: string, src: string}[], listTitle: string, link: any, title: string, image:{src:string, alt:string}}){
    const ref = useRef();
    const [isModalOpen, setModalOpen] = useState(false)
    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);
    useOnClickOutside(ref, () => setModalOpen(false));

    return(
      <AnimatePresence>
        {isModalOpen && (
        <motion.div
        id={id}
        key={`${id} modal open`} 
        className={`fixed top-0 left-0 w-full h-full grow max-h-screen mx-auto place-content-center bg-background/75 z-30 overflow-auto overscroll-contain py-12`}
        >
          <motion.div 
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
                <ProjectDetails
                  details={details}
                  link={link}
                  list={list}
                  image={image}
                  title={title}
                  listTitle={listTitle} />
              </div>
            </div>
          </motion.div>
        </motion.div>
        )}
        {!isModalOpen && (
        <motion.div 
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
        className={`relative group flex flex-col overscroll-none rounded-lg bg-background aspect-video hover:text-center overflow-hidden hover:scale-110 z-10 transition-all ease-in-out w-80 md:w-60 lg:w-80 prevent-selection`} onClick={!isModalOpen ? open : close } style={{cursor: "pointer"}}>
                <Image src={image.src} fill alt={image.alt} style={{objectFit: 'cover'}} sizes={'50vw'} className={`blur-sm hover:blur-none active:animate-hardwiggle transition-all ease-in-out hover:scale-150 hover:animate-slomo delay-100`}/>
                <div className={`relative text-left justify-center flex flex-col p-2 drop-shadow-xl w-full rounded-md overflow-none mr-auto group-hover:mx-auto bg-gradient-to-t from-background from-80% to-transparent mt-auto transition ease-in-out overscroll-none`}>
                
                    <H3>{title}</H3>
                    <Line direction="left"/>
                    <h3 className={`relative text-primary text-md font-mono text-left transition-all ease-in-out group-hover:text-secondary active:animate-hardwiggle`}>{listTitle}</h3>
            
                </div>
        </motion.div>
    )}
    </AnimatePresence>
    )
}