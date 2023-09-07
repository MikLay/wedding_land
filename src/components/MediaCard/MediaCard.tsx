import React from 'react'

interface MediaCardProps {
  children?: React.ReactNode
  id?: string
  imageUrl: string
  title: string
  deadlineNotes?: string
  href?: string
}

const MediaCard: React.FC<MediaCardProps> = ({
  children,
  id,
  imageUrl,
  title,
  deadlineNotes,
  href = '#'
}) =>
  (
      <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
           style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.60)), url('${imageUrl}')`, backgroundSize: 'cover' }}>
          <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h3 className="mb-4 display-6 lh-1 fw-bold">{title}</h3>
              {children}
              {(Boolean(deadlineNotes)) && (<ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                  </li>
                  <li className="d-flex align-items-center me-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-alarm" viewBox="0 0 16 16">
                          <path d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z"/>
                          <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z"/>
                      </svg>
                      <small className='ms-1'>{deadlineNotes}</small>
                  </li>
              </ul>)}
              <a href={href} className='stretched-link'/>
          </div>
      </div>
  )

export default MediaCard
