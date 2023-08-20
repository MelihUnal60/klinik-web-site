import React from 'react';
import styles from './Greft.module.scss';
import greft1 from '../../../Assets/greftc1.png';
import greft2 from '../../../Assets/greftc2.png';

function Greft() {
    return (
        <div className='container-fluid bg-light'>
            <div className={`container ${styles.treatmentContentContainer}`}>
                <h2 className={`text-center py-5 ${styles.treatmentLabel}`}>Greft-Kemik Tozu Uygulaması</h2>
                <div className='row'>
                <div className={`col-12 col-md-6 d-flex justify-content-center`}>
                    <img src={greft1} alt='greft'/>
                     <hr></hr>
                     <hr></hr>
                   


                </div>
                <div className={`col-12 col-md-6`}>
                    <h5 className={`py-2 text-center ${styles.treatmentMainLabel}`}>Sağlıklı Dişlerin Temeli</h5>
                    <p className={`${styles.treatmentMainP}`}>
                    Diş sağlığı, genel sağlığımızın önemli bir parçasıdır ve güzel bir gülümseme sağlamak için dişlerin sağlıklı ve düzgün olması gerekmektedir.
                     Ancak bazı durumlarda diş kaybı, diş eti problemleri veya diş yapısının bozulması gibi sorunlar ortaya çıkabilir.
                     İşte bu gibi durumların çözümünde diş grefti, sağlıklı dişlerin temelini oluşturan önemli bir prosedürdür.
                    <br></br>
                    <br></br>
                    Diş grefti, vücuttan veya sentetik materyallerden alınan dokunun, eksik olan diş eti veya çene kemiği bölgesine transfer edilmesi işlemidir.
                     Bu prosedür, diş implantları veya diğer dental restorasyonlar için gereken uygun diş eti veya kemik miktarını sağlamak için kullanılır.
                     Diş grefti, ağız içi doku yeniden oluşturmayı amaçlar ve diş sağlığını korumak veya yeniden kazanmak için önemli bir araçtır.
                    <br></br>
                    </p>

                </div>
                </div>
           
                <br className='brHidden'></br>
                <br className='brHidden'></br>
                <hr></hr>
                <br className='brHidden'></br>
                <br className='brHidden'></br>
            </div>
            <br></br>
            <br></br>
            <div className={`container ${styles.treatmentContentContainer}`}>
                
                <div className='row'>
                
                <div className={`col-12 col-md-6`}>
                    <h5 className={`py-2 text-center ${styles.treatmentMainLabel}`}>Tedavinizden Kesin Sonuç Alın</h5>
                    <p className={`${styles.treatmentMainP}`}>
                    Diş grefti, eksik diş eti veya çene kemiği bölgesini yeniden oluşturarak diş sağlığını korur veya iyileştirir.
                    Diş implantları veya protezler gibi dental restorasyonlar için gereken uygun kemik veya diş eti yapısını sağlar.
                    Doğal görünüm ve işlevi geri kazandırarak gülüş estetiği ve çiğneme fonksiyonunu iyileştirir.
                    <br></br>
                    <br></br>
                    Diş grefti, diş sağlığını koruma veya yeniden kazanma amacıyla yaygın olarak kullanılan etkili bir tedavi yöntemidir. 
                    Diş eti veya kemik kaybı gibi sorunlarla karşılaşıldığında, diş hekiminiz en uygun tedavi planını belirlemek için size rehberlik edecektir.
                     Diş grefti, sağlıklı diş yapısının temelini oluşturarak uzun vadeli bir gülümseme sağlamak açısından önemli bir rol oynar.
                    <br></br>
                    </p>

                </div>
                <div className={`col-12 col-md-6 d-flex justify-content-center`}>
                    <img src={greft2} alt='kemik tozu' />
                </div>
                </div>
           
                <br className='brHidden'></br>
                <br className='brHidden'></br>
                <br className='brHidden'></br>
                <br className='brHidden'></br>
            </div>

        </div>

    )
}

export default Greft;