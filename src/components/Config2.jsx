import React from 'react'
import { roundcolors, useCustomization } from '../context/custumization'

function Configr() {
    // <div className='text-gray-700 px-1 mt-1 text-xs'>
   // {item.name.split(' ')[0]}
 //   </div>
    const { roundmaterial, setRoundmaterial, roundcolor , setRoundcolor } = useCustomization();
  return (
    <div className=' w-full md:w-[85vh] h-[85vh] bg-gray-200 rounded-2xl shadow-zinc-200 '>
        <div className='p-4 space-y-2'>
            <h1 className='text-sm' style={{ fontFamily: 'Source Sans Pro' }} >Round</h1>    
            <div className='grid grid-cols-3 gap-2 text-black text-xs mx-auto'>
                <button className={`${roundmaterial === 'sololoop' ? 'bg-cyan-600' : 'bg-zinc-600'} px-1 py-2 rounded-3xl text-white`} onClick={() => setRoundmaterial('sololoop')} >Solo Loop</button>
                <button className={`${roundmaterial === 'weavemetal' ? 'bg-cyan-600' : 'bg-zinc-600'} px-1 py-2 rounded-3xl text-white`} onClick={() => setRoundmaterial('weavemetal')} >Weave Metal</button>
                <button className={`${roundmaterial === 'metal' ? 'bg-cyan-600' : 'bg-zinc-600'} px-1 py-2 rounded-3xl text-white`} onClick={() => setRoundmaterial('metal')} >Metal</button>
            </div>
            <div className='flex flex-col' >
                <h1 className='text-sm' >color</h1>
                <div className='grid grid-cols-5 gap-6 mx-auto ' style={{ fontFamily: 'Source Sans Pro' }}>
                    {roundcolors.map((item, index) => (
                        <div
                        key={index}
                        className=""
                        onClick={() => setRoundcolor(item)}
                        >                          
                         <div className={`${item.color === roundcolor.color ? 'border-cyan-600 w-8 h-8' : 'border-gray-300 w-7 h-7'}   shadow-lg border-2  rounded-full`} style={{ backgroundColor: item.color }} />

                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Configr