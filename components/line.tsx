'use client';
import { motion } from "framer-motion"
export default function Line({direction}:{direction?: "left" | "right" | "center"}){
    const oppDirection = (direction == "left" ? "right" : "left")
    const od = oppDirection.slice(0,1)
    const d = direction?.slice(0,1)
    return(
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }} 
        className={`relative ${direction == "center" ? "mx-auto" : ("m"+od+"-auto origin-"+direction)} ${direction == "left" ? (" flex-row group-hover:animate-linewiggle justify-self-start group-hover:bg-gradient-to-"+od+" group-active:bg-gradient-to-"+od+" group-hover:from-primary group-hover:to-secondary group-active:from-secondary group-active:to-red-500"):(" flex-row-reverse group-hover:animate-reverselinewiggle justify-self-end group-hover:bg-gradient-to-"+od+" group-active:bg-gradient-to-"+od+" group-hover:from-secondary group-hover:to-primary group-active:from-red-500 group-active:to-secondary")} h-[4px] bg-primary active:scale-110 w-5/6 max-w-2xl rounded-full group-hover:w-4/5 group-active:w-1/5 my-2 transition-all duration-300 ease-in-out cursor-pointer`}>

        </motion.div>
    )
}