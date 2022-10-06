import React from 'react';
import './styles.scss';
import ItemList from '../../components/ItemList';
import { useParams } from 'react-router-dom';
import useFirebaseProds from '../../hooks/useFirebaseProds';


const ItemListContainer = () => {
  
  const {categoryID}=useParams();
  const [products, error, loading]= useFirebaseProds(categoryID);
  
  return (
    
    <div className='ILC container-fluid'>
        <ItemList products={products}/>
    </div>
    
  )
}

export default ItemListContainer