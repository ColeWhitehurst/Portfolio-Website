import { Route, Routes } from 'react-router-dom'; 
import LandingPage from './Pages/LandingPage';
import ParticlesBackground from './Components/ParticlesBackground';
import Navbar from './Components/Navbar';
import Projects from './Pages/Projects';
import SingleProject from './Pages/SingleProject';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import './App.css'

function App() {
  return (
    <>
    <ParticlesBackground />
    <Navbar />
     <Routes>
      <Route path='/' element={<LandingPage />} ></Route>
      <Route path='/projects' element={<Projects />} />
      <Route path='/projects/:id' element={<SingleProject />} />
      <Route path='/contact' element={<Contact />} />
     </Routes>
     <div>
      <Footer />
     </div>
    </>
  )
}

export default App;