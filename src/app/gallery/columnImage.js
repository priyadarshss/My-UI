import { motion } from 'framer-motion'
import styles from './page.module.scss'
import Image from 'next/image'

const Column = ({ images, y }) => {
  return (
    <motion.div className={styles.column} style={{ y }}>
      {images.map((image, i) => {
        return (
          <div key={i} className={styles.imageContainer}>
            <Image priority src={image} alt='image' fill />
          </div>
        )
      })}
    </motion.div>
  )
}

export default Column
