import React from 'react';
import ItemList from '../../components/ItemList';
import { useParams } from 'react-router-dom';
import LoaderSqr from '../../components/LoaderSqr';
import useFirebaseProds from '../../hooks/useFirebaseProds';


const ItemListContainer = () => {
  
  const {categoryID}=useParams();
  const [products, error, loading]= useFirebaseProds(categoryID);
  
  return (
    
    <div className='ILC container-fluid' style={{'margin':'0', 'padding':'0'}}>
        { !loading ?
        <ItemList products={products}/>
        :
        <LoaderSqr messaje={'Cargando productos...'} messaje2={error}/>
        }
    </div>
    
  )
}

export default ItemListContainer