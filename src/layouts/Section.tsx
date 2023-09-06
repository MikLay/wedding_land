import React from 'react'
interface SectionProps {
  children: React.ReactNode
  id: string
}

const Section: React.FC<SectionProps> = ({ children, id }) => {
  return <div id={id} className="container my-5">
          {children}
  </div>
}

export default Section
