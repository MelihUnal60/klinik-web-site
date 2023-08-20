import React from 'react';
import styles from './Bruksizm.module.scss';
import bruk from '../../../Assets/brukc1.png';
import bruk2 from '../../../Assets/brukc2.png';

function Bruksizm() {
    return (
        <div className='container-fluid bg-light'>
            <div className={`container ${styles.treatmentContentContainer}`}>
                <h2 className={`text-center py-5 ${styles.treatmentLabel}`}>Bruksizm-Şeffaf Plaklar</h2>
                <div className='row'>
                <div className={`col-12 col-md-6 d-flex justify-content-center`}>
                    <img src={bruk} alt='bruksizm'/>
                     <hr></hr>
                     <hr></hr>
                   


                </div>
                <div className={`col-12 col-md-6`}>
                    <h5 className={`py-2 text-center ${styles.treatmentMainLabel}`}>Gece Uykularınız Kabusa Dönüşmesin</h5>
                    <p className={`${styles.treatmentMainP}`}>
                    Diş sağlığı, genel sağlığımızın bir yansımasıdır ve çeşitli faktörlerden etkilenebilir.
                     Bunlardan biri de bruksizm olarak adlandırılan bir durumdur. Bruksizm, dişlerin bilinçsizce ve istemsizce gıcırdatılması veya sıkılması olarak tanımlanır.
                     Bu durum, dişlere ve çevre dokulara zarar verebilirken, aynı zamanda çeşitli semptomlarla da kendini gösterebilir.
                    <br></br>
                    <br></br>
                    Stres, anksiyete , diş uyum bozuklukları, yanlış uygulanan protezler, uyku bozuklukları ve alkol-kafein tüketimi gibi nedenlerden, Bruksizm sorunu
                    zaman zaman görülebilir. Uzman ekibimiz tarafından size özel yapılan şeffaf plaklar ile soruna çözüm bulabilirsiniz.
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
                    <h5 className={`py-2 text-center ${styles.treatmentMainLabel}`}>Şeffaf Plaklar</h5>
                    <p className={`${styles.treatmentMainP}`}>
                    Dental estetik ve düzeltme teknolojileri, gülüşünüzü daha çekici ve sağlıklı hale getirmek için önemli ilerlemeler kaydetmiştir. 
                    Bu teknolojilerden biri de şeffaf plaklar veya alignerlar olarak adlandırılan yöntemdir.
                     Şeffaf plaklar, geleneksel tel teli yerine daha modern ve estetik bir şekilde dişlerin düzeltilmesini sağlayan bir çözümdür.
                    <br></br>
                    <br></br>
                    Şeffaf plaklar, dişlerin düzeltilmesi veya hizalanması amacıyla kullanılan özel olarak tasarlanmış şeffaf ve özelleştirilmiş plaklardır.
                     Her plak, bir sonraki aşamaya geçmek üzere belirli bir süre boyunca giyilir ve dişlerin yavaşça hareket etmesini sağlar.
                     Bu yöntem, dişlerin konumunu kademeli olarak düzelterek istenen sonuca ulaşmayı hedefler.
                    <br></br>
                    </p>

                </div>
                <div className={`col-12 col-md-6 d-flex justify-content-center`}>
                    <img src={bruk2} alt='diş gıcırdatma'/>
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

export default Bruksizm;