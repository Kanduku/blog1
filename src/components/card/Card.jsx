import React from 'react'
import styles from "./card.module.css";
import Image from 'next/image';
import Link from 'next/link';

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
      <Image src="/p1.jpeg" alt="" fill />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
            <span className={styles.date}>11.02.2023</span>
            <span className={styles.category}>culture</span>
        </div>
        <h2 className={styles.postTitle}>Journey Through My Everyday Adventures</h2>
        <p className={styles.postDesc}>Join me as I navigate the ups and downs of life, sharing personal stories, insights, and reflections. From travel escapades to daily musings, this blog is a glimpse into my world and the lessons I learn along the way.</p>
        <button className={styles.button}>read more</button>
        <Link href="/">Read more</Link>
      </div>
    </div>
  )
}

export default Card
