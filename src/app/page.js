import styles from './page.module.scss'
import Image from 'next/image'

const images = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
  '4.jpg',
  '5.jpg',
  '6.jpg',
  '7.jpg',
  '8.jpg',
  '9.jpg',
  '10.jpg',
  '11.jpg',
  '12.jpg',
]

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.gallery}>
        <Column images={[images[0], images[1], images[2]]} />
        <Column images={[images[3], images[4], images[5]]} />
        <Column images={[images[6], images[7], images[8]]} />
        <Column images={[images[9], images[10], images[11]]} />
      </div>
    </main>
  )
}

const Column = ({ images }) => {
  return (
    <div className={styles.column}>
      {images.map((src, index) => {
        return (
          <div key={index} className={styles.imageContainer}>
            <Image src={`/images/${src}`} fill alt='image' />
          </div>
        )
      })}
    </div>
  )
}
