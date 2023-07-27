import styles from './BeforeAfterContent.module.scss';
import React from 'react';
import baf1 from '../../Assets/baf1.png';
import baf2 from '../../Assets/baf2.png';
import baf4 from '../../Assets/baf4.png';
import baf5 from '../../Assets/baf5.png';

function BeforeAfterContent() {
  return (
    <div className={`container ${styles.beforeAfterContainer}`}>
      <h2 className={`text-center py-5 ${styles.beforeAfterLabel}`}>Gülüşüne Estetik Kattıklarımız</h2>
      <div className='row'>
        <div className={`col-12 col-md-6 py-3 ${styles.afterPhoto}`}>
          <img src={baf1} alt='Önce-Sonra 1'/>
        </div>
        <div className={`col-12 col-md-6 py-3 ${styles.afterPhoto}`}>
          <img src={baf2} alt='Önce-Sonra 2'/>
        </div>
        <div className={`col-12 col-md-6 py-3 ${styles.afterPhoto}`}>
          <img src={baf4} alt='Önce-Sonra 3'/>
        </div>
        <div className={`col-12 col-md-6 py-3 mb-3 ${styles.afterPhoto}`}>
          <img src={baf5} alt='Önce-Sonra 4'/>
        </div>
        
      </div>
    </div>
  )
}

export default BeforeAfterContent;
