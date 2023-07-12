import React from 'react';
import Delivery from "../img/delivery.png"
import HomeContainer from './HomeContainer';

const MainContainer = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>

      <HomeContainer />

      <section classname= "w-full">
          <div className='w-full flex items-center justify-between'>
            <p className='text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content-none before:w-32 before:h-1 before:-bottom-4 before:left-0 before:bg-gradient-to-tr from bg-orange-400 to bg-orange-600 transition-all ease-in-out duration-100'> Our Fresh y healtye fruits</p>
          </div>
      </section>
    
    </div>
  )
}

export default MainContainer