import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail';
import {db} from '../../firebase/config';
import { doc, getDoc } from "firebase/firestore";
import LoaderSqr from '../../components/LoaderSqr';


const ItemDetailContainer = () => {

    const [productDetail, setProductDetail]= useState({});

    const {productID}=useParams();

    const navigate=useNavigate();



    useEffect(()=>{

        /*get single product from fireBase*/
        const getProduct= async()=>{
            const docRef = doc(db, "products", productID);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setProductDetail({id: docSnap.id, ...docSnap.data()});
            } else {
                setProductDetail(false);
                console.log("No such document!");
            }
        };
        getProduct();
    }, [productID]);

    return (
        <div>
            { productDetail!==false
                ?
                <ItemDetail product={productDetail}/>
                :
                <div>
                    <LoaderSqr messaje={"Producto no encontrado"} messaje2={'Volver al inicio'} btnAction={()=>{navigate('/')}}/>
                </div>
                }
        </div>
    )
}

export default ItemDetailContainer