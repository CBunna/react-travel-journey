import React from 'react'
import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'


function App() {
  return (
    
    <div className='flex justify-center bg-slate-50 max-w-3xl mx-auto'>
      <div className='bg-white'>
         <div className=''>
            <Header/>
            <Content/>
            <Footer/>
         </div>
      </div>       
    </div>
  )
}

export default App
