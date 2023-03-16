import React from 'react'
import { roundcolors, useCustomization } from '../context/custumization'

function Configr() {
    const { material, setMaterial, roundcolor , setRoundcolor } = useCustomization();
    console.log(material);
  return (
    <div className=' w-full md:w-[85vh] h-[85vh] bg-gray-200 rounded-2xl shadow-zinc-200 '>
        <div className='p-4 space-y-2'>
            <h1>Round</h1>    
            <div className='grid grid-cols-3 gap-2 text-black text-xs'>
                <button className='bg-gray-400 px-2 py-1 rounded-3xl text-white ' onClick={() => setMaterial('sololoop')} >Solo Loop</button>
                <button className='bg-gray-400 px-2 py-1 rounded-3xl text-white ' onClick={() => setMaterial('weavemetal')} >Weave Metal</button>
                <button className='bg-gray-400 px-2 py-1 rounded-3xl text-white ' onClick={() => setMaterial('metal')} >Metal</button>
            </div>
            <div className='flex flex-col' >
                <h1 className='text-sm' >color</h1>
                <div className='grid grid-cols-5 gap-3 ' style={{ fontFamily: 'Source Sans Pro' }}>
                    {roundcolors.map((item, index) => (
                        <div
                        key={index}
                        className=""
                        onClick={() => setRoundcolor(item)}
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

export default Configr