import { collection, addDoc } from "firebase/firestore"; 
import {db} from '../firebase/config';



const automaticalySaveProds =async()=>{
    let reff="";
    try{
        const resp = await fetch('/data/products.json');
        const prodsToSave = await resp.json();
        prodsToSave.forEach(async(prod) => {
            const docRef=await addDoc(collection(db, "products"),{
                codProd: prod.codProd,
                brand: prod.brand,
                title: prod.title,
                price: prod.price,
                stock: prod.stock,
                img: prod.img,
                category: prod.category,
                description: prod.description
            });
            reff=docRef;
        });
    } catch{
            console.log("Error: ", Error, reff);
    }
}

export default automaticalySaveProds;