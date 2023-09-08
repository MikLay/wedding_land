import React from 'react'
import style from './DefaultLayout.module.scss'
interface FullWideSectionProps {
  // backgroundImage: React.ReactNode
  id: string
}

const FullWideSection: React.FC<FullWideSectionProps> = ({ id }) => {
  return <section id={id} className={style.fullWideSection}>
      <div className={style.fullScreenImage}>
          <div className={style.overlay}>
              <div className={style.topText}>Вони <br/> чекають вас!</div>
              <div className={style.overlayTitle}>
                  <h1>Михайло та Аліна</h1>
              </div>
              <div className={style.bottomText}> - 10 / 09 / 2023 -</div>
          </div>
          <img src="https://images.unsplash.com/photo-1615966650071-855b15f29ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y291cGxlJTIwaW4lMjBsb3ZlfGVufDB8fDB8fHww&w=1000&q=80" alt="Full Screen"/>
      </div>
    </section>
}

export default FullWideSection
