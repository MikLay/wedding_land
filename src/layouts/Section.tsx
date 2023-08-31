import React from 'react'
import style from './DefaultLayout.module.scss'
interface SectionProps {
  children: React.ReactNode
  id: string
}

const Section: React.FC<SectionProps> = ({ children, id }) => {
  return <div id={id} className="container">
      <div className={style.sectionContainer}>
          {children}
      </div>
  </div>
}

export default Section
