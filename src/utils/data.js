import Alfajor from "../img/alfajor-editado.png" ; 
import Oreo from "../img/oreo.png" ; 
import Maicena from "../img/maicena.png" ; 
import Coockies  from "../img/Cookie-PNG-Pic.png" ;

export const heroData = [
    {id : 1 , name : "Alfajores" , desc : "Chocolate y Vainilla" , price : "1200" , imgScr : Alfajor},
    {id : 2 , name : "Oreo" , desc : "Clasicas" , price : "900" , imgScr : Oreo},
    {id : 3 , name : "Sable" , desc : "Dulce de leche" , price : "1150" , imgScr : Maicena},
    {id : 4 , name : "Coockies" , desc : "Con chips de chocolate" , price : "1300" , imgScr : Coockies},
  ] ;

  export const categories = [

    {
      id:1,
      name:"Alfajores",
      urlParamName: "alfajores"
    },
    {
      id:2,
      name:"Galletitas",
      urlParamName: "coockies"
    },
    {
      id:2,
      name:"Oreos",
      urlParamName: "oreos"
    },
    {
      id:4,
      name:"Tortas",
      urlParamName: "tortas"
    },
    {
      id:5,
      name:"Frutas",
      urlParamName: "frutas"
    },
    {
      id:6,
      name:"Snacks",
      urlParamName: "snacks"
    }

  ]