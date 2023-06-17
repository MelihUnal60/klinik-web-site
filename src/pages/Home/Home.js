import React from 'react'
import styles from './Home.module.scss';
import Slider from '../../Components/Slider/Slider';
import MainContent from '../../Components/MainContent/MainContent';
import TreatmentCard from '../../Components/TreatmentCard/TreatmentCard';
import AppointmentForm from '../../Components/AppointmentForm/AppointmentForm';
import bgimg from '../../Assets/logo4.png';
import Helper from '../../Components/Helper/Helper';


const Home=() => {
  return (
    <div>
      
      <Slider />
      <Helper />
      <MainContent />
      <TreatmentCard />
      <AppointmentForm />


    </div>
  )
}

export default Home;

