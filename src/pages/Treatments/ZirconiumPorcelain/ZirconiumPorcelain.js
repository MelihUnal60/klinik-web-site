import React from 'react'
import styles from './ZirconiumPorcelain.module.scss';
import zirkonyum from '../../../Assets/zir1.png';
import zirkonyum2 from '../../../Assets/zir2.png';


function ZirconiumPorcelain() {
    return (
        <div className='container-fluid bg-light'>
            <div className={`container ${styles.treatmentContentContainer}`}>
                <h2 className={`text-center py-5 ${styles.treatmentLabel}`}>Zirkonyum Porselen</h2>
                <div className='row'>
                <div className={`col-12 col-md-6 d-flex justify-content-center`}>
                    <img src={zirkonyum} alt='zirkonyum kaplama' />
                     <hr></hr>
                     <hr></hr>
                   


                </div>
                <div className={`col-12 col-md-6`}>
                    <h5 className={`py-2 text-center ${styles.treatmentMainLabel}`}>Estetik ve Sağlamlığın Mükemmel Birleşimi</h5>
                    <p className={`${styles.treatmentMainP}`}>
                    Daha doğal ve estetik bir görünüm sağladığı için zirkonyum kaplama son zamanlarda diş hekimleri tarafından çok fazla tercih edilmekte ve önerilmektedir.
                    Zirkonyum kaplama, adını yapıldığı malzemeden alır. Doğada bulunan  güçlü bir element olan zirkonyum şeffaf ve beyaz rengi sayesinde 
                    doğal dişlere çok yakın bir görüntü sağlar. Zirkonyum dişin en önemli avantajlarından biri diş etine zarar vermemesidir. 
                    Diş ve diş etine mükemmel uyum sağlayan zirkon kaplama, kompozit ve porselen kaplamalarda karşılaştığımız diş eti problemlerini ortadan kaldırır.
                    <br></br>
                    <br></br>
                    Zirkonyum dişler, hem estetik görünüm hem de dayanıklılık açısından önemli avantajlar sunan bir dental restorasyon türüdür.
                    <br></br>
                    </p>

                </div>
                </div>
           
                <br></br>
                <br></br>
                <hr></hr>
                <br></br>
                <br></br>
            </div>
            <br></br>
            <br></br>
            <div className={`container ${styles.treatmentContentContainer}`}>
                
                <div className='row'>
                
                <div className={`col-12 col-md-6`}>
                    <h5 className={`py-2 text-center ${styles.treatmentMainLabel}`}>Doğal ve Estetik Gülüş Elde Edin</h5>
                    <p className={`${styles.treatmentMainP}`}>
                    Zirkonyum dişler, estetik ve dayanıklılığın mükemmel bir bileşimi olarak kabul edilir. 
                    Doğal bir gülümseme elde etmek ve diş sağlığınızı en üst düzeyde korumak isteyen kişiler için ideal bir seçenektir. Ancak her diş restorasyonunda olduğu gibi, zirkonyum dişlerin bakımı ve düzenli kontrolleri de unutulmamalıdır.
                     Diş hekiminiz, sizin ihtiyaçlarınıza en uygun tedavi planını belirlemek konusunda size rehberlik edecektir.
                    <br></br>
                    <br></br>
                    Zirkonyum dişler, hem estetik görünüm hem de dayanıklılık açısından önemli avantajlar sunan bir dental restorasyon türüdür.
                    <br></br>
                    </p>

                </div>
                <div className={`col-12 col-md-6 d-flex justify-content-center`}>
                    <img src={zirkonyum2} alt='zirkonyum diş'/>
                </div>
                </div>
           
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>

        </div>

    )
}

export default ZirconiumPorcelain;