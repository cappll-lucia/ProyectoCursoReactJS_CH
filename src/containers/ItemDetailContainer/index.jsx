import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail';

const ItemDetailContainer = () => {

    const [productDetail, setProductDetail]= useState({});

    const {productID}=useParams();

    useEffect(()=>{
        const getProduct = async()=>{
            try {
                const response = await fetch (`https://fakestoreapi.com/products/${productID}`);
                const data = await response.json();
                setProductDetail(data);
            } catch (error) {
                console.log(error);
            }
        }

        getProduct();

    }, [productID]);

    return (
        <div>
            <ItemDetail product={productDetail}/>
        </div>
    )
}

export default ItemDetailContainer