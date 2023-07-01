import React from 'react' ;
import Delivery from "../img/delivery.png" ; 
import HeroBg from "../img/coockies.png" ;

const HomeContainer = () => {
  return (

    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full' id="home">
      <div className='py-2  flex-1 flex flex-col items-start justify-start gap-6'>

        <div className='flex items-center gap-2 justify-center bg-orange-100 px-2 py-1 rounded-full'>

            <p className='text-base text-orange-500 font-semibold'> Titulo de la pagina </p>

            <div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
                <img src={Delivery} className='w-full h-full object-contain'  alt="Delivery" />
            </div>  
      </div>


     <p className='text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor'>Descrip un poco extensa del marcad
    <span className='text-orange-600 text-[3rem] lg:text-[5rem]'> span </span> 
    </p>
       
       <p className='text-base text-textColor text-center md:text-left md:[80%]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti minus autem dolores quasi fugiat magnam esse, nesciunt quibusdam saepe fuga dolorum delectus aliquam voluptatum voluptas id dolorem, nihil assumenda veritatis?</p>



    <button type='button' className='bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto p-4 px4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-200 '>Empieza ahora</button> 
    </div>


    


    <div className='py-2 flex-1 flex items-center relative'>

       
            <img src={HeroBg}  className="ml-auto h-400 w-full lg:w-auto lg:h-650" alt="Coockies" />

            <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center px-32 py-4'>

              <div className='w-190 p-2 bg-cardOverlay backdrop-blur-md'>

              </div>

            </div>
       
       
    </div>
    </section>
  )
}

export default HomeContainer