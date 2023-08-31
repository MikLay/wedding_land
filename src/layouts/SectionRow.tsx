import React from 'react'
import style from './DefaultLayout.module.scss'

interface SectionRowProps {
  children: React.ReactNode
  id: string
}

const SectionRow: React.FC<SectionRowProps> = (
  { children, id }) =>
  (<div id={id} className={style.sectionRow}>
        {children}
    </div>)

export default SectionRow
