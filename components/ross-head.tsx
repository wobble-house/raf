'use client';
import ImageHandler from "./image-handler";
import Link from "next/link";
import { motion } from "framer-motion"
export default function RossHead(){
    return(
        <motion.div 
        initial={{ y:80, scale:0}}
        animate={{ scale: 1}}
        transition={{duration: 9, delay: 3}}
        className="relative h-80 w-52 z-80">
        <Link href={'/about'}>
        <ImageHandler src={'/images/ross-head.png'} fill alt="Ross's head" className="scale-100 hover:scale-125 transition-all ease-in-out active:scale-110" />
        </Link>
        </motion.div>
    )
}