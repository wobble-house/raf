import "server-only"
import React from 'react'
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css'
import Footer from '@/components/footer';
import Nav from "@/components/nav";
import {SpaceParticles} from '@/components/particles';

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

export default function RootLayout({
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
