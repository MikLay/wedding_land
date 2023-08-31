import React from 'react'

interface CarouselImageProps {
  image: string
}

const CarouselImage: React.FC<CarouselImageProps> = ({ image }) => {
  return (
    <div className="carousel-item active" key={image}>
            <img src={image} className="d-block w-100" alt="..."/>
        </div>)
}

export default CarouselImage
