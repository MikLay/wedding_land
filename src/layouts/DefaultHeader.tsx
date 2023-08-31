import React, { useEffect, useState } from 'react'
import style from './DefaultLayout.module.scss'
import clsx from 'clsx'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface DefaultHeaderProps {
}

const DefaultHeader: React.FC<DefaultHeaderProps> = () => {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = (): void => {
      console.log(window.scrollY > 500)
      setIsSticky(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return <header>
      {isSticky && <nav className={clsx([style.defaultHeader, isSticky && style.sticky, !isSticky && style.hidden, 'navbar navbar-expand-lg bg-body-tertiary'])}>
          <div className="container-fluid">
              <a className="navbar-brand" href="#">Navbar scroll</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarScroll">
              </div>
          </div>
      </nav>}
    </header>
}

export default DefaultHeader
