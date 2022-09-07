import React from 'react';
import {useState} from 'react';
import './styles.scss';



const ItemCount = () => {

    const [count, SetCount]=useState(0);

    const handleAdd=()=>{
        SetCount(count+1);
    }

    const handleRest=()=>{
        SetCount(count-1);
    }

  return (
    <div id='itemCount'>
        <h3>{count}</h3>
        <div>
            <button className='btnItemCount' onClick={handleRest}>-</button>
            <button className='btnItemCount' onClick={handleAdd}>+</button>
        </div>
    </div>
    )
}

export default ItemCount