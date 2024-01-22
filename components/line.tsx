'use client';
import { motion } from "framer-motion"
export default function Line(){
    return(
        <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }} 
        className="relative mr-auto h-[4px] bg-primary active:scale-110 w-5/6 max-w-2xl rounded-full group-hover:animate-linewiggle origin-left group-hover:bg-gradient-to-br group-hover:from-primary group-hover:from-40% group-hover:to-secondary group-hover:w-4/5 group-active:w-1/5 group-active:bg-gradient-to-br group-active:from-secondary group-active:to-red-500 my-2 transition-all duration-300 ease-in-out cursor-pointer">

        </motion.div>
    )
}