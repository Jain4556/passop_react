import React from 'react'
import PropTypes from 'prop-types'

const Navbar = props => {
  return (
    <nav className='bg-slate-800 text-white'>
      <div className="mycontainer flex justify-between items-center px-4 py-4 h-14">

      <div className="logo font-bold text-white text-2xl">
      <span className='text-green-700'> &lt;</span>
        
      <span>Pass</span>  
      <span className='text-green-700'>OP/&gt;</span>
       
        </div>
      {/* <ul>
        <li className='flex gap-4'>
          <a className='hover:font-bold' href="/">Home</a>
          <a className='hover:font-bold' href="#">About</a>
          <a className='hover:font-bold' href="#">Contact</a>
        </li>
      </ul> */}
      <div>
        <button className='text-white bg-green-700 my-5 rounded-full flex justify-center items-center ring-white ring-1'>
        <img className='invert w-10 py-1' src="icons/github.svg" alt="github logo" />
       <span className='font-bold px-2'>Github</span>
      </button>
      </div>

      </div>
    </nav>
  )
}

Navbar.propTypes = {}

export default Navbar