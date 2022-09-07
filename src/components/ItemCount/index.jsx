
import {UseState} from 'react';


const [count, SetCount]=UseState(0);

const handleAdd=()=>{
    SetCount(count+1);
}

const handleRest=()=>{
    SetCount(count-1);
}


const ItemCount = () => {
  return (
    <div id='itemCount'>
        <h3>{count}</h3>
        <div>
            <button id='btn+' onClick={handleAdd}>+</button>
            <button id='btn-' onClick={handleRest}>-</button>
        </div>
    </div>
    )
}

export default ItemCount