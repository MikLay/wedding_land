import React from 'react'
import GoogleMapReact from 'google-map-react'
import LocationPin from './LocationPin'
import styles from './GeoCard.module.scss'
import clsx from 'clsx'
interface GeoCardProps {
  title: string
  text: string
  smallText: string
  linkText?: string
  linkHref?: string
  children?: React.ReactNode
  id: string
  location: {
    lat: number
    lng: number
    address: string
  }
  zoomLevel?: number
}

const GeoCard: React.FC<GeoCardProps> = ({
  children,
  id,
  location,
  zoomLevel = 17,
  title = 'Title',
  text = 'Lorem Ipsum',
  smallText = 'Lorem Ipsum',
  linkText,
  linkHref
}) => {
  return <div className="card mb-3" >
      <div className="row g-0">
          <div className="col-md-8">
              <div className="card-body text-start">
                  <h5 className="card-title fw-bolder">{title}</h5>
                  <p className="card-text">{text}</p>
                  <p className="card-text">
                      <small className="text-body-secondary">
                          {smallText}
                      </small>
                  </p>
                  { (Boolean(linkText)) && <a href={linkHref} className="btn btn-primary">{linkText}</a>}
              </div>
          </div>
          <div className={clsx(styles.mapContainer, 'col-md-4')}>
              <GoogleMapReact
                  bootstrapURLKeys={{ key: '' }}
                  defaultCenter={location}
                  defaultZoom={zoomLevel}
              >
                  <LocationPin
                      lat={location.lat}
                      lng={location.lng}
                      text={location.address}
                  />
              </GoogleMapReact>
          </div>
      </div>
  </div>
}

export default GeoCard
