
import Footer from './components/Footer'
import Manager from './components/Manager'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  

  return (
    <>
    <Navbar/>
    <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
   
    <Manager/>
    </div>

    <Footer/>
    </>
  )
}

export default App
