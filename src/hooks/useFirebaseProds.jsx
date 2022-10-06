import { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from "firebase/firestore";
import {db} from '../firebase/config';


const useFirebaseProds = (categoryID) => {

    const[loading, setLoading] =useState(false);
    const [products, setProducts]=useState([]);
    const [error, setError]=useState("");

    useEffect (()=>{
        const getProducts  =async()=>{
            try {
                setLoading(true);
                let q ='';
                if(categoryID){
                q = query(collection(db, "products"),where("category", "==", categoryID));
                }else{
                q = query(collection(db, "products"));
                }
                const querySnapshot = await getDocs(q);
                const firebaseProds=[];
                querySnapshot.forEach((doc) => {
                firebaseProds.push({id: doc.id, 
                                    ...doc.data()});
                });
                setProducts(firebaseProds); 
            } catch (error) {
                setError(error.message);
            }
            finally{
                setLoading(false);
            }
        }
        getProducts();
        }, [categoryID]);
    return ([products, error, loading]);
}

export default useFirebaseProds