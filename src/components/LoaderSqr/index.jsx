import React from 'react';
import './styles.scss';
import  '../../App.scss';

const LoaderSqr = ({messaje, messaje2, btnAction}) => {

  return (
    <div className="screenSuspend">
      <div className="loader">
          <div className='outerCube cube'>
              <div className="innerCube cube">
                  <div className="innerCube2 cube"></div>
              </div>
          </div>
          <span>{messaje}</span>
          {
            messaje2!==""
            &&
            <button className='btnLoaderSqr' onClick={btnAction} >{messaje2}</button>
          }
      </div>
      </div>
  )
}

export default LoaderSqr