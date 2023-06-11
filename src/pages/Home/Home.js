import React from 'react'
import styles from './Home.module.scss';
import Slider from '../../Components/Slider/Slider';
import MainContent from '../../Components/MainContent/MainContent';


const Home=() => {
  return (
    <div>


      <Slider />
      <MainContent />
      <h2>Tedaviler</h2>
      <h2>Randevu Formu</h2>


    </div>
  )
}

export default Home;

