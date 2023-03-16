import { Canvas } from '@react-three/fiber'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Experience from './components/Experience'
import Navbar from './components/navbar'
import Config from './components/Config'
import Configr from './components/Config2'

import { CustomizationProvider } from './context/custumization' 
function App() {

  return (
    <CustomizationProvider>
      
      <div className="bg-white w-full h-screen flex-row">
            <div className='h-20 w-full bg-white' >
              <Navbar/>
            </div>
            <div className='flex flex-col md:flex-row w-full h-full px-10' >
            <Config/>
              <Canvas>
                <color attach='background' args={['#fff']}/>
                <fog attach='fog' args={['#fff' ,10 ,20]}/>
                <Experience/>
              </Canvas>
              <Configr/>
            </div>
      </div>
      </CustomizationProvider>
  )
}

export default App
