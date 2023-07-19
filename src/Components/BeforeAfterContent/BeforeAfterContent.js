import styles from './BeforeAfterContent.module.scss';
import React from 'react';
import baf1 from '../../Assets/baf1.png';

function BeforeAfterContent() {
  return (
    <div className={`container ${styles.beforeAfterContainer}`}>
      <h2 className='text-center py-5'>Gülüşüne Estetik Kattıklarımız ;</h2>
      <div className='row'>
        <div className={`col-12 col-md-6 ${styles.afterPhoto}`}>
          <img src={baf1} />
        </div>
        
      </div>
    </div>
  )
}

export default BeforeAfterContent;
