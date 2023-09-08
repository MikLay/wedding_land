import React from 'react'
import styles from './GeoCard.module.scss'
interface LocationPinProps {
  text: string
  lat: number
  lng: number
}
const LocationPin: React.FC<LocationPinProps> = ({ text }) => (
    <div className={styles.locationPin}>
        <p className="pin-text">{text}</p>
    </div>
)

export default LocationPin
