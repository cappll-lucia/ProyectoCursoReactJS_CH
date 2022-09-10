import React from 'react';
import './styles.scss';

const Item = ({prod}) =>{
  return (
    <div className="card product--card col-xl-2 col-lg-4 col-md-5 col-sm-5 col-10">
        {/* <Image className="card-img-bottom" src={prod.price} alt="Card image"/> */}
        <div className="card-body">
            <h5 className="card-title">$ {prod.price}</h5>
            <p className="card-text">{prod.brand}</p>
            <p className="card-text model">{prod.description}</p>
            <a href="#" className="btn card-btn btn-primary btn_buy" id={prod.id}>Ver más</a>
        </div>
    </div>
  )
}

export default Item