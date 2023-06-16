import React from 'react'
import { Carousel } from 'react-bootstrap'
import implant from '../../Assets/i1.jpeg'
import smile1 from '../../Assets/smile1.jpg'
import styles from './Slider.module.scss'
import bleatching from '../../Assets/bleatching2.jpg'
import zirkonyum from '../../Assets/zirkonyum3.jpg'



function Slider ()  {
  return (
    <div className={styles.slider}>
       <Carousel slide={false}>
      <Carousel.Item>
        <img
          className={styles.simg}
          src={zirkonyum}
          alt="First slide"
        />
        <Carousel.Caption>

          <h1 className={styles.labels}>DOĞAL ZİRKONYUM</h1>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={styles.simg}
          src={implant}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className={styles.labels}>DENTAL İMPLANT İLE GENÇLEŞİN</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={styles.simg}
          src={smile1}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className={styles.labels}>GÜLÜŞÜNÜZÜ YENİDEN TASARLAYALIM</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={styles.simg}
          src={bleatching}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className={styles.labels}>BLEACHİNG DİŞ BEYAZLATMA</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Slider;