import React from 'react'
import style from './DefaultLayout.module.scss'

interface DefaultLayoutProps {
  headerPrepend?: React.ReactNode
  header: React.ReactNode
  children: React.ReactNode
  footer: React.ReactNode
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ header, children, footer, headerPrepend }) => {
  return <div className={`${style.defaultLayout} cover-container d-flex w-100 h-100 mx-auto flex-column`}>
    {headerPrepend ?? null}
   {header}
    {children}
    <footer>{footer}</footer>
  </div>
}

export default DefaultLayout
