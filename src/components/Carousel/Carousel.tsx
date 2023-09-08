import React from 'react'
import CarouselImage from './CarouselImage'
interface CarouselProps {
  id: string
  images: string[]
}

const Carousel: React.FC<CarouselProps> = ({ id, images }) => {
  return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                {images.map((image) => <CarouselImage image={image} key={image}/>)}
            </div>
        </div>
  )
}

export default Carousel
