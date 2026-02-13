import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import Gallery from "./pages/gallery/Gallery";
import History from "./pages/history/History";


function App() {
  return (
    <BrowserRouter>
      <div className="app">         
        <main className="main">
          <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/gallery" element={<Gallery/>}/> 
            <Route path="/history" element={<Home />} />          
            <Route path="*" element={<Home/>}/>
          </Routes>
        </main>
        <Footer />              
      </div>
    </BrowserRouter>
  )
}

export default App