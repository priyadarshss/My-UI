'use client'
import { projects } from '../data'
import Card from '../components/Card'
import styles from './page.module.scss'
import { useScroll } from 'framer-motion'
import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'

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
      <div className={styles.main}>
        <h1>Page</h1>
        {/* give a link below with the name gallery */}
        <a href='/gallery'>Gallery</a>
        {/* give more examples */}
        <a href='/about'>About</a>
        <a href='/contact'>Contact</a>
      </div>
      <div style={{ backgroundColor: '#e0e0e0' }} ref={container}>
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05
          return (
            <Card
              key={`p_${i}`}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          )
        })}
      </div>
      <div className={styles.spacer} />
    </>
  )
}

export default Page
