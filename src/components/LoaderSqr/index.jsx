import React from 'react';
import './styles.scss';
import  '../../App.scss';

const LoaderSqr = ({messaje}) => {
  return (
    <div className="screenSuspend">
      <div className="loader">
          <div className='outerCube cube'>
              <div className="innerCube cube">
                  <div className="innerCube2 cube"></div>
              </div>
          </div>
          <span>{messaje}</span>
      </div>
      </div>
  )
}

export default LoaderSqr