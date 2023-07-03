import React, { useState } from 'react'

const CreateContainer = () => {
  const [title, setTitle] = useState ("") ;
  const [calories, setCalories] = useState ("") ;
  const [price, setPrice] = useState ("") ;
  const [category, setCategory] = useState (null) ;
  const [imageAsset , setImageAsset] = useState(null) ; 
  const [fields, setFields] = useState (true) ;
  const [alertStatus , steAlertStatus] = useState("s") ; 
  const [msg , setMsg ] = useState(null) ;
  const [ isLoading, setIsLoading] = useState(false);



  return (
    <div classname="w-full min-h-screen flex items-center justify-center">
 
        <div classname ="w-[90%] md:w-[75%] border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center">
          {
            fields && (
              <p className={`w-full p-2 rounded-lg text-center text-lg font-semibold  ${ 
                alertStatus === "danger"
                ? 'bg-red-400 text-red-800'
                : "bg-emerald-400 text-emerald-800"
                }`}
              > 

                Something Wrong
              </p>
            )
          }
        </div>

    </div>
  )
}

export default CreateContainer ;