import React from 'react'
import styles from './Home.module.scss';
import Slider from '../../Components/Slider/Slider';
import MainContent from '../../Components/MainContent/MainContent';
import TreatmentCard from '../../Components/TreatmentCard/TreatmentCard';


const Home=() => {
  return (
    <div>


      <Slider />
      <MainContent />
      <TreatmentCard />
      <h2>Randevu Formu</h2>


    </div>
  )
}

export default Home;

