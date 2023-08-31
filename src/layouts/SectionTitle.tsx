import React from 'react'

interface SectionTitleProps {
  children: React.ReactNode
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return <h2>{children}</h2>
}

export default SectionTitle
