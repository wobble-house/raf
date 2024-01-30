import "server-only"
import React from 'react'
import './globals.css'
import Footer from '@/components/footer';
import Nav from "@/components/nav";
import {SpaceParticles} from '@/components/particles';
import localFont from 'next/font/local'

export const metadata = {
  title: {
    default: 'Ross Alan Ford',
    template: '%s | Ross Alan Ford',
  },
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: dark)',
        url: '/images/RAF.png',
        href: '/images/RAF.png',
      },
      {
        media: '(prefers-color-scheme: light)',
        url: '/images/RAF.png',
        href: '/images/RAF.png',
      },
    ],
  },
}

const GeistSans = localFont({
  src:  [
    {
      path: '../public/fonts/Geist/Geist-UltraLight.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/fonts/Geist/Geist-Thin.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../public/fonts/Geist/Geist-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/Geist/Geist-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Geist/Geist-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Geist/Geist-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/Geist/Geist-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Geist/Geist-Black.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/fonts/Geist/Geist-UltraBlack.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-GeistSans',
})
const GeistMono = localFont({
  src:  [
    {
      path: '../public/fonts/GeistMono/GeistMono-UltraLight.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/fonts/GeistMono/GeistMono-Thin.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../public/fonts/GeistMono/GeistMono-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/GeistMono/GeistMono-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/GeistMono/GeistMono-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/GeistMono/GeistMono-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/GeistMono/GeistMono-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/GeistMono/GeistMono-Black.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/fonts/GeistMono/GeistMono-UltraBlack.woff2',
      weight: '900',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-GeistMono',
})

export default function MDXLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className={`dark`}>
      <body className={`${GeistSans.variable} ${GeistMono.variable}}`}>
        <Nav/>
        <SpaceParticles>
        {children}
        </SpaceParticles>
        <Footer/>
        
      </body>
    </html>
  )
}
