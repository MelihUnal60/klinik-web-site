import React from 'react'
import styles from './Implant.module.scss';
import implant from '../../../Assets/imp1.png';
import implant2 from '../../../Assets/imp2.png';

function Implant() {
    return (
        <div className='container-fluid bg-light'>
            <div className={`container ${styles.treatmentContentContainer}`}>
                <h2 className={`text-center py-5 ${styles.treatmentLabel}`}>İmplant Tedavisi</h2>
                <div className='row'>
                    <div className={`col-12 col-md-6 d-flex justify-content-center`}>
                        <img src={implant} alt='implant tedavisi'/>
                    </div>
                    <div className={`col-12 col-md-6`}>
                        <h5 className={`py-2 text-center ${styles.treatmentMainLabel}`}>Eksik Dişiniz Kalmasın</h5>
                        <p className={`${styles.treatmentMainP}`}>
                            İmplant çene kemiğine yerleştirilen ve protezlere destek için yapılan yapay diş kökleridir.
                            Eksik dişlerin yerine yapılan, uzun ömürlü ve yaşam boyu kullanılabilecek  bu yapay köklerin
                            üzerine yapılan sabit ya da hareketli protezler hastanın çiğneme  fonksiyonunu ve estetiğini yerine getirir.
                            <br></br>
                            <br></br>
                            Dental implantlar, diş kökünün yapay bir versiyonunu oluşturan, titanyum gibi biyouyumlu malzemelerden üretilen implantlar olarak tanımlanabilir.
                            Bu implantlar, çene kemiğine cerrahi bir işlemle yerleştirilir ve kemik ile bütünleşerek dayanıklı ve güvenilir bir temel oluştururlar.
                            Üzerine yerleştirilen protezler, doğal dişlere benzer bir görünüm ve fonksiyon sağlar.

                        </p>

                    </div>
                </div>
                <br></br>
                <br></br>
                <hr></hr>
                <br></br>
                <br></br>

            </div>
            <div className={`container ${styles.treatmentContentContainer}`}>
                <br></br>
                <br></br>
                <div className='row'>

                    <div className={`col-12 col-md-6`}>
                        <h5 className={`py-2 text-center ${styles.treatmentMainLabel}`}>Kalıcı ve Sağlıklı Bir Çözüme Kavuşun</h5>
                        <p className={`${styles.treatmentMainP}`}>
                            İmplant çene kemiğine yerleştirilen ve protezlere destek için yapılan yapay diş kökleridir.
                            Eksik dişlerin yerine yapılan, uzun ömürlü ve yaşam boyu kullanılabilecek  bu yapay köklerin
                            üzerine yapılan sabit ya da hareketli protezler hastanın çiğneme  fonksiyonunu ve estetiğini yerine getirir.
                            <br></br>
                            <br></br>
                            Dental implantlar, diş kökünün yapay bir versiyonunu oluşturan, titanyum gibi biyouyumlu malzemelerden üretilen implantlar olarak tanımlanabilir.
                            Bu implantlar, çene kemiğine cerrahi bir işlemle yerleştirilir ve kemik ile bütünleşerek dayanıklı ve güvenilir bir temel oluştururlar.
                            Üzerine yerleştirilen protezler, doğal dişlere benzer bir görünüm ve fonksiyon sağlar.

                        </p>

                    </div>
                    <div className={`col-12 col-md-6 d-flex justify-content-center`}>
                        <img src={implant2} alt='implant uygulaması'/>
                    </div>
                </div>
                <br></br>
                <br></br>
                

            </div>

        </div>

    )
}

export default Implant;