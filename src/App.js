import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Appointment from "./pages/Appointment/Appointment"
import Contact from "./pages/Contact/Contact"
import Treatments from "./pages/Treatments/Treatments"
import Error from "./pages/Error/Error"

function App() {
  return (
    <>
      <div className="App">
        {/* navbar */}
        <div className="Main">
          <Routes>
            <Route path = "/" element={<Home />} />
            <Route path = "/about" element={<About />} />
            <Route path = "/appointment" element={<Appointment />} />
            <Route path = "/contact" element={<Contact />} />
            <Route path = "/treatments" element={<Treatments />} />
            <Route path = "/error" element={<Error />} />

          </Routes>
        </div>
        {/* footer */}
      </div>
    
    </>
  );
}

export default App;
