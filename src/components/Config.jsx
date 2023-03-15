import React from 'react'
import { useCustomization } from '../context/custumization'

function Config() {
    const { material, setMaterial } = useCustomization();
    console.log(material);
  return (
    <div className='w-[85vh] h-[85vh] bg-gray-200 rounded-2xl shadow-zinc-200 '>
        <div className='p-4 space-y-2'>
            <h1>Band</h1>    
            <div className='flex flex-row text-xs space-x-2' >
                <button className='bg-gray-300 px-2 py-1 rounded-3xl text-white ' onClick={() => setMaterial('sololoop')} >Solo Loop</button>
                <button className='bg-gray-300 px-2 py-1 rounded-3xl text-white ' onClick={() => setMaterial('leather')} >Leather</button>
            </div>
        </div>
    </div>
  )
}

export default Config