import { collection, doc, orderBy, query, setDoc , getDocs } from "firebase/firestore" ;
import { firestore } from "../firebase.config" ;

// Saving new Items //
export const  saveItems = async  ( data ) =>{
    await setDoc(doc(firestore , "foodItems" ,`${Date.now()}`) ,  data , { 
        merge : true, 
    });
};



export const getAllFoodItems =async () =>{
    const items = await getDocs(
        query(collection(firestore , "foodItems") , orderBy("id" , "desc"))
    )

    return items.docs.map((doc) => doc.data());
}