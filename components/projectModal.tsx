'use client';
import Image from "next/image"
import { useRef, useState } from "react";
import { useOnClickOutside } from "./click-handler";
import DetailsCard from "./detailsCard";
export default function ProjectModal({id, details, title, image, list, listTitle, link}:{id, details: string, list: { item: string, link: string}[], listTitle: string, link: any, title: string, image:{src:string, alt:string}}){
    const ref = useRef();
    const [isModalOpen, setModalOpen] = useState(false)
    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);
    useOnClickOutside(ref, () => setModalOpen(false));

    if (isModalOpen) return(
        <div
        id={id}
        key={`${id} modal open`} 
        className={`fixed top-0 left-0 w-full h-full grow max-h-screen mx-auto place-content-center bg-background/75 z-30 overflow-auto overscroll-contain py-12`}
        >
          <div className={`flex transform justify-center items-center overscroll-contain px-3 pt-3 ${isModalOpen ? "animate-slideUpEnter":"animate-slideUpLeave"}`}>
            <div className="flex flex-col transform duration-300 ease-in-out p-2">
              <button className="absolute justify-self-end right-0 top-0 hover:scale-105 rounded-sm bg-red-600 pb-1 z-40 -mt-6 h-6 w-6" onClick={!isModalOpen ? close : open }>
                <p className="text-2xl hover:animate-pulse -mt-[5px] text-gray-300 font-black">x</p>
              </button>
              <div ref={ref} className="">
                <DetailsCard
                  details={details}
                  link={link}
                  list={list}
                  image={image}
                  title={title}
                  listTitle={listTitle} />
              </div>
            </div>
          </div>
        </div>
        )
        else return (
        <div id={id} key={`${id} modal closed`} className={`relative flex flex-col overscroll-none rounded-lg bg-background group aspect-video hover:text-center overflow-hidden hover:scale-110 z-10 group-hover:z-40 transition-all ease-in-out hover:border-secondary w-80 md:w-60 lg:w-80`} onClick={!isModalOpen ? open : close } style={{cursor: "pointer"}}>
                <Image src={image.src} fill alt={image.alt} style={{objectFit: 'cover'}} sizes={'50vw'} className={`absolute blur-sm group-hover:blur-none group-hover:animate-wiggle transition-all ease-in-out group-hover:scale-150 group-hover:rotate-12 delay-100`}/>
                <div className={`relative text-left justify-center flex flex-col p-2 drop-shadow-xl w-full rounded-md overflow-none mr-auto group-hover:mx-auto bg-gradient-to-t from-background from-80% to-transparent mt-auto transition ease-in-out overscroll-none`}>
                
                    <h2 className={`flex relative hover:text-secondary text-primary font-extrabold text-[7.2vw] md:text-[1.5vw] drop-shadow-4xl transition-all ease-in-out delay-150 scale-100 group-hover:text-[8vw] group-hover:md:text-[1.6vw] font-sans`}>{title}</h2>
                    <hr className={`relative w-full group-hover:w-4/5 border-primary justify-self-center transition-all ease-in-out delay-200`}></hr>
                    <h3 className={`relative text-primary text-md font-mono text-left transition-all ease-in-out`}>{listTitle}</h3>
            
                </div>
        </div>
    )
}