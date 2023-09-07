import React from 'react'

interface JumbotronProps {
  children?: React.ReactNode
  id: string
  title?: string
}

const Jumbotron: React.FC<JumbotronProps> = ({ children, id, title }) =>
  (<div className="position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">
      {(Boolean(title)) && <h2 className="text-body-emphasis border-1 border-bottom pb-1">{title}</h2>}
      {children}
      </div>)

export default Jumbotron
