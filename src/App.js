import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home/Home"
import About from "./pages/About/About"

function App() {
  return (
    <>
      <div className="App">
        {/* navbar */}
        <div className="Main">
          <Routes>
            <Route path = "/" element={<Home />} />
            <Route path = "" element={<Home />} />
          </Routes>
        </div>
        {/* footer */}
      </div>
    
    </>
  );
}

export default App;
