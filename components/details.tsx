'use client'
import Link from "next/link"
import Line from "./line"
import ImageHandler from "./image-handler"
import { H1,H3 } from "./header-text"

export function AboutDetails({ 
    details,
    image,
    link,
    list,
    listTitle,
    title,
   }:{ 
      details: string,
      image: {
          src: string,
          alt: string
      },
      link: any,
      list:{
                item: string,
                link: string
            }[],
      listTitle: string,
      title : string,
   }){
    return(
        <div className={`relative flex flex-col max-w-lg mx-auto justify-center gap-10`}>
    <div className={`relative flex flex-col md:flex-row rounded-lg gap-8 md:gap-4 items-start justify-start group overscroll-auto bg-gradient-radial from-zinc-900 to-background shadow-2xl`}>
            <ImageHandler src={image.src} alt={image.alt} className='z-20 absolute pt-20 rounded-lg'/>
            <div className={`z-20 relative flex flex-col px-4 pt-2 pb-4 w-full group min-h-[300px] shadow-2xl`}>
                <H1>{title}</H1>
                <Line/>
            </div>
        </div>
        <DetailsCard details={details} link={link} listTitle={listTitle} list={list}/>
    </div>
    )
}

export function ProjectDetails({ 
    details,
    image,
    link,
    list,
    listTitle,
    title,
   }:{ 
      details: string,
      image: {
          src: string,
          alt: string
      },
      link: any,
      list:{
                item: string,
                link: string
            }[],
      listTitle: string,
      title : string,
   }){
    return(
    <div className={`relative flex flex-col max-w-lg mx-auto justify-center gap-10 shadow-2xl`}>
        <div className={`relative flex flex-col md:flex-row rounded-lg gap-8 md:gap-4 items-start justify-start group overscroll-auto bg-gradient-radial from-accent from-25% via-background shadow-2xl`}>
            <ImageHandler src={image.src} alt={image.alt} className='z-20 absolute pt-20'/>
            <div className={`z-20 relative flex flex-col px-4 pt-2 pb-4 w-full group min-h-[300px] shadow-2xl`}>
                <H1>{title}</H1>
                <Line/>
            </div>
        </div>
        <DetailsCard details={details} link={link} listTitle={listTitle} list={list}/>
    </div>
    )
}

export function SkillsCard({listTitle,list}){
    return(
        <div className={`flex flex-col gap-1 shadow-xl p-8 mb-10 rounded-lg group bg-gradient-radial from-zinc-900 to-background/75`}>
        <ul className="relative h-full list-inside list-disc py-2 font-mono group">
            <H3>{listTitle}</H3>
            <Line/>
            { list.map((item, index) => (
            <li key={index} className={`text-foreground text-sm group-hover:scale-110 group-hover:ml-5 group-hover:text-primary`}>
                <Link href={item.link}>{item.item}</Link>
            </li>
            ))}
        </ul>
    </div>
    )
}

export function DetailsCard({details,link,listTitle,list}){

    return(
        <div className="rounded-md">
            <SkillsCard list={list} listTitle={listTitle}/>
            <div className={`flex flex-col gap-1 shadow-xl p-8 mb-20 rounded-lg group bg-gradient-radial from-zinc-900 to-background/75`}>
                
                <H3>Details</H3>
            
                <Line/>
                <p className={`font-thin text-sm`}>
                    {details}
                </p>
                <ul className="flex flex-row gap-2 w-full justify-evenly">
                <Link href={link} className="text-secondary hover:bg-primary hover:text-background hover:font-bold border-primary border-2 hover:border-none rounded-md hover:rounded-lg hover:animate-pulse active:scale-90 px-2 hover:scale-110">Link to website</Link>
                <Link href={link} className="text-secondary hover:bg-primary hover:text-background hover:font-bold border-primary border-2 hover:border-none rounded-md hover:rounded-lg hover:animate-pulse px-2 hover:scale-110">Github</Link>
                </ul>
        </div>
        </div>
    )
}