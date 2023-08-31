import React from 'react'
import style from './DefaultLayout.module.scss'

interface DefaultLayoutProps {
  header: React.ReactNode
  children: React.ReactNode
  footer: React.ReactNode
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ header, children, footer }) => {
  return <div className={`${style.defaultLayout} cover-container d-flex w-100 h-100 p-3 mx-auto flex-column`}>
   {header}
    <main>{children}</main>
    <footer>{footer}</footer>
  </div>
}

export default DefaultLayout
