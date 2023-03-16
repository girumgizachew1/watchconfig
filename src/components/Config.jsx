import React from 'react'
import { bandcolors, useCustomization } from '../context/custumization'

function Config() {
    const { material, setMaterial, bandcolor , setBandcolor } = useCustomization();
    console.log(material);
  return (
    <div className=' w-full md:w-[85vh] h-[85vh] bg-gray-200 rounded-2xl shadow-zinc-200 '>
        <div className='p-4 space-y-2'>
            <h1>Band</h1>    
            <div className='grid grid-cols-3 gap-2 text-black text-xs mx-auto'>
                <button className='bg-gray-400 px-2 py-1 rounded-3xl text-white ' onClick={() => setMaterial('sololoop')} >Solo Loop</button>
                <button className='bg-gray-400 px-2 py-1 rounded-3xl text-white ' onClick={() => setMaterial('stripeleather')} >Stripe Leather</button>
                <button className='bg-gray-400 px-2 py-1 rounded-3xl text-white ' onClick={() => setMaterial('normalleather')} >Normal Leather</button>
                <button className='bg-gray-400 px-2 py-1 rounded-3xl text-white ' onClick={() => setMaterial('weaveleather')} >Weave Leather</button>
                <button className='bg-gray-400 px-2 py-1 rounded-3xl text-white ' onClick={() => setMaterial('weavemetal')} >Weave Metal</button>
                <button className='bg-gray-400 px-2 py-1 rounded-3xl text-white ' onClick={() => setMaterial('metal')} >Metal</button>
            </div>
            <div className='flex flex-col' >
                <h1 className='text-sm' >color</h1>
                <div className='grid grid-cols-5 gap-6 mx-auto ' style={{ fontFamily: 'Source Sans Pro' }}>
                    {bandcolors.map((item, index) => (
                        <div
                        key={index}
                        className=""
                        onClick={() => setBandcolor(item)}
                        >   
                        <div className='w-7 border-gray-300 shadow-lg border h-7 rounded-full' style={{ backgroundColor: item.color }} />
                        
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Config