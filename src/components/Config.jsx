import React from 'react'
import { bandcolors, useCustomization } from '../context/custumization'

function Config() {
    const { material, setMaterial, bandcolor , setBandcolor } = useCustomization();
    console.log(material);
  return (
    <div className='w-[85vh] h-[85vh] bg-gray-200 rounded-2xl shadow-zinc-200 '>
        <div className='p-4 space-y-2'>
            <h1>Band</h1>    
            <div className='flex flex-row text-xs space-x-2' >
                <button className='bg-gray-300 px-2 py-1 rounded-3xl text-white ' onClick={() => setMaterial('sololoop')} >Solo Loop</button>
                <button className='bg-gray-300 px-2 py-1 rounded-3xl text-white ' onClick={() => setMaterial('leather')} >Leather</button>
            </div>
            <div className='flex flex-col' >
                <h1 className='text-sm' >color</h1>
                <div className='flex flex-row space-x-4 '>
                    {bandcolors.map((item, index) => (
                        <div
                        key={index}
                        className=""
                        onClick={() => setBandcolor(item)}
                        >   
                        <div className='w-7 border-gray-300 shadow-lg border h-7 rounded-full' style={{ backgroundColor: item.color }} />
                        <div className='text-gray-700 text-xs'>
                            {item.name}
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Config