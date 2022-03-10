import locations from "../locationData"
import styles from '../styles/Home.module.css'

function Locations() {

  return (
    locations.map((location) => (
      <a href="" className={styles.card}>
        {/* <h2>Documentation &rarr;</h2>
      <p>Find in-depth information about Next.js features and API.</p> */}
        <h2 className="location-headers">{location.city} &rarr; </h2>
        <address>
          <p>{location.street}</p>
          <p>{location.zip}</p>
          <p>Phone: {location.phone}</p>
          <p>Hours: {location.hours}</p>
        </address>
      </a>
    ))
  )
}

export default Locations;