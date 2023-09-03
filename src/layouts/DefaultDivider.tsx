import React from 'react'
import style from './DefaultLayout.module.scss'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface DefaultDividerProps {
}
const DefaultDivider: React.FC<DefaultDividerProps> = () => (<div className={style.defaultDivider}></div>)
export default DefaultDivider
