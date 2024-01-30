'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ImageHandler(props){
    const { src, fallbackSrc, alt, ...rest } = props;
    const [imgSrc, setImgSrc] = useState(src);
    return (
        <Image
            {...rest}
            src={`${imgSrc}`}
            alt={alt}
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
            fill
            style={{
                objectFit: 'cover', 
                objectPosition: '50% 10%'
            }}
            onError={() => {
                setImgSrc(fallbackSrc);
            }}
        />
    );
};

export function SVG({href, src, alt}){
    return (
            <Link href={href} className={`relative `} rel="noopener noreferrer" target="_blank">
                <div title={alt} className='relative w-[50px] h-[50px] hover:animate-wiggle active:animate-hardwiggle'>
                <Image src={src} alt={alt} fill style={{objectFit: "contain"}} sizes="(max-width: 768px) 100vw, 33vw" className=''/>
                </div>
            </Link>
    );
};