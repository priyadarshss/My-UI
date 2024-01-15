'use client'
import { useEffect, useMemo, useRef, useState } from 'react'
import styles from './page.module.scss'
import Lenis from '@studio-freight/lenis'
import { useTransform, useScroll, motion } from 'framer-motion'
import ColumnImage from './columnImage'

export default function Home() {
  const images = useMemo(
    () => [
      'https://images.pexels.com/photos/3048527/pexels-photo-3048527.png?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/707676/pexels-photo-707676.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/753575/pexels-photo-753575.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1010079/pexels-photo-1010079.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1686944/pexels-photo-1686944.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1115204/pexels-photo-1115204.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/256453/pexels-photo-256453.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/776336/pexels-photo-776336.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/2035214/pexels-photo-2035214.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/2027697/pexels-photo-2027697.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/2467289/pexels-photo-2467289.jpeg?auto=compress&cs=tinysrgb&w=600',
      'https://images.pexels.com/photos/1745936/pexels-photo-1745936.jpeg?auto=compress&cs=tinysrgb&w=600',
    ],
    []
  )
  const gallery = useRef(null)
  const [dimension, setDimension] = useState({ width: 0, height: 0 })

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start'],
  })
  const { height } = dimension
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])

  useEffect(() => {
    const lenis = new Lenis()

    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener('resize', resize)
    requestAnimationFrame(raf)
    resize()

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <main className={styles.main}>
      <div className={styles.intro}>
        <h1>Welcome to My UI</h1>
        <p>Discover the beauty of art through immersive scrolling.</p>
        <div className={styles.scrollIndicator}>
          <span>Scroll down to explore</span>
          <div className={styles.mouse}></div>
        </div>
      </div>
      {/* <div className={styles.spacer}></div> */}
      <div ref={gallery} className={styles.gallery}>
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[9], images[10], images[11]]} y={y4} />
      </div>
      {/* <div className={styles.spacer}></div> */}
      <div className={styles.additionalContent}>
        <h2>Explore Beyond the Art</h2>
        <p>Immerse yourself in a journey that goes beyond the canvas.</p>
        <h3 style={{marginTop: '100px'}}>Keep scrolling </h3>
        <div className={styles.scroll} />
      </div>
    </main>
  )
}

const Column = ({ images, y }) => {
  return <ColumnImage images={images} y={y} />
}
