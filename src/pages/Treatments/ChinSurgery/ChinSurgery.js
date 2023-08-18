import React from 'react'
import styles from './ChinSurgery.module.scss';
import cerrahi from '../../../Assets/chin1.png';
import cerrahi2 from '../../../Assets/chin2.png';


function ChinSurgery() {
    return (
        <div className='container-fluid bg-light'>
            <div className={`container ${styles.treatmentContentContainer}`}>
                <h2 className={`text-center py-5 ${styles.treatmentLabel}`}>Çene Cerrahisi</h2>
                <div className='row'>
                <div className={`col-12 col-md-6 d-flex justify-content-center`}>
                    <img className='py-3' src={cerrahi} />
                     <hr></hr>
                     <hr></hr>
                   


                </div>
                <div className={`col-12 col-md-6`}>
                    <h5 className={`py-2 text-center ${styles.treatmentMainLabel}`}>Doğal Dişe En Yakın Tedavi : İmplant</h5>
                    <p className={`${styles.treatmentMainP}`}>
                    Gülümseme, insan iletişiminin temel bir parçasıdır ve sağlıklı dişler, kendinden emin bir gülümsemenin önemli bir bileşenidir. 
                    Ancak çeşitli nedenlerle diş kaybı meydana gelebilir ve bu durum hem estetik hem de fonksiyonel sorunlara neden olabilir.
                     Neyse ki, modern diş hekimliği alanındaki gelişmeler sayesinde, kaybedilen dişlerin yerine koymak için dental implantlar kullanılarak gülümseme yeniden inşa edilebilir.
                    <br></br>
                    <br></br>
                    Dental implantlar, kaybedilen diş veya dişlerin yerine geçmek amacıyla çene kemiğine cerrahi olarak yerleştirilen yapay köklerdir. 
                    Genellikle titanyum gibi biyouyumlu malzemelerden üretilirler ve çene kemiğiyle entegre olma özelliği taşırlar. İmplantlar, çene kemiği üzerine yerleştirildikten sonra kemiğin etrafındaki dokularla birleşir, bu sayede sağlam ve dayanıklı bir temel oluşturur.
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
            <div className={`container ${styles.treatmentContentContainer}`}>
                <br></br>
                <br></br>
                <div className='row'>
                
                <div className={`col-12 col-md-6`}>
                    <h5 className={`py-2 text-center ${styles.treatmentMainLabel}`}>Gömük Diş Operasyonları</h5>
                    <p className={`${styles.treatmentMainP}`}>
                    Ağız sağlığı, genel sağlığımız için önemli bir role sahiptir. Ancak bazen dişler düzgün bir şekilde çıkmaz veya çıkamaz ve bu duruma "gömük diş" adı verilir.
                     Gömük dişler, ağız içinde yeterli alan olmadığında veya dişin çıkacağı yolda engeller olduğunda meydana gelir.
                    <br></br>
                    <br></br>
                    Gömük dişler, genellikle üçüncü azı dişleri (bilinen adıyla "yirmi yaş dişleri") olarak adlandırılan dişlerin çıkmaması veya tam olarak çıkmaması durumunda oluşur. Bu dişler, ağızın arka kısmında bulunan en son dişlerdir.
                     Yetersiz alan, yanlış çıkma açısı veya engelleyen dokular gibi faktörler gömük dişlere neden olabilir.
                    <br></br>
                    </p>

                </div>
                <div className={`col-12 col-md-6 d-flex justify-content-center`}>
                    <img className='py-3' src={cerrahi2} />
                </div>
                </div>
           
                
            </div>

        </div>

    )
}

export default ChinSurgery;