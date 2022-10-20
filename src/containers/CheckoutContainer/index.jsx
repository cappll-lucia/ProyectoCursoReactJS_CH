import React, { useState } from 'react';
import ClientForm from '../../components/ClientForm';
import Order from '../../components/Order';
import { Shop } from '../../context/ShopProvider';

const CheckoutContainer = () => {

    const [clientLoad, setClientLoad]=useState(false);

  return (
    <div>
        {
        !clientLoad
        ?
        <ClientForm save={setClientLoad}/>
        :
        <Order/>
    }
        </div>
  )
}

export default CheckoutContainer