import React from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Banner from '../components/banner/banner';
import Footer from '../components/banner/footer';


export default function Home() {
    return (
        <div className={styles.main}>

            <Banner/>

            <div className={styles.profile}>
                <h1 className={styles.content}>Your Self-Sovereign Identity Profile</h1>

                <div className={styles.infoIphone}>
                    <div className={styles.block1I}>
                        <Image src="/lock.svg" alt="lock" width={80} height={80}/>
                    </div>
                    <p className={styles.lockI}>Self-Sovereign Identity (SSI) gives back the power of profile control to
                        people while preserving a prominent level of privacy and security</p>

                    <div className={styles.block2I}>
                        <Image src="/circle.svg" alt="circle" width={80} height={80}/>
                    </div>
                    <p className={styles.circleI}>Censorship-resistant and non-custodial web profiles - no more
                        centralization, you don&#39;t have to trust proprietary systems</p>

                    <div className={styles.block3I}>
                        <Image src="/key.svg" alt="key" width={80} height={80}/>
                    </div>
                    <p className={styles.keyI}>A single portable idenity instead of hundreds of login-password pairs -
                        accumulate your persistent and reusable digital reputation </p>

                    <div className={styles.block4I}>
                        <Image src="/check.svg" alt="check" width={80} height={80}/>
                    </div>
                    <p className={styles.checkI}>Faster and cheaper establishment of trust - long and annoying KYC
                        procedures are replaced with sharing proofs in several clicks</p>
                </div>

                <div className={styles.info}>
                    <div className={styles.block1}>
                        <Image src="/lock.svg" alt="lock" width={80} height={80}/>
                        <p className={styles.lock}>Self-Sovereign Identity (SSI) gives back the power of profile control
                        to people while preserving a prominent level of privacy and security</p>
                    </div>
                    <div className={styles.block2}>
                        <Image src="/circle.svg" alt="circle" width={80} height={80}/>
                        <p className={styles.circle}>Censorship-resistant and non-custodial web profiles - no more
                        centralization, you don&#39;t have to trust proprietary systems</p>
                    </div>
                    <div className={styles.block3}>
                        <Image src="/key.svg" alt="key" width={80} height={80}/>
                        <p className={styles.key}>A single portable idenity instead of hundreds of login-password pairs
                        - accumulate your persistent and reusable digital reputation </p>
                    </div>
                    <div className={styles.block4}>
                        <Image src="/check.svg" alt="check" width={80} height={80}/>
                        <p className={styles.check}>Faster and cheaper establishment of trust - long and annoying KYC
                        procedures are replaced with sharing proofs in several clicks</p>
                    </div>
                </div>
            </div>

            <div className={styles.consepts}>
                <h1 className={styles.content}>Key concepts of SSI</h1>
                <div className={styles.razm}>
                    <div className={styles.area1}>
                        <Image src="/udemi.svg" alt="udemi" width={70} height={70}/>
                        <p className={styles.udemy}>Udemy</p>
                    </div>
                    <div className={styles.area2}>
                        <Image src="/you.svg" alt="you" width={70} height={70}/>
                        <p className={styles.you}>You</p>
                    </div>
                    <div className={styles.area3}>
                        < Image src="/upwork.svg" alt="upwork" width={70} height={70}/>
                        <p className={styles.upwork}>Upwork</p>
                    </div>
                    <div className={styles.area4}>
                        <Image src="/trust.svg" alt="trust" width={400} height={400}/>
                    </div>
                    <div className={styles.area5}>
                        <p className={styles.textarea5}>Udemy issues a digital diploma for you</p>
                    </div>
                    <div className={styles.area6}>
                        <p className={styles.textarea6}>Verifier trusts the issuer of digital diploma and accepts it</p>
                    </div>
                    <div className={styles.area7}>
                        <p className={styles.textarea7}>You share your digital diploma to verifier</p>
                    </div>
                </div>
                <h2 className={styles.cont2}>The trust triangle</h2>
                <div className={styles.trustI}><Image src="/trustI.svg" alt="trust" width={400} height={700}/></div>
            </div>

            <div className={styles.digital}>
                <h1 className={styles.content}>This is a Verifiable credential</h1>

                <div className={styles.digitalcont}>
                    <p className={styles.digitaltext}>This is a digital analog of a regular document. Cheap,
                tamper-evident and universally acceptable by multiple services thanks to common standards</p>
                    <div className={styles.digitalimgI}>
                        <Image src="/diploma.svg" alt="digital" width="800" height="600"/>
                    </div>
                    <div className={styles.digitalimgtext}>
                        <p className={styles.digitaltext1}>Your decentralized identifier (DID) - the key to
                    Self-Sovereign Identity</p>
                        <p className={styles.digitaltext2}>The digital signature of Udemy</p>
                        <div className={styles.digitalimg}>
                            <Image src="/digital.svg" alt="digital" width="800" height="600"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.user}>
                <h1 className={styles.cont1}>Identix.PASS for users</h1>
                <div className={styles.usercont}>
                    <div className={styles.userimg}>
                        <Image src="/user.png" alt="user" width="700" height="500"/>
                    </div>
                    <div className={styles.usertext}>
                        <h3 className={styles.profileName}>SSI Profile</h3>
                        <p className={styles.start}>Start with creating a decentralized Identifier - your first step to
                    SSI. Collect verifiable credentials and build your provable digital portfolio.</p>
                        <h3 className={styles.marketplace}>Marketplace</h3>
                        <p className={styles.dapps}>Here you can find the list of issuers - dApps - and claim the
                    verifiable credentials they provide.</p>
                        <h3 className={styles.services}>Services</h3>
                        <p className={styles.log}>Log in to services and get special offers by sharing your verifiable
                    web3 profile.</p>
                    </div>
                </div>
            </div>

            <div className={styles.service}>
                <h1 className={styles.cont1}>Identix.PASS for services</h1>
                <div className={styles.servicecont}>
                    <div className={styles.servicetext}>
                        <h3 className={styles.profileName}>For verifiers</h3>
                        <p className={styles.start}> Require verifiable credentials and target audience that match your
                    criteria.</p>
                        <h3 className={styles.marketplace}>For issuers</h3>
                        <p className={styles.dapps}>Reduce the cost of issuing documents while earning a fee for each
                    credential.</p>
                    </div>
                    <div className={styles.serviceimg1}>
                        <Image src="/service.png" alt="service" width="700" height="500"/>
                    </div>
                </div>
            </div>

            <div className={styles.connect}>
                <h1 className={styles.content}>Want to connect your service?</h1>
                <p className={styles.leave}>Leave your contacts and get in touch with Identix Team.</p>
                <div className={styles.newbut}>
                    <button className={styles.submit}><p className={styles.submitcont}> Submit a request</p></button>
                    <p className={styles.buttcont}>or get in touch with us at @telegram</p>
                </div>
            </div>

            <Footer/>

        </div>
    );
}
