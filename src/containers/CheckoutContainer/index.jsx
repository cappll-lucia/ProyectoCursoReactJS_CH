import React, { useState } from 'react';
import ClientForm from '../../components/ClientForm';
import Order from '../../components/Order';
import { Shop } from '../../context/ShopProvider';

const CheckoutContainer = () => {

    const [client, setClient]=useState({});
    

  return (
    <div>
        {
        client==={}
        ?
        <ClientForm save={setClient}/>
        :
        <Order client={client}/>
    }
        </div>
  )
}

export default CheckoutContainer