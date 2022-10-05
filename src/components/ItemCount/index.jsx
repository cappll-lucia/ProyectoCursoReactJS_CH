import React from 'react';
import {useState} from 'react';
import './styles.scss';



const ItemCount = ({stock, initial, onAdd}) => {

    const [count, SetCount]=useState(initial);

    const handleAdd=()=>{
        if(count<stock){
            SetCount(count+1);
        }else{
            alert(`Sólo quedan ${stock} unidades disponibles`); //pasarla a swet alert
        }
    }

    const handleRest=()=>{
        SetCount(count-1);
    }

    const addCart=()=>{
        onAdd(count);
        SetCount(initial);
    }

  return (
    <div id='itemCount'>
        <div className='itemCountCant' >{count}</div>
        <div>
            <button className='btnItemCount btnItemCountAdd' onClick={handleRest}>-</button>
            <button className='btnItemCount' onClick={handleAdd}>+</button>
        </div>
        <button onClick={addCart}>Agregar al carrito</button>
    </div>
    )
}

export default ItemCount