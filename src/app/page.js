'use client'
import { projects } from '../data'
import Card from '../components/Card'
import styles from './page.module.scss'
import { useScroll } from 'framer-motion'
import { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import Footer from '../components/Footer'
import Link from 'next/link'
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
      {/* <div className={styles.main}>
        <h1>Welcome to My UI</h1>
        <p>
          Explore our creative projects and discover the beauty of design and
          innovation.
        </p>
        <h3>Checkout the links below or continue scrolling </h3>
        <div className={styles.row}>
          <Link href='/gallery'>
            <p className={styles.btn}>Gallery</p>
          </Link>
          <Link href='/about'>
            <p className={styles.btn}>About</p>
          </Link>
          <Link href='/contact'>
            <p className={styles.btn}>Contact</p>
          </Link>
        </div>
      </div> */}
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
