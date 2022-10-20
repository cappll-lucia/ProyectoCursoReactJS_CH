import React, { useContext, useState } from 'react';
import ClientForm from '../../components/ClientForm';
import Order from '../../components/Order';
import { Shop } from '../../context/ShopProvider';



const CheckoutContainer = () => {

    const {client} =useContext(Shop);

  return (
    <div>
        {
        client==null
        ?
        <ClientForm/>
        :
        <Order/>
    }
        </div>
  )
}

export default CheckoutContainer