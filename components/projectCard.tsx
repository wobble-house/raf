'use client';
import Image from "next/image"
export default function ProjectCard({id, title, type, image}:{id, title: string, type:string, image:{src:string, alt:string}}){
    return(
        <div id={id} className={`relative flex flex-col overscroll-none border-2 border-primary rounded-lg bg-background group aspect-video hover:text-center overflow-hidden hover:scale-125 z-30 group-hover:z-40 transition-all ease-in-out hover:border-secondary w-80 md:w-60 lg:w-80`}>
            <Image src={image.src} fill alt={image.alt} style={{objectFit: 'cover'}} sizes={'50vw'} className={`absolute blur-sm group-hover:blur-none transition-all ease-in-out group-hover:scale-150 group-hover:rotate-12 delay-100`}/>
            <div className={`relative text-left justify-center flex flex-col p-2 drop-shadow-xl w-full rounded-md overflow-none mr-auto group-hover:mx-auto bg-gradient-to-t from-background from-80% to-transparent mt-auto transition ease-in-out overscroll-none`}>
                
                <h2 className={`flex relative hover:text-secondary text-primary font-extrabold text-[7.2vw] md:text-[1.5vw] drop-shadow-4xl transition-all ease-in-out delay-150 scale-100 group-hover:text-[8vw] group-hover:md:text-[1.6vw] font-sans`}>{title}</h2>
                <hr className={`relative w-full group-hover:w-4/5 text-accent justify-self-center transition-all ease-in-out delay-200`}></hr>
                <h3 className={`relative text-primary text-md font-mono text-left transition-all ease-in-out`}>{type}</h3>
            
            </div>
        </div>
    )
}