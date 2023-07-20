import styles from './HealthTourismContent.module.scss';
import toothSun from '../../Assets/toothSun.png';
import transfer from '../../Assets/transfer.png';
import React from 'react';

function HealthTourismContent() {
    return (
        <div className={`container-fluid ${styles.tourismContainer}`}>
            <div className={`container`}>
                <h2 className={`text-center py-5 ${styles.tourismLabel}`}>
                    Ülkemize Gülümseten Bir Ziyaret İçin Yardımcı Olalım
                </h2>
                <div className={`row`}>
                    <div className={`col-12 col-md-6 py-5 pl-5 ${styles.tourismImg}`}>
                        <img src={toothSun} />
                    </div>
                    <div className={`col-12 col-md-6 py-5 pr-5${styles.tourismText}`}>
                        <h5 className={`${styles.tourismTextLabel}`}>
                            Avantajlı Tedavi Paketlerimiz İle Dişleriniz Bayram Etsin
                        </h5>
                        <p>
                            Türkiye dental turizm alanında pek çok ülke ile kıyaslandığında son derece avantajlıdır.
                            Öncelikle ülkemizde uygulanan diş tedavilerinin Avrupa ülkelerinde uygulanan tedaviler ile aynı kalitede olduğunun altını çizmek gerekiyor.
                            Ancak buna karşın ülkemizde daha makul fiyatlandırmalar yapılıyor.

                            Sadece bu husus bile tek başına Türkiye’yi avantajlı kılabiliyor.
                            Elbette Türkiye diş tedavisi hizmeti alırken aynı zamanda tatil yapmak ve gezmek için de cazip bir seçenektir.Bu fırsatı mutlaka değerlendirin.
                        </p>
                        <button type="button" className="btn btn-success btn-lg ">İletişime Geçin</button>
                    </div>
                    <div className={`col-12  py-5 ${styles.tourismText}`}>
                        <h5 className={`${styles.tourismTextLabel}`}>
                            Konaklama ve Transfer Planlamanızı Biz Yapalım
                        </h5>
                        <p>
                            Ziyaretiniz boyunca, talebiniz doğrutulsunda, konaklama ve transfer hizmetlerimizden yararlanabilirisiniz.
                            Böylelikler siz sadece tedavinize ve keyifli vakit geçirmeye odaklanmış olursunuz.Konaklama ve transfer dahil tedavi paketlerimiz için 
                            hemen bizimle iletişime geçebilirsiniz.Size hizmet vermekten mutluluk duyacağız.
                        </p>
                        <button type="button" className="btn btn-success btn-lg ">İletişime Geçin</button>
                    </div>
                    <div className={`col-12 col-md-6 ${styles.tourismImg}`}>
                        <img src={transfer} />
                    </div>
                </div>

            </div>
        </div>

    )
}

export default HealthTourismContent;
