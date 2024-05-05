import React, { useState , useEffect} from 'react'

export default function Hero() {

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

      const [counters, setCounters] = useState({
        count1: 0,
        count2: 100,
        count3: 91
      });
    
      useEffect(() => {
        const counter = (id, start, end, duration) => {
          let current = start;
          const range = end - start;
          const increment = end > start ? 1 : -1;
          const step = Math.abs(Math.floor(duration / range));
          const timer = setInterval(() => {
            current += increment;
            setCounters(prevCounters => ({
              ...prevCounters,
              [id]: current
            }));
            if (current === end) {
              clearInterval(timer);
            }
          }, step);
        };
    
        counter("count1", 0, 400, 3000);
        counter("count2", 100, 150, 2500);
        counter("count3", 0, 91, 3000);
    
        return () => {
          clearInterval(counter);
        };
      }, []);

  return (
    <>
      <div className="bg-gradient-to-b from-blue-500 to-blue-800 rounded-md m-3 p-2">
        <h1 className='lg:text-4xl px-5 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-blue-300 sm:text-3xl text-center mt-5'>
            "Discover Your Perfect Pet Match : Welcome to PetMe - Where Furry Dreams Come True !"
        </h1>
        <section className="text-white body-font">
            <div className="container mx-auto flex lg:px-5 md:px-3 sm:px-2 py-5 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl lg:text-left sm:text-center mb-4 font-extrabold"> Buy And Sell The Pets
                    <br className="hidden lg:inline-block"/><span className='fancy'>Of Your Choice.</span>
                </h1>
                {(width > 768) && (
                    <>
                <ul className='mx-5 my-2 text-left font-semibold'>
                    <li className='my-2 lg:list-disc text-left'>We have all varieties of pets like dogs, cats, birds, etc.</li>
                    <li className='my-2 list-disc'>We have the facility to deliver your desired pets to your<br/> doorstep safe and sound.</li>
                    <li className='my-2 list-disc'>You can sell pets any moment you want based on health<br/> checkup of those pets from doorstep.</li>
                    <li className='my-2 list-disc'>Every pet that you buy or sell will be finely verified<br/> by PetMe team.</li>
                </ul>
                    </>
                )}
                {(width <= 768) && (
                    <p className='text-center text-lg'>We have all varieties of pets like dogs, cats, birds, etc.</p>
                )}
            </div>
                <div className="lg:max-w-2xl lg:w-full md:w-screen w-5/6">
                <img className="object-center object-cover rounded-md sha" alt="hero" src="https://img.freepik.com/premium-photo/cute-pets-domestic-animals-nature-small-purebred-dog-playing-together-generated-by-artificial-intelligence_188544-83545.jpg"/>
                </div>
            </div>
            <div className="bg-white sha absolute w-4/5 mx-auto h-auto rounded-md left-0 right-0 mt-[-30px] flex">
            <section className="text-black m-auto mb-3">
                <div className="container">
                    <div className="row justify-content-center text-center">
                    <div className="col-12">
                        <h1 className="lg:text-4xl lg:px-5 sm:px-0 py-2 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-500 sm:text-2xl text-center my-3">Our Trust & Statistics</h1>
                    </div>
                    <div className="col-md-4 my-2">
                        <h2 className='font-thin'>Trusted Customers</h2>
                        <span className="display-4 font-bold">{counters.count1}+</span>
                    </div>
                    <div className="col-md-4 my-2">
                        <h2 className='font-thin'>Daily Orders</h2>
                        <span className="display-4">{counters.count2}+</span>
                    </div>
                    <div className="col-md-4 my-2">
                        <h2 className='font-thin'>Rating</h2>
                        <span className="display-4">{counters.count3} / 100</span>
                    </div>
                    </div>
                </div>
                </section>
            </div>
            </section>
      </div>
    </>
  )
}
