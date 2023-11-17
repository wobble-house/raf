'use client';
import Image from "next/image"
export default function ProjectCard({id, title, type, image}:{id, title: string, type:string, image:{src:string, alt:string}}){
    return(
        <div id={id} className={`relative flex flex-col overscroll-none border-[4px] border-foreground rounded-lg bg-background group aspect-video hover:text-center overflow-hidden hover:scale-125 z-30 group-hover:z-40 transition-all ease-in-out`}>
            <Image src={image.src} fill alt={image.alt} style={{objectFit: 'cover'}} sizes={'50vw'} className={`absolute blur-sm group-hover:blur-none transition-all ease-in-out group-hover:scale-125 group-hover:rotate-12 delay-100`}/>
            <div className={`relative text-left justify-center flex flex-col p-2 border-[2px] m-4 rounded-md border-background overflow-auto bg-foreground mr-auto bg-gradient-to-t from-foreground group-hover:from-background from-50% to-transparent mt-auto group-hover:px-6 transition ease-in-out`}>
                
                <h2 className={`relative hover:text-secondary text-primary font-extrabold text-2xl drop-shadow-4xl transition-all ease-in-out delay-150 scale-100 group-hover:scale-110 group-hover:ml-1`}>{title}</h2>
                <hr className={`relative w-full group-hover:w-4/5 text-accent justify-self-center transition-all ease-in-out delay-200`}></hr>
                <h3 className={`relative text-primary text-md font-mono text-left transition-all ease-in-out`}>{type}</h3>
            
            </div>
        </div>
    )
}