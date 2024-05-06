import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

export default function Caraousal() {

  const slides = [
    {
      id: 1,
      image: 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8xNV9waG90b19vZl9hX2RvZ19ydW5uaW5nX3dpdGhfb3duZXJfYXRfcGFya19lcF9mM2I3MDQyZC0zNWJlLTRlMTQtOGZhNy1kY2Q2OWQ1YzQzZjlfMi5qcGc.jpg',
      text: 'Puffy Dog',
      para : "With a coat like clouds, the puffy dog floats through life's moments with a whimsical grace."
    },
    {
      id: 2,
      image: 'https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_1280.jpg',
      text: 'Pursian Cat',
      para: 'With fur as luxurious as moonlit silk, the Persian cat embodies regal elegance in every graceful stride.'
    },
    {
      id: 3,
      image: 'https://i.natgeofe.com/n/187b3223-0b45-4aa5-ae5c-24793dd2d6cb/01-german-shepherd-coronavirus-bwtkdt_3x2.jpg',
      text: 'German Shepherd',
      para: 'The German Shepherd: loyalty in every step at every your home.'
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/1463295/pexels-photo-1463295.jpeg?cs=srgb&dl=pexels-frans-van-heerden-201846-1463295.jpg&fm=jpg',
      text: 'Parrot Bird',
      para: 'With vibrant feathers and a playful spirit, the parrot brings color and joy to every moment.'
    },
    {
      id: 5,
      image: 'https://media.istockphoto.com/id/1361978700/photo/portrait-of-young-siberian-cat.jpg?s=612x612&w=0&k=20&c=UXD0VJ16D_Z--HbUalQlBhram84ygP7lwo9jJpUGTX8=',
      text: 'Serbian Cat',
      para: 'With an elegant bearing and a dignified demeanor, the Serbian cat exudes regal grace in every step.'
    },
  ];

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(()=> {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize',handleResize);
    };
  },[]);

  const arrow = (width >= 778)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: arrow,
  };

  return (
    <>
    <div className='caraousal'>
      <h1 className='text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-blue-300 textr font-extrabold '>Top Pets People Are Liking</h1>

      <Slider {...settings} className='lg:w-4/6 sm:w-auto h-auto justify-center m-auto mt-3 rounded-md bg-gradient-to-t from-blue-500 to-blue-500 p-2'>
      {slides.map((slide) => (
        <div key={slide.id} className="relative mt-5">
          <Link className="absolute sha p-2 bg-gradient-to-b from-blue-700 to-blue-500 font-thin rounded-md text-white m-auto left-0 right-0 top-[-20px] text-center w-24">Details</Link>
            <img src={slide.image} alt={`Slide ${slide.id}`} className='m-auto rounded-md sha lg:h-auto w-4/6' />
            <p className="text-white text-center lg:text-2xl sm:text-md font-bold mt-2">{slide.text}</p>
            <p className="text-white text-center text-md font-thin">{slide.para}</p>
        </div>
      ))}
    </Slider>

    </div>
    </>
  )
}
