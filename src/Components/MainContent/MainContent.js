import React from 'react'
import styles from './MainContent.module.scss'
import mainphoto from '../../Assets/main2.jpg'
import {FaTooth} from 'react-icons/fa'


function MainContent() {
    return (
        <div className={styles.mainContent}>
            <div className='container mt-5 d-flex'>
                <img
                    className=''
                    src={mainphoto}
                    alt="Sağlıklı gülüşler"
                />
                <div>
                <h1 className={styles.mainText}>Çalışkan Dental Kliniğe Hoş Geldiniz!</h1>
                <h5 className={styles.mainText2}>34 yıllık tecrubemiz ve uzman kadromuz ile dişinizin sağlığı ve estetiği için yanınızdayız;</h5>
                <h6 className={styles.mainText2}><FaTooth /> Çalışkan Dent olarak sağlıkla ve güvenle gülümsemeniz için, kalıcı ve ekonomik çözümlerle hizmetinizdeyiz.</h6>
                <h6 className={styles.mainText2}><FaTooth /> Tedavi teknolojilerindeki gelişmeleri sürekli takip ederek en çağdaş malzemeler, en yeni cihazlar ile konforunuzu arttırmaya özen gösteriyoruz.</h6>
                </div>
                
            </div>
        </div>
    )
}

export default MainContent;

