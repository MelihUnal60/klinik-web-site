import React from 'react';
import main2 from '../../Assets/phonetooth.jpg';
import styles from './ContactCard.module.scss';


function ContactCard() {
  return (
    <div className={`container-fluid ${styles.contactContainer}`} >
          <br>
        </br>
        <br>
        </br>
        <br>
        </br>
      <div className={`container ${styles.contactMain}`}>
        
      
        <h2 className={`text-center align-items-center`}>BİZE ULAŞIN</h2>
        
        <hr></hr>
        <h4 className='text-center'>Adres : Fevzi Çakmak Mah. Yıldırım Beyazıt Cd. Zile Sokak No:2 D:2 B.Evler / İST.</h4>
        <br>
        </br>
        <br>
        </br>
        <div className={`row ${styles.contactContent}`}>
          <div className={`col-12 col-md-6 d-flex justify-content-start ${styles.rPhoto}`}>
            <img className={styles.contactPhoto} alt='İletişim' src={main2} />
          </div>
          <div className={`col-12 col-md-2`}>
            <button className={`btn btn-primary ${styles.btnContact}`}>TELEFON ET</button>
            <br></br>
            <br></br>
            <button onClick={(e) => {
                        e.preventDefault();
                        window.location.href = 'https://wa.me/905435288364';
                    }} className={`btn btn-primary ${styles.btnContact}`}>WHATSAPP İLETİŞİM HATTI</button>
            <br></br>
            <br></br>
            <button onClick={(e) => {
                        e.preventDefault();
                        window.location.href = 'https://www.google.com/maps/place/Di%C5%9F+Hekimi+Nurten+%C3%87al%C4%B1%C5%9Fkan/@40.9977269,28.8344996,15z/data=!4m6!3m5!1s0x14caa49fc75ad0a1:0x1fcabfa9d9c8959b!8m2!3d40.9977269!4d28.8344996!16s%2Fg%2F11c7s_0_y6?entry=ttu';
                    }}  className={`btn btn-primary ${styles.btnContact}`}>YOL TARİFİ</button>
          </div>
          
        </div>

      </div>
    </div>
  )
}

export default ContactCard;
