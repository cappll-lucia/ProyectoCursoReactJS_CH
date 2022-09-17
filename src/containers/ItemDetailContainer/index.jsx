import React, { useState } from 'react';
import { useEffect } from 'react';
import ItemDetail from '../../components/ItemDetail';

const ItemDetailContainer = () => {

    const [productDetail, setProductDetail]= useState({});

    useEffect(()=>{
        const getProduct = async()=>{
            try {
                const response = await fetch ("https://fakestoreapi.com/products/1");
                const data = await response.json();
                setProductDetail(data);
            } catch (error) {
                console.log(error);
            }
        }

        getProduct();

    }, []);

    console.log(productDetail);


  return (
    <div>

        <ItemDetail product={productDetail}/>

    </div>
  )
}

export default ItemDetailContainer