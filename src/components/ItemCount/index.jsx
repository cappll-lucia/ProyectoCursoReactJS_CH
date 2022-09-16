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
        <div className='itemCountCant' >{count}</div>
        <div>
            <button className='btnItemCount btnItemCountAdd' onClick={handleRest}>-</button>
            <button className='btnItemCount' onClick={handleAdd}>+</button>
        </div>
    </div>
    )
}

export default ItemCount