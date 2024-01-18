'use client'
import Link from "next/link"
import ImageHandler from "./image-handler"
export default function DetailsCard({ 
    details,
    link,
    title,
    listTitle,
    list,
    image,
   }:{ 
      details: string,
      link: any,
      image: {
          src: string,
          alt: string
      },
      list:{
                item: string,
                link: string
            }[],
      listTitle: string,
      title : string,
   }){
    return(
    <div className={`relative flex flex-col max-w-lg mx-auto justify-center gap-10`}>
        <div className={`relative flex flex-col md:flex-row rounded-lg gap-8 md:gap-4 items-start justify-start group overflow-hidden overscroll-auto bg-gradient-radial from-zinc-900 to-background`}>
            <ImageHandler src={image.src} alt={image.alt} className='z-20 absolute pt-20'/>
            <div className={`z-20 relative flex flex-col px-4 pt-2 pb-4 w-full group min-h-[300px] shadow-2xl`}>
                <h1 className={` z-50 text-4xl md:text-5xl text-center font-extrabold text-primary hover:text-secondary group-hover:scale-105 transition-all ease-in-out font-sans`}>{title}</h1>
                <hr className={`border-[1px] border-primary border-solid rounded-full my-2 w-full group-hover:w-5/6 mx-auto transition-all ease-in-out`}></hr>
                
            </div>
        </div>
        <div className={`flex flex-col p-4 gap-1 bg-gradient-radial from-zinc-900 to-background shadow-xl pt-8 overflow-hidden rounded-lg group`}>
        <ul className="relative flex flex-col h-full list-inside list-disc p-2 group-hover:scale-105 font-mono">
                    <h3 className={`text-2xl font-mono text-foreground hover:scale-110 hover:text-primary hover:ml-6`}>{listTitle}</h3>
                    { list.map((item, index) => (
                    <li key={index} className={`text-foreground text-sm hover:scale-110 hover:ml-5 hover:text-primary`}>
                        <Link href={item.link}>{item.item}</Link>
                    </li>
                    ))}
                </ul>
            <h2 className={`text-2xl font-extrabold text-primary hover:text-secondary group-hover:text-3xl transition-all ease-in-out font-sans`}>Details</h2>
            <hr className="border-primary border-[1px] active:scale-110 w-full group-hover:w-4/5 my-2 transition-all ease-in-out"></hr>
            <p className={`font-mono`}>
                {details}
            </p>
            <Link href={link}>Github Link</Link>
        </div>
    </div>
    )
}