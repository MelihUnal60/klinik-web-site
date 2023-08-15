import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Appointment from "./pages/Appointment/Appointment"
import Contact from "./pages/Contact/Contact"
import Treatments from "./pages/Treatments/Treatments"
import Error from "./pages/Error/Error"
import Footer from './Components/Footer/Footer'
import Header from "./Components/Header/Header"
import SendRoentgen from "./pages/SendRoentgen/SendRoentgen"
import BeforeAfter from "./pages/BeforeAfter/BeforeAfter"
import Navbar from './Components/Nav/Naav'
import HealthTourismContent from "./Components/HealthTourismContent/HealthTourismContent"
import { SiWhatsapp } from 'react-icons/si'
import styles from './App.scss'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Toast stilini ekleyin

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


    </>
  );
}

export default App;
