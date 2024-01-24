'use client'
import Image from "next/image"
import {H3} from "./header-text"
import Line from "./line"

export function AboutCard(){
    return(
            <div className={`relative text-left flex flex-col p-2 drop-shadow-xl w-full rounded-md mr-auto group-hover:mx-auto transition ease-in-out overscroll-none`}>
                <H3>About card</H3>
                <Line direction="left"/>
            </div>
    )
}

export function PersonalProjectsCard(){
    return(
            <div className={`relative text-right justify-center align-bottom content-end flex flex-col-reverse p-2 drop-shadow-xl w-full rounded-md ml-auto group-hover:mx-auto mt-auto transition ease-in-out overscroll-none`}>
                <H3 position="right">Personal Projects card</H3>
                <Line direction="right"/>
            </div>
    )
}

export function ProfessionalProjectsCard(){
    return(
            <div className={`relative text-left justify-center flex flex-col-reverse p-2 drop-shadow-xl w-full rounded-md overflow-none mr-auto group-hover:mx-auto transition ease-in-out overscroll-none`}>
                <H3>Professional Projects card</H3>
                <Line direction="left"/>
            </div>
    )
}

export function ContactCard(){
    return(
            <div className={`relative text-right justify-center flex flex-col p-2 drop-shadow-xl w-full rounded-md overflow-none mr-auto group-hover:mx-auto transition ease-in-out overscroll-none`}>
                <H3 position="right">Contact card</H3>
                <Line direction="right"/>
            </div>
    )
}

export function SkillsCard(){
    return(
            <div className={`relative text-center justify-center flex flex-col p-2 drop-shadow-xl w-full rounded-md overflow-none mr-auto group-hover:mx-auto transition ease-in-out overscroll-none`}>
                <H3>Skills card</H3>
                <Line direction="center"/>
            </div>
    )
}