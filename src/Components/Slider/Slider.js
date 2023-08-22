import React, { useState } from 'react';
import { Carousel,CarouselItem,CarouselItemProps } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import implant from '../../Assets/i1.jpeg';
import styles from './Slider.module.scss';
import bleatching from '../../Assets/bleatching2.jpg';
import zirkonyum from '../../Assets/zirkonyum3.jpg';
import plak from '../../Assets/splak1.jpg';
import smile from '../../Assets/gulslide.jpg';
import { Link } from 'react-router-dom';

function Slider() {

    const [activeIndex, setActiveIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setActiveIndex(selectedIndex);
    };

    const indicatorItems = Array(4).fill(null).map((_, index) => (
        <li
            key={index}
            className={index === activeIndex ? 'active' : ''}
            onClick={() => handleSelect(index)}
        />
    ));


    return (
        <Carousel ride="carousel" interval={false} wrap={true} prevIcon={false} aria-colcount={4} indicators={false} nextIcon={false} aria-controls='false' className={`carousel-slide ${styles.slider}`}>
            <Carousel.Item interval={3000}>
                <img src={zirkonyum} className="d-block w-100 simg" alt="Zirkonyum diş uygulamaları" />
                <Carousel.Caption className=" d-md-block">
                    <h5 className={`${styles.labels2}`}>DOĞAL ZİRKONYUM</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img src={implant} className="d-block w-100 simg" alt="Dental implant uygulamaları" />
                <Carousel.Caption className=" d-md-block">
                    <h5 className={`${styles.labels2}`}>DENTAL İMPLANT İLE GENÇLEŞİN</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img src={smile} className={`d-block w-100 ${styles.carouselImg2}`} alt="Gülüş tasarım uygulamaları" />
                <Carousel.Caption className=" d-md-block">
                    <h5 className={`${styles.labels}`}>GÜLÜŞÜNÜZÜ YENİDEN TASARLAYALIM</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img src={bleatching} className="d-block w-100" alt="Diş beyazlatma uygulamaları" />
                <Carousel.Caption className=" d-md-block">
                    <h5 className={`${styles.labels}`}>BLEACHİNG DİŞ BEYAZLATMA</h5>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img src={plak} className={`d-block w-100 ${styles.carouselImg}`} alt="Diş beyazlatma uygulamaları" />
                <Carousel.Caption className=" d-md-block">
                    <h5 className={`${styles.labels2}`}>ŞEFFAF PLAKLAR</h5>
                </Carousel.Caption>
            </Carousel.Item>


            <div className={` ${styles.carouselIndicators2}`}>
                <ul>
                    <li className={`${styles.btnLi}`}><button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className={`active  ${styles.btnSlider}`} aria-current="true" aria-label="Slide 1">01</button></li>
                    <li className={`${styles.btnLi}`}><button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" className={` ${styles.btnSlider}`} aria-label="Slide 2">02</button></li>
                    <li className={`${styles.btnLi}`}><button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" className={` ${styles.btnSlider}`} aria-label="Slide 3">03</button></li>
                    <li className={`${styles.btnLi}`}><button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" className={` ${styles.btnSlider}`} aria-label="Slide 4">04</button></li>
                    <li className={`${styles.btnLi}`}><button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" className={` ${styles.btnSlider}`} aria-label="Slide 5">05</button></li>
                </ul>
                
            </div>


        </Carousel>
    );
}

export default Slider;
