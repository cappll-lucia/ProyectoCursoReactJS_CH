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

        /*get product desde fakeStoreAPI */
        // const getProduct = async()=>{
        //     try {
        //         const response = await fetch (`https://fakestoreapi.com/products/${productID}`);
        //         const data = await response.json();
        //         setProductDetail(data);
        //     } catch (error) {
        //         console.log(error);
        //     }
        // }

        /*get product desde fireBase*/
        const getProduct= async()=>{
            // console.log("Antes: ", productDetail);
            const docRef = doc(db, "products", productID);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setProductDetail({id: docSnap.id, ...docSnap.data()});
                // console.log("Despues: ", productDetail);
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