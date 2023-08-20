import React from 'react';
import styles from './PorcelainLaminate.module.scss';
import lamina from '../../../Assets/laminac1.png';
import lamina2 from '../../../Assets/laminac2.png';

function PorcelainLaminate() {
    return (
        <div className='container-fluid bg-light'>
            <div className={`container ${styles.treatmentContentContainer}`}>
                <h2 className={`text-center py-5 ${styles.treatmentLabel}`}>Porselen Lamina Dişler</h2>
                <div className='row'>
                <div className={`col-12 col-md-6 d-flex justify-content-center`}>
                    <img src={lamina} alt='porselen dişler'/>
                     <hr></hr>
                     <hr></hr>
                   


                </div>
                <div className={`col-12 col-md-6`}>
                    <h5 className={`py-2 text-center ${styles.treatmentMainLabel}`}>İnci Gibi Dişler, Estetik Gülüşler</h5>
                    <p className={`${styles.treatmentMainP}`}>
                    Günümüzde dental estetik çözümler, gülüşümüzü daha çekici ve sağlıklı hale getirmek için geniş bir yelpazeye sahiptir.
                     Bu çözümlerden biri de porselen lamina dişlerdir. 
                    Porselen lamina dişler, estetik ve fonksiyonellik açısından mükemmel sonuçlar elde etmek isteyen kişiler için popüler bir tercihtir.
                    <br></br>
                    <br></br>
                    Porselen lamina dişler, ince ve özel olarak şekillendirilmiş porselen kaplamalardır. Dişlerin ön yüzeyine uygulanır ve doğal diş yapısına benzer şekilde tasarlanırlar.
                     Porselenin estetik özellikleri sayesinde, diş rengi, parlaklık ve doku açısından doğal dişlere oldukça benzer sonuçlar elde edilebilir.
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
                    <h5 className={`py-2 text-center ${styles.treatmentMainLabel}`}>Mükemmel Gülüşün Sırrı</h5>
                    <p className={`${styles.treatmentMainP}`}>
                    Laboratuvarda üretilen porselen laminalar, uygun renk, şekil ve boyutlarına sahipse diş hekimi tarafından yerleştirilir. Bu adım, doğru yerleştirme ve uyum sağlamak için son derece titizlik gerektirir.
                    <br></br>
                    <br></br>
                    Porselen lamina dişler, estetik ve fonksiyonellik açısından en iyi sonuçları elde etmek isteyenler için mükemmel bir seçenektir.
                     Doğal bir gülümseme elde etmek ve diş sağlığınızı korumak isteyen kişiler için ideal bir çözümdür. Çalışkan Dent, sizin ihtiyaçlarınıza en uygun tedavi planını belirlemek ve porselen lamina dişlerle ilgili daha fazla bilgi vermek konusunda size yardımcı olacaktır.
                    </p>

                </div>
                <div className={`col-12 col-md-6 d-flex justify-content-center`}>
                    <img src={lamina2} alt='porselen lamina diş'/>
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

export default PorcelainLaminate;