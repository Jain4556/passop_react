
import './App.css'
import Footer from './assets/components/Footer'
import Manager from './assets/components/Manager'
import Navbar from './assets/components/Navbar'

function App() {
  

  return (
    <>
    <Navbar/>
    <div className='bg-green-100 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]'>
    <Manager/>
    </div>

    <Footer/>
    </>
  )
}

export default App