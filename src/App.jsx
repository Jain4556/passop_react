

import Footer from './components/Footer'
import Manager from './components/Manager'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  

  return (
    <>
    <Navbar/>
    <div className="w-screen animated-background h-screen bg-gradient-to-r from-green-300 via-blue-300 to-pink-300" >
    <Manager/>
    </div>

    <Footer/>
    </>
  )
}

export default App
