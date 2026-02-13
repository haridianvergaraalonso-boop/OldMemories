import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <BrowserRouter>
      <div className="app">         
        <main className="main">
          <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/fruits" element={<Fruits/>}/>
            <Route path="*" element={<Home/>}/>
          </Routes>
        </main>
        <Footer />              
      </div>
    </BrowserRouter>
  )
}

export default App