import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Appointment from "./pages/Appointment/Appointment"
import Contact from "./pages/Contact/Contact"
import Treatments from "./pages/Treatments/Treatments"
import Footer from './Components/Footer/Footer'
import Header from "./Components/Header/Header"
import SendRoentgen from "./pages/SendRoentgen/SendRoentgen"
import BeforeAfter from "./pages/BeforeAfter/BeforeAfter"
import Navbar from './Components/Nav/Naav'
import HealthTourismContent from "./Components/HealthTourismContent/HealthTourismContent"
import { SiWhatsapp } from 'react-icons/si'
import styles from './App.scss' //whatsapp fixed logo
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Toast stilini ekleyin
import './Components/Nav/Naav.module.scss';
import AestheticBonding from './pages/Treatments/AestheticBonding/AestheticBonding';
import ChinSurgery from "./pages/Treatments/ChinSurgery/ChinSurgery";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Implant from "./pages/Treatments/Implant/Implant";
import 'bootstrap/dist/css/bootstrap.min.css';
import RootCanal from "./pages/Treatments/RootCanal/RootCanal";
import ZirconiumPorcelain from "./pages/Treatments/ZirconiumPorcelain/ZirconiumPorcelain";
import PorcelainLaminate from "./pages/Treatments/PorcelainLaminate/PorcelainLaminate"
import Bruksizm from "./pages/Treatments/Bruksizm/Bruksizm"
import Greft from "./pages/Treatments/Greft/Greft"



function App() {
  return (
    <>
      <div className="App">
      
        <Header />
        <Navbar />


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beforeafter" element={<BeforeAfter />} />
          <Route path="/about" element={<About />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/healthtourism" element={<HealthTourismContent />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/sendroentgen" element={<SendRoentgen />} />
          <Route path="/aestheticbonding" element={<AestheticBonding />} />
          <Route path="/chinsurgery" element={<ChinSurgery />} />
          <Route path="/implant" element={<Implant />} />
          <Route path="/rootcanal" element={<RootCanal />} />
          <Route path="/zirconiumporcelain" element={<ZirconiumPorcelain />} />
          <Route path="/porcelainlaminate" element={<PorcelainLaminate />} />
          <Route path="/bruksizm" element={<Bruksizm />} />
          <Route path="/greft" element={<Greft />} />


        </Routes>
        <a
          href="https://wa.me/905435288364"
          className="whatsapp_float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiWhatsapp />
        </a>
        <Footer />
      </div>

      <ToastContainer />
      
    </>
  );
}

export default App;
