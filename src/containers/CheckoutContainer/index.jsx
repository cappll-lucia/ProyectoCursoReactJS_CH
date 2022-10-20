import React, { useContext, useState } from 'react';
import ClientForm from '../../components/ClientForm';
import Order from '../../components/Order';
import { Shop } from '../../context/ShopProvider';



const CheckoutContainer = () => {

    const {client} =useContext(Shop);
    console.log('cliente: ', client);
  return (
    <div>
        {
        client=={}
        ?
        <ClientForm/>
        :
        <Order/>
    }
        </div>
  )
}

export default CheckoutContainer