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
  titleIcon?: React.ReactNode
  id: string
  location: {
    lat: number
    lng: number
    address: string
  }
  zoomLevel?: number
}

const GOOGLE_MAPS_API_KEY = 'AIzaSyDGkzf1tAksK6CQ1xsGYj95n45f6Xd08zs'

const GeoCard: React.FC<GeoCardProps> = ({
  children,
  id,
  location,
  zoomLevel = 17,
  title = 'Title',
  text = 'Lorem Ipsum',
  smallText = 'Lorem Ipsum',
  linkText,
  linkHref,
  titleIcon
}) => {
  return <div className="card mb-3" >
      <div className="row g-0">
          <div className="col-md-8">
              <div className="card-body text-start">
                  <h5 className="card-title fw-bolder">
                      {titleIcon ?? null}
                      {title}
                  </h5>
                  <p className="card-text">{text}</p>
                  <p className="card-text">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-alarm" viewBox="0 0 16 16">
                          <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z"/>
                          <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z"/>
                      </svg>
                      <small className=" ms-1">
                          <mark>{smallText}</mark>
                      </small>
                  </p>
                  { (Boolean(linkText)) && <a href={linkHref} className="btn btn-outline-success">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                          <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                          <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                      </svg>
                      {linkText}
                  </a>}
              </div>
          </div>
          <div className={clsx(styles.mapContainer, 'col-md-4')}>
              <GoogleMapReact
                  bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY }}
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
