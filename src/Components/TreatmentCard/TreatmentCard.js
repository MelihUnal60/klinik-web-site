import React from 'react'
import styles from './TreatmentCard.module.scss'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import implant from'../../Assets/implanthome.jpg';
import bleactching from '../../Assets/gulus2.jpg';
import kanal from '../../Assets/kanal.jpeg';
import cerrahi from '../../Assets/cerrahi4.jpeg';


function TreatmentCard() {
    return (
        <>
            <div className={styles.tedaviBaslik}>TEDAVİLER</div>
            <div className={styles.mainTedavi}>
                <div className='container d-flex mt-5'>
                    <Card style={{ width: '22rem' }}>
                        <Card.Img variant="top" src={implant} />
                        <Card.Body>
                            <Card.Title >Dental İmplant</Card.Title>
                            <Card.Text>
                            Diş implantları, bir diş veya birkaç diş eksikliği olan hastalarda kullanılabilir. İmplantlar, çeşitli diş problemleri olan kişilere uzun vadeli bir çözüm sunar ve doğru bir şekilde bakım sağlandığında uzun ömürlü olur.
                            </Card.Text>
                            <Button variant="primary">Detaylı Bilgi</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '22rem',marginLeft: '20px' }}>
                        <Card.Img variant="top" src={cerrahi} />
                        <Card.Body>
                            <Card.Title >Çene Cerrahisi</Card.Title>
                            <Card.Text>
                            Diş implantları, bir diş veya birkaç diş eksikliği olan hastalarda kullanılabilir. İmplantlar, çeşitli diş problemleri olan kişilere uzun vadeli bir çözüm sunar ve doğru bir şekilde bakım sağlandığında uzun ömürlü olur.
                            </Card.Text>
                            <Button variant="primary">Detaylı Bilgi</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '22rem',marginLeft: '20px' }}>
                        <Card.Img variant="top" src={kanal} />
                        <Card.Body>
                            <Card.Title >Kanal Tedavisi</Card.Title>
                            <Card.Text>
                            Diş implantları, bir diş veya birkaç diş eksikliği olan hastalarda kullanılabilir. İmplantlar, çeşitli diş problemleri olan kişilere uzun vadeli bir çözüm sunar ve doğru bir şekilde bakım sağlandığında uzun ömürlü olur.
                            </Card.Text>
                            <Button variant="primary">Detaylı Bilgi</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '22rem',marginLeft: '20px' }}>
                        <Card.Img variant="top" src={bleactching} />
                        <Card.Body>
                            <Card.Title >Bleaching</Card.Title>
                            <Card.Text>
                            Diş implantları, bir diş veya birkaç diş eksikliği olan hastalarda kullanılabilir. İmplantlar, çeşitli diş problemleri olan kişilere uzun vadeli bir çözüm sunar ve doğru bir şekilde bakım sağlandığında uzun ömürlü olur.
                            </Card.Text>
                            <Button variant="primary">Detaylı Bilgi</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>

        </>
    )
}
export default TreatmentCard;
