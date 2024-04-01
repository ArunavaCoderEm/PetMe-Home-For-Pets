import React, { useState, useEffect } from 'react';

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        {
            image: "https://media-be.chewy.com/wp-content/uploads/2021/06/01091720/Siberian-Husky_FeaturedImage.jpg",
            heading: "Siberian Husky",
            caption: "Siberian huskies are classic northern dogs. They are intelligent but somewhat independent and stubborn."
        },
        {
            image: "https://i.pinimg.com/originals/6a/4d/ce/6a4dce25a816509df7bb818b72e24dbe.jpg",
            heading: "Persian Cat",
            caption: "Persian cats are medium-sized, usually weigh between seven and 12 pounds, and measure from 10-15 inches tall. "
        },
        {
            image: "https://i.pinimg.com/originals/5d/22/96/5d2296637cfef17f1a94514d537e02cd.jpg",
            heading: "Golden Retriever",
            caption: "The Golden Retriever is a sturdy, muscular dog of medium size, famous for the dense, lustrous coat of gold that gives the breed its name."
        }
    ];

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
        }, 3000); 

        return () => clearInterval(interval);
    }, []);

    return (
        <div id="carouselExampleIndicators" className="carousel slide ml-5 mt-4" data-ride="carousel">
            <div className="carousel-inner">
                {slides.map((slide, index) => (
                    <div className={`carousel-item ${index === currentIndex ? 'active' : ''}`} key={index}>
                        <img src={slide.image} className="d-block w-100" style={{maxHeight: '700px'}} alt={`Slide ${index}`} />
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className='text-black bg-info py-2'>{slide.heading}</h5>
                            <p className='text-black bg-warning py-1'>{slide.caption}</p>
                        </div>
                    </div>
                ))}
            </div>
            <a className="carousel-control-prev bg-primary" href="#" role="button" onClick={handlePrev}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </a>
            <a className="carousel-control-next bg-primary" href="#" role="button" onClick={handleNext}>
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </a>
        </div>
    );
}

export default Carousel;
