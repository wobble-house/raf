'use client'
import Link from "next/link"
import Line from "./line"
import ImageHandler, { SVG } from "./image-handler"
import { H1,H3 } from "./header-text"

export function AboutDetails({ 
    children,
    image,
    link,
    list,
    listTitle,
    title,
   }:{ 
      children?: any,
      image: {
          src: string,
          alt: string
      },
      link: any,
      list:{
        alt: string
        href: string,
        src: string,
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
                <Line direction="left"/>
            </div>
        </div>
        <DetailsCard link={link} listTitle={listTitle} list={list} title={"Bio"} markdown>{children}</DetailsCard>
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
        alt: string
        href: string,
        src: string,
            }[],
      listTitle: string,
      title : string,
   }){
    return(
    <div className={`relative flex flex-col max-w-lg mx-auto justify-center gap-10 shadow-2xl`}>
        <div className={`relative flex flex-col md:flex-row rounded-lg gap-8 md:gap-4 items-start justify-start group overscroll-auto bg-gradient-radial from-accent from-25% via-background shadow-2xl`}>
            <div className={`absolute w-full h-[80%] overflow-hidden mt-20 rounded-b-lg`}>
                <ImageHandler src={image.src} alt={image.alt} fill style={{objectFit: 'cover'}} sizes={'80vw'} className='z-20 animate-slomo transition-all ease-in-out'/>
            </div>
            <div className={`z-20 relative flex flex-col px-4 pt-2 pb-4 w-full group min-h-[300px] shadow-2xl`}>
                <H1>{title}</H1>
                <Line direction="left"/>
            </div>
        </div>
        <DetailsCard details={details} link={link} listTitle={listTitle} list={list} title={"Details"}/>
    </div>
    )
}


export function SkillsCard({listTitle,list}){
    return(
        <div className={`relative flex flex-col gap-1 shadow-xl p-8 mb-10 rounded-lg group bg-gradient-radial from-zinc-900 to-background/75`}>
                    <H3>{listTitle}</H3>
            <Line direction="left"/>
            <ul className="relative h-full flex flex-wrap py-2 group gap-10 justify-center">
            { list.map((item, index) => (
                        <li key={index} className={`relative max-w-[100px] `}>
                <SVG href={item.href} src={item.src} alt={item.alt}/>
                </li>
            ))}
        </ul>
    </div>
    )
}

export function DetailsCard({children, details,link,listTitle,list,title,markdown}:{children?, details?:string,link:any,listTitle:string,list:{alt:string,href:string,src:string}[],title:string,markdown?:boolean}){

    return(
        <div className="rounded-md">
            <SkillsCard list={list} listTitle={listTitle}/>
            <div className={`flex flex-col gap-1 shadow-xl p-8 mb-20 rounded-lg group bg-gradient-radial from-zinc-900 to-background/75`}>
                
                <H3>{title}</H3>
            
                <Line direction="left"/>
                {markdown ? children : <p className={`font-thin text-sm`}>{details}</p>}
                <div className="flex flex-row gap-2 w-full justify-evenly">
                <Link href={link} className="text-secondary hover:bg-primary hover:text-background hover:font-bold border-primary border-2 hover:border-none rounded-md hover:rounded-lg hover:animate-pulse active:scale-90 px-2 hover:scale-110">Link to website</Link>
                <Link href={link} className="text-secondary hover:bg-primary hover:text-background hover:font-bold border-primary border-2 hover:border-none rounded-md hover:rounded-lg hover:animate-pulse px-2 hover:scale-110">Github</Link>
                </div>
        </div>
        </div>
    )
}