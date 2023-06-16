import React from 'react'
import styles from './TreatmentCard.module.scss'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import implant from '../../Assets/implanthome.jpg';
import bleactching from '../../Assets/gulus2.jpg';
import kanal from '../../Assets/kanal.jpeg';
import lamina from '../../Assets/lamina.jpg';
import zirkonyum2 from '../../Assets/zirkonyum2.png';
import dolgu from '../../Assets/dolgu5.jpg';
import gomuk from '../../Assets/gomuk.jpg';
import greft from '../../Assets/greft.png';
import { hover } from '@testing-library/user-event/dist/hover';


function TreatmentCard() {
    return (
        <div className='container'>

            <div className='row justify-content-center'>
                <div className='col-12'>

                    <div className={styles.tedaviBaslik}>TEDAVİLER</div>
                </div>

            </div>
            <div className={`row gx-3 gy-4 ${styles.cardBg}`}>

                <div className={`${styles.mainTedavi} col-12 col-sm-6 col-md-4`}>


                    <Card style={{ boxShadow: '0px 0px 5px darkblue',height: '500px' }}>
                        <Card.Img variant="top" src={implant} />
                        <Card.Body>
                            <Card.Title className={`${styles.mainTedaviLabel}`} >Dental İmplant</Card.Title>
                            <Card.Text>
                                Diş implantları, bir diş veya birkaç diş eksikliği olan hastalarda kullanılabilir. İmplantlar, çeşitli diş problemleri olan kişilere uzun vadeli bir çözüm sunar ve doğru bir şekilde bakım sağlandığında uzun ömürlü olur.
                            </Card.Text>
                            <Button variant="primary">Detaylı Bilgi</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className={`${styles.mainTedavi} col-12 col-sm-6 col-md-4`}>
                    <Card style={{ boxShadow: '0px 0px 5px darkblue',height: '500px' }}>
                        <Card.Img variant="top" src={zirkonyum2} />
                        <Card.Body>
                            <Card.Title className={`${styles.mainTedaviLabel}`}>Zirkonyum Porselen</Card.Title>
                            <Card.Text>
                                Zirkonyum porselen, diş kaplamaları ve protezler için kullanılan bir porselen türüdür. Diş estetiği ve restorasyonunda kullanılan bu malzeme, dayanıklılığı ve doğal görünümü nedeniyle popüler bir seçenektir.
                            </Card.Text>
                            <Button variant="primary">Detaylı Bilgi</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className={`${styles.mainTedavi} col-12 col-sm-6 col-md-4`}>
                    <Card style={{ boxShadow: '0px 0px 5px darkblue',height: '500px' }}>
                        <Card.Img variant="top" src={kanal} />
                        <Card.Body>
                            <Card.Title className={`${styles.mainTedaviLabel}`}>Kanal Tedavisi</Card.Title>
                            <Card.Text>
                                Kanal tedavisi, dişin iç kısmında bulunan pulp adı verilen yumuşak doku ve sinirlerin enfeksiyon veya hasar durumunda çıkarılarak, boşaltılan kanalın temizlenmesi, şekillendirilmesi ve doldurulması işlemidir.
                            </Card.Text>
                            <Button variant="primary">Detaylı Bilgi</Button>
                        </Card.Body>
                    </Card>
                </div>
                
                <div className={`${styles.mainTedavi} col-12 col-sm-6 col-md-4`}>
                    <Card style={{ boxShadow: '0px 0px 5px darkblue',marginTop:'20px',height: '500px' }}>
                        <Card.Img variant="top" src={gomuk} />
                        <Card.Body>
                            <Card.Title className={`${styles.mainTedaviLabel}`}>Çene Cerrahisi</Card.Title>
                            <Card.Text>
                                Çene cerrahisi, çene ve yüz bölgesindeki estetik veya sağlık sorunlarını tedavi etmek için yapılan cerrahi müdahaleleri kapsayan bir tıbbi disiplindir. 
                            </Card.Text>
                            <Button variant="primary">Detaylı Bilgi</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className={`${styles.mainTedavi} col-12 col-sm-6 col-md-4`}>
                    <Card style={{ boxShadow: '0px 0px 5px darkblue',marginTop:'20px',height: '500px' }}>
                        <Card.Img variant="top" src={dolgu} />
                        <Card.Body>
                            <Card.Title className={`${styles.mainTedaviLabel}`}>Estetik Dolgular</Card.Title>
                            <Card.Text>
                                Estetik diş dolguları, dişlerdeki çürükleri veya kırıkları onarmak ve diş rengini düzeltmek için kullanılan dolgu malzemeleridir. Daha estetik bir görünüm sağlarlar, çünkü diş rengiyle uyumlu olarak seçilen kompozit veya porselen malzemeler kullanılır.
                            </Card.Text>
                            <Button variant="primary">Detaylı Bilgi</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className={`${styles.mainTedavi} col-12 col-sm-6 col-md-4`}>
                    <Card style={{ boxShadow: '0px 0px 5px darkblue',marginTop:'20px',height: '500px'}}>
                        <Card.Img variant="top" src={greft} />
                        <Card.Body>
                            <Card.Title className={`${styles.mainTedaviLabel}`}>Greft & Kemik Tozu Uygulaması</Card.Title>
                            <Card.Text className='py-2'>
                                Greft ve kemik tozu uygulaması, dental implant veya dişeti tedavisi gibi bazı diş hekimliği prosedürlerinde kullanılan bir tedavi yöntemidir. Bu yöntem, eksik kemik dokusunu onarmak veya yeniden oluşturmak için kullanılır.
                            </Card.Text>
                            <Button variant="primary">Detaylı Bilgi</Button>
                        </Card.Body>
                    </Card>
                </div>


            </div>
        </div>

    )
}
export default TreatmentCard;
