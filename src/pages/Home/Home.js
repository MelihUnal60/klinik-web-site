import React from 'react'
import styles from './Home.module.scss';
import Slider from '../../Components/Slider/Slider';
import MainContent from '../../Components/MainContent/MainContent';
import TreatmentCard from '../../Components/TreatmentCard/TreatmentCard';
import AppointmentForm from '../../Components/AppointmentForm/AppointmentForm';
import Helper from '../../Components/Helper/Helper';
import AboutOwner from '../../Components/AboutOwner/AboutOwner';


const Home=() => {
  return (
    <div>    
      <Slider /> 
      <Helper />
      <MainContent /> 
      <hr className='m-0 p-0'></hr>
      <TreatmentCard />
      <AppointmentForm />
      <AboutOwner />
    </div>
  );
}

export default Home;

