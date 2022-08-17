import React from 'react';
import Image from 'next/image';
import styles from './Banner.module.scss';

const Banner = () => {
    return (
        <div className={styles.intro}>
            <div className={styles.logoIphone}><Image src="/logo.png" alt="logo" width={308} height={273}/></div>
            <p className={styles.introcont}>Create your Self-Sovereign Identity profile and touch new era of data
                control and safety</p>
            <div className={styles.logo}>
                <div className={styles.lines1}><Image src="/lines1.svg" alt="lines" width={308} height={273}/></div>
                <p className={styles.logocont}>Identix. Pass
                    <span className={styles.notes}><Image src="/note.svg" alt="note" width={60} height={70}/></span>
                </p>
            </div>
            <button className={styles.try}><span className={styles.trycont}>Try Identix.PASS</span></button>
        </div>
    );
};

export default Banner;
