import React from 'react'
import Head from 'next/head';
import CountUp from 'react-countup';
import Stats from '../public/jsons/stats.json'

function About() {
  return (
    <div>
      <Head>
        <title>AquaRover - About</title>
        <meta name="description" content="Official Website of AquaRover" />
        <meta property="og:url" content="https://rcsc.vercel.app/about" />
        <meta property="og:type" content="Science Club" />
        <meta
          property="og:title"
          content="About us"
        />
        <meta
          property="og:description"
          content="About AquaRover"
        />
        <meta property="og:image" content="https://i.ibb.co/BKSHpQ9/bg1.jpg" />
        <link rel="icon" href="/logo/logo.png" />
      </Head>


      <div className='flex justify-center content-center my-10 h-96'>
        <img src="/background-img/bg.jpg" alt="picture" className='w-full lg:w-2/3 max-h-xl' />
      </div>

      <div className="stats-short" style={{ marginTop: '1rem' }}>
        <section className="text-gray-400 bg-gray-900 body-font">
          <div className="container px-5 py-10 mx-auto">
            <div className="flex flex-wrap -m-4 text-center">
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">{<CountUp end={Stats.robots} />}</h2>
                <p className="leading-relaxed">Robots</p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">{<CountUp end={Stats.missions} />}</h2>
                <p className="leading-relaxed">Missions</p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">{<CountUp end={Stats.samples} />}</h2>
                <p className="leading-relaxed">Sample Collected</p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">{<CountUp end={Stats.monitoring} />}</h2>
                <p className="leading-relaxed">Monitoring places</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="about_desc">
        <div>
          <h1 className='p-2 lg:p-4 text-4xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-l from-blue-500 to-cyan-400 tracking-widest'>OUR STORY</h1>
        </div>
        <div className='w-full lg:w-3/4 p-3 lg:m-auto my-4 lg:my-10 text-left'>
          <p className='font-medium text-xl text-white'>
            AquaRover is an innovative water monitoring solution aimed at providing accurate and real-time data on water quality parameters. We believe that access to information is essential in addressing water pollution and improving the quality of water resources.
            Motives:
          </p>
          <div className='flex flex-col flex-warp text-gray-300'>
            <span className='m-2'>1. To provide accurate and accessible data on water quality to organizations and individuals to support the prevention and remediation of water pollution.</span>
            <span className='m-2'>2. To empower communities, particularly in developing countries, to monitor and manage their own water resources.</span>
            <span className='m-2'>3. To promote transparency and public engagement in water management by making water quality data publicly available through an interactive map on our website.</span>
          </div>

          <p className='font-medium text-xl mt-5'>
            for achieving this milestones, we do:
          </p>
          <br></br>
          <span className='pt-5 font-bold text-transparent bg-clip-text bg-gradient-to-l from-blue-500 to-cyan-400'>
            Monitoring and collecting data on water quality:
          </span>
          <p className='m-2 text-gray-300'>
            Our AquaRover robots are designed to traverse various water sources, collecting essential parameters such as pH levels, dissolved oxygen, total dissolved solids, etc. This data is then transmitted to our database, providing a comprehensive overview of the water quality
          </p>

          <span className='pt-5 font-bold text-transparent bg-clip-text bg-gradient-to-l from-blue-500 to-cyan-400'>
            Improving water resource management
          </span>
          <p className='m-2'>
            With accurate data on water quality, our organization works with local communities, governments, and other stakeholders to develop and implement effective water resource management strategies. Our goal is to ensure that water resources are clean, safe, and accessible for all.
          </p>
          <span className='pt-5 font-bold text-transparent bg-clip-text bg-gradient-to-l from-blue-500 to-cyan-400'>
            Raising awareness about water pollution:
          </span>
          <p className='m-2'>
            Our organization aims to raise awareness about the critical issue of water pollution and the need for action. By sharing our data and findings with the public, we hope to inspire individuals, organizations, and governments to take steps to protect and preserve our water resources for future generations.
          </p>
          <p className='font-medium text-xl text-white'>
            In conclusion, AquaRover is a unique and innovative organization committed to providing solutions for water pollution and water quality management. Our mission is to improve the health of water sources around the world through the use of cutting-edge technology and data-driven solutions. With a team of experts in robotics, computer science, and environmental science, we are dedicated to making a positive impact on the world. Join us in our quest to preserve the planet&apos;s most precious resource, water.
          </p>
        </div>
      </section>
    </div>
  )
}

export default About
