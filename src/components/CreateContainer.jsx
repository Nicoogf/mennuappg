import React, { useState } from 'react' ;
import { motion } from "framer-motion" ; 
import  {MdFastfood} from "react-icons/md" ;
import { categories } from '../utils/data';

const CreateContainer = () => {
  const [title, setTitle] = useState ("") ;
  const [calories, setCalories] = useState ("") ;
  const [price, setPrice] = useState ("") ;
  const [category, setCategory] = useState (null) ;
  const [imageAsset , setImageAsset] = useState(null) ; 
  const [fields, setFields] = useState (false) ;
  const [alertStatus , steAlertStatus] = useState("s") ; 
  const [msg , setMsg ] = useState(null) ;
  const [ isLoading, setIsLoading] = useState(false);



  return (
    <div classname="w-full min-h-screen flex items-center justify-center">
 
        <div classname ="w-[90%] md:w-[75%] border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center gap-4">
          {
            fields && (
              <motion.p initial={{opacity:0}}
                        animate={{opacity:1}}
                        exit={{opacity:0}}
                className={`w-full p-2 rounded-lg text-center text-lg font-semibold  ${ 
                alertStatus === "danger"
                ? 'bg-red-400 text-red-800'
                : "bg-emerald-400 text-emerald-800"
                }`}
              > 

                {msg}Something Wrong
              </motion.p>
            )
          }

          <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
            <MdFastfood className="text-xl text-gray-700"/>
            <input type="text" required value={title} placeholder="Ingresar producto"
                    className='w-full h-full text-lg bg-transparent font-semibold outline-none border-none placeholder:text-gray-400 text-textColor'
                    onChange={(e) => setTitle(e.target.value)}/>
          </div>

          <div className='w-full'>
            <select onChange={ (e) => setCalories(e.target.value)} className='outline-none w-full text-base border-b-2 border-gray-200 p-2 rounded-mb cursor-pointer'>
              <option value="other" className='bg-white'>Selecionar Categoria</option>
              {categories && categories.map (item => (
                <option key={item.id} className='"text-base boder-0 outline-none capitalize bd-white text-textHeadingColor'
                value={item.urlParamName}>

                  {item.name}


                </option>
              ))}
            </select>
          </div>


        <div className='group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-225 md:h-420 cursor-pointer rounded-lg'>
          

        </div>
        </div>
    </div>
  )
}

export default CreateContainer ;