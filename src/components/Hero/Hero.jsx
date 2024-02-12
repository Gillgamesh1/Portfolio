import React from 'react';
import styles from './Hero.module.css';

import { getImageUrl } from '../../utils';

export const Hero = () => {
  return (
  <section className={styles.container}>
      <div className={styles.content}>
          <h1 className={styles.title}>Hi, I'm <span className={styles.titleFront}>Hritik Mehta</span></h1>
          <p className={styles.description}>A passionate Front-End Developer with a knack for building exceptional user experiences.</p>
          <a href='hritikgrd@gmail.com' className={styles.contactBtn}>Email Me</a>
      </div>
      
      <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} alt='Hero image' />

  <div className={styles.topBlur}></div>
  <div className={styles.bottomBlur}></div>

  </section>
  );
};


