import React from 'react'
import styles from './greeting.module.scss';
function Greeting() {
  return (
    <section className={styles.container}>
        <h2>Hello, <span>Bhargavi! 👋🏼</span></h2>
        <p>All the notes are here in one place!</p>
    </section>
  )
}

export default Greeting