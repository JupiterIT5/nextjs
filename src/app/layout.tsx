import { Metadata } from 'next'
import { PropsWithChildren, useEffect } from 'react'
import  "./globals.scss"
import Footer from '@/components/Footer/Footer'

const metadata: Metadata = {
  title: 'GarandBuild',
  description: 'Your reliable partner in construction: homes, facades, tiling, pools, electrical work, stretch ceilings, landscaping. Quality and reliability right on time.'
}

export default function RootLayout({children}: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta name='title' content='garandbuild'/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
        <title>GarantBuild</title>
      </head>
      <body className='container'>
        {children}
        <Footer />
      </body>
    </html>
  )
}
