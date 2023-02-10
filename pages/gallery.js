import React from 'react'
import Head from 'next/head'

function GalleryPage() {
  return (
    <div>
      <Head>
        <title>AquaRover - Gallery</title>
        <meta name="description" content="Official Website of AquaRover" />
        <meta property="og:url" content="https://rcsc.vercel.app/gallery" />
        <meta property="og:type" content="Science Club" />
        <meta
          property="og:title"
          content="Gallery"
        />
        <meta
          property="og:description"
          content="Memories of AquaRover"
        />
        <meta property="og:image" content="https://i.ibb.co/BKSHpQ9/bg1.jpg" />
        <link rel="icon" href="/logo/logo.png" />
      </Head>
      <div>Gallery</div>
    </div>
  )
}

export default GalleryPage