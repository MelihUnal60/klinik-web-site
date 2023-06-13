import React from 'react'
import styles from './Home.module.scss';
import Slider from '../../Components/Slider/Slider';
import MainContent from '../../Components/MainContent/MainContent';
import TreatmentCard from '../../Components/TreatmentCard/TreatmentCard';
import AppointmentForm from '../../Components/AppointmentForm/AppointmentForm';


const Home=() => {
  return (
    <div>


      <Slider />
      <MainContent />
      <TreatmentCard />
      <AppointmentForm />


    </div>
  )
}

export default Home;

