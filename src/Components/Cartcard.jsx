import React, { useState, useEffect } from 'react';

const Cartcard = ({ src, alt, head, desc, price }) => {

  const takeFirstFiveWords = (sentence) => {
    const words = sentence.split(' ');
    const firstFiveWords = words.slice(0, 2);
    const result = firstFiveWords.join(' ');  
    return result;
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const truncatedDesc = takeFirstFiveWords(desc);

  const removecart = () => {

  }

  return (
    <div className="max-w-full my-3 flex mx-2 items-center backdrop-blur-sm bg-white/30 rounded overflow-hidden sha">
      <img src={src} className='w-24 mx-1 p-1 rounded-lg' alt={alt} />
      <h1 className='text-blue-800 font-semibold text-xl'>{head}</h1>
      {!isMobile && (
        <h2 className='text-black bg-blue-400 rounded p-1 font-semibold text-sm w:1/3 mx-4'>{truncatedDesc} ...</h2>
      )}
      <h1 className='text-md text-blue-600 mx-2 font-semibold'>Rs : {price}</h1>
      <div className='right-0 absolute'>
      <button onClick={removecart} className='mx-2 sha flex justify-end bg-blue-500 text-white hover:bg-blue-600 transition-all duration-200 p-1 rounded-md'>Remove</button>
      </div>
    </div>
  );
};

export default Cartcard;
