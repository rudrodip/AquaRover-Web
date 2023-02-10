import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>AquaRover</title>
        <meta name="description" content="open source water monitoring system" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo/logo.png" />
      </Head>
      <div>
        <div className="hero min-h-[90vh]" style={{ backgroundImage: `url("/background-img/bg.jpg")` }}>
          <div className="hero-overlay bg-opacity-40"></div>
          <div className="hero-content text-center text-neutral-content p-2 m-0">
            <div className="max-w-xl">
              <h1 className="mb-5 text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 leading-tight">AquaRover</h1>
              <p className="mb-5 text-white text-lg">AquaRover is an innovative solution to the world&apos;s water problems. With the use of advanced robotics technology, AquaRover robots are designed to monitor and collect data from water sources in real-time. The data collected includes important parameters such as pH, biological oxygen demand (BOD), chemical oxygen demand (COD), and more. The collected data is then stored in a public database, allowing organizations and individuals to access and utilize the information to help improve water quality. AquaRover&apos;s mission is to provide affordable and accessible solutions to help communities around the world address water pollution and ensure safe, usable water sources.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
