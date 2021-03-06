import Head from 'next/head'
// import Image from '../assets/'
import styles from '../styles/Home.module.css'
import loremIpsum from '../loremIpsum'
// import locations from '../locationData'
import Locations from './locations/locations.js'

let API = `http://localhost:3000/api`;


export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Salmon Cookies</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Pats Salmon Cookies!
        </h1>

        <img src="assets/salmon.png" alt="salmon" id="salmon-img" />
        <a href="sales.html" className="page-links" id="sales-link">Sales Data!</a>

        <h2>About Us</h2>
        <div id="about-us-container">
          <div id="family-image-div">
            <img src="assets/family.jpg" alt="family" id="family" />
          </div>
          <div id="lorem-ipsum">
            <p>{loremIpsum.aboutUs}</p>
          </div>
          <img src="assets/chinook.jpg" alt="chinook salmon" id="chinook" />
        </div>
        <div className={styles.grid}>
          <Locations />
        </div>
      </main>

      <footer>
        <address id="contact-info">
          <p>Pat Jenkins</p>
          <a href="mailto:info@patssalmoncookies.com" id="email">info@patssalmoncookies.com</a>
          <p>3106 University Street</p>
          <p>Seattle, WA, 98121</p>
          <p>Phone: 206-443-9495</p>
        </address>
        <img src="assets/fish.jpg" alt="fish" id="fish-school" />
      </footer>
    </div>
  )
}
