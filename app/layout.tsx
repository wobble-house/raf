import "server-only"
import React from 'react'
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css'
import Footer from '@/components/footer';
import Header from '@/components/header';
import {SpaceParticles} from '@/components/particles';

export const metadata = {
  title: {
    default: 'Ross Alan Ford',
    template: '%s | Ross Alan Ford',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={`${GeistSans.variable} ${GeistMono.variable}}`}>
        
        <Header/>
        <SpaceParticles>
        {children}
        </SpaceParticles>
        <Footer/>
        
      </body>
    </html>
  )
}
