import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail';
import {db} from '../../firebase/config';
import { doc, getDoc } from "firebase/firestore";


const ItemDetailContainer = () => {

    const [productDetail, setProductDetail]= useState({});

    const {productID}=useParams();

    useEffect(()=>{

        /*get single product from fireBase*/
        const getProduct= async()=>{
            const docRef = doc(db, "products", productID);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setProductDetail({id: docSnap.id, ...docSnap.data()});
            } else {
            console.log("No such document!");
            }
        };
        getProduct();
    }, [productID]);

    return (
        <div>
            <ItemDetail product={productDetail}/>
        </div>
    )
}

export default ItemDetailContainer