import React from 'react';
import './styles.scss';

const LoaderSqr = ({messaje}) => {
  return (
    <div className="loader">
        <span>{messaje}</span>
        <div className='outerCube cube'>
            <div className="innerCube cube">
                <div className="innerCube2 cube"></div>
            </div>
        </div>
    </div>
  )
}

export default LoaderSqr