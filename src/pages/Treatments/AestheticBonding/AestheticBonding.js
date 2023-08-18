import React from 'react'
import styles from './AestheticBonding.module.scss';
import estdolgu from '../../../Assets/esdolgu.png';
import estdolgu2 from '../../../Assets/estdolgu2.png';

function AestheticBonding() {
    return (
        <div className='container-fluid bg-light'>
            <div className={`container ${styles.treatmentContentContainer}`}>
                <h2 className={`text-center py-5 ${styles.treatmentLabel}`}>Dişinizin Doğal Renginde Estetik Dolgular</h2>
                <div className='row'>
                    <div className={`col-12 col-md-6 d-flex justify-content-center`}>
                        <img src={estdolgu} />
                    </div>
                    <div className={`col-12 col-md-6`}>
                        <h5 className={`py-2 text-center ${styles.treatmentMainLabel}`}>Gülüşünüzle Fark Yaratın</h5>
                        <p className={`${styles.treatmentMainP}`}>
                            Güzel ve estetik bir gülümsemeye sahip olmak herkes tarafından arzu edilen bir durumdur.
                            Bunun doğal bir sonucu olarak modern diş hekimliği, bireylerin gülümsemelerinin estetik olarak iyileşmesine odaklanarak
                            bunun sağlanabilmesi için karmaşık cerrahi prosedürlere ihtiyaç duyulmayan birçok farklı seçenek sunar.
                                <br></br>
                                <br></br>
                            Diş dolguları günümüzde en sık uygulanan diş hekimliği prosedürlerinin başında gelir.
                            Dişlerin sağlığının ve estetik görünümünün iyileştirilmesini sağlayan rutin işlemlerden biri olan
                            diş dolguları uzun vadede birçok diş probleminden kaçınmayı sağlar.

                            Modern diş hekimliği diş dolguları şeklinde mükemmel çözümler sunmakta olup estetik dolgu uygulaması bunlardan biridir.
                            Estetik dolgular hayallerindeki gülümsemeye kavuşmak isteyen kişiler için en sık uygulanan estetik diş hekimliği prosedürleri arasında yer alır.
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
                        <h5 className={`py-2 text-center ${styles.treatmentMainLabel}`}>Diş Çürüklerine Veda Edin</h5>
                        <p className={`${styles.treatmentMainP}`}>
                            Diş çürükleri, diş yüzeylerinin asitler tarafından çözülmesi sonucu oluşan bozulmalardır.
                            Yetersiz ağız hijyeni, şekerli ve asitli yiyeceklerin tüketimi,
                            bakteri plağı ve genetik faktörler gibi etmenler çürük oluşumunu hızlandırabilir.
                            Eğer çürük tedavi edilmezse, dişin iç yapısına ilerleyebilir ve ağrıya, hassasiyete hatta diş kaybına yol açabilir.
                            <br></br>
                                <br></br>
                            Diş dolguları, çürüklerin tedavi edilmesi amacıyla kullanılan yöntemlerdir.
                            Bu dolgular, çürümüş kısımların temizlenmesi ve boşluğun doldurulması ile uygulanır.
                            Diş dolguları, çürüğün ilerlemesini durdurarak dişin fonksiyonunu ve estetiğini korumak açısından önemlidir.
                            Ayrıca dolgular, çürük tedavisinin erken aşamalarında uygulandığında daha invaziv tedavilere (örneğin, kanal tedavisi veya diş çekimi) gerek kalmadan çürüğün tedavi edilmesini sağlar.
                            Bu sayede diş kaybı riski azalır.
                        </p>

                    </div>
                    <div className={`col-12 col-md-6 d-flex justify-content-center`}>
                        <img className='' src={estdolgu2} />
                    </div>
                </div>

            </div>



        </div>

    )
}

export default AestheticBonding;