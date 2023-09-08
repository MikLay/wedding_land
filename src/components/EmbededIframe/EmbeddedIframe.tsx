import React from 'react'
import styles from './EmbeddedIframe.module.scss'
import clsx from 'clsx'
interface EmbededIframeProps {
  children?: React.ReactNode
  id: string
  embedSrc: string
}

const EmbeddedIframe: React.FC<EmbededIframeProps> = ({ children, id, embedSrc }) => {
  return <div id={id} className={clsx(styles.embeddedIframe, 'mb-2')}>
        <iframe
            width="453"
            height="280"
            src={embedSrc}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded charity video"
        />
    </div>
}

export default EmbeddedIframe
