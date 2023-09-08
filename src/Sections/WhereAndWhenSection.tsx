import React from 'react'
interface WhereAndWhenSectionProps {
  children: React.ReactNode
  id: string
}

const WhereAndWhenSection: React.FC<WhereAndWhenSectionProps> = ({ children, id }) => {
  return <div id={id} className="container my-5">
        {children}
    </div>
}

export default WhereAndWhenSection
