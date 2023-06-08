import React from 'react';
import styles from'./Footer.module.scss';

function Footer() {
  return (
    <div className={styles.footer}>

        <div className='container d-flex'>
            <div className='col-3'>
                <h4 className='mt-5'>BİZE ULAŞIN</h4>
            </div>
            <div className='col-3'>
                <h4 className='mt-5'>NASIL GİDİLİR?</h4>
            </div>
            <div className='col-3'>
                <h4 className='mt-5'>LOKASYONUMUZ</h4>
            </div>
            <div className='col-3'>
                <h4 className='mt-5'>SİZİ ARAYALIM</h4>
            </div>
        </div>   

    </div>
  )
}
export default Footer;