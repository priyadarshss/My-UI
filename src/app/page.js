'use client'
import { projects } from '../data'
import Card from '../components/Card'
import { useScroll } from 'framer-motion'
import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import Footer from '../components/Footer'
import Gallery from './gallery/page'

const Page = () => {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <>
      <Gallery />
      <div
        style={{ background: 'linear-gradient(to bottom, #f8f8f8, #e0e0e0)' }}
        ref={container}
      >
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05
          return (
            <Card
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.2, 1]}
              targetScale={targetScale}
            />
          )
        })}
      </div>
      <Footer />
    </>
  )
}

export default Page
