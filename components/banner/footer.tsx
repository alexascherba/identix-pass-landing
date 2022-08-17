import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './footer.module.scss';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.up}>
                <a href="#">
                    <Image src="/up.svg" width="70" height="90"/>
                </a>
            </div>
            <div className={styles.nav}>
                <Link target="_self" href="/privacy-policy">Privacy policy</Link>
                <Link target="_self" href="/terms-of-use">Terms of use</Link>
                <Link target="_self" href="">Email</Link>
                <Link target="_blank" href="">Legal adress</Link>
            </div>
            <p className={styles.author}>© 2022 Identix.Space All righrts reserved </p>
        </div>
    );
};

export default Footer;
