import React from 'react';
import styles from'./Footer.module.scss';


function Footer() {
  return (
    <div className={styles.footer}>

        <div className='container d-flex'>
            <div className='col-3 border-right-2px'>
                <h4 className='mt-5 mb-3'>BİZE ULAŞIN</h4>
                <h4 className='row justify-content-center mb-3'>
                 0212 503 00 05
                </h4>
                <h4 className='row justify-content-center mb-3'>
                 Online Randevu
                </h4>
                <h4 className='row justify-content-center mb-3'>
                 caliskandent@gmail.com
                </h4>
                <h4 className='row justify-content-center'>
                 iconlar gelecek
                </h4>
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