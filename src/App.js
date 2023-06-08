import {Route, Routes} from "react-router-dom"
import Home from "./Pages/Home/Home"
import About from "./Pages/About/About"
import Appointment from "./Pages/Appointment/Appointment"
import Contact from "./Pages/Contact/Contact"
import Treatments from "./Pages/Treatments/Treatments"
import Error from "./Pages/Error/Error"
import Naav from "./Components/Nav/Naav"
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
      <div className="App">
        <Naav />
        <div className="Main">
          <Routes>
            <Route path = "/" element={<Home />} />
            <Route path = "/about" element={<About />} />
            <Route path = "/appointment" element={<Appointment />} />
            <Route path = "/contact" element={<Contact />} />
            <Route path = "/treatments" element={<Treatments />} />
            <Route path = "/*" element={<Error />} />

          </Routes>
        </div>
        <Footer />
      </div>
    
    </>
  );
}

export default App;
