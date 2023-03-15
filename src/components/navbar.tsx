import React from 'react'
import Image from 'next/image'
function navbar() {
  return (
    <div className='flex flex-row justify-between w-full px-14 z-50 py-6 font-serif font-extralight' style={{ fontFamily: 'Source Sans Pro' }}>
        <div className='flex flex-row space-x-2 font-serif font-extralight' >
          <svg className='mt-2' xmlns="http://www.w3.org/2000/svg" width="12.42" height="12.42" viewBox="0 0 12.42 12.42"><path d="M14.21,8a6.21,6.21,0,1,0,6.21,6.21A6.209,6.209,0,0,0,14.21,8Zm2.316,7.838h0l-.5.626a.4.4,0,0,1-.563.063h0l-1.678-1.245a1,1,0,0,1-.376-.782V10.6a.4.4,0,0,1,.4-.4h.8a.4.4,0,0,1,.4.4V14.21l1.452,1.064A.4.4,0,0,1,16.526,15.838Z" transform="translate(-8 -8)"/></svg>
          <a  className='Source Sans Pro text-black mt-1 font-bold' style={{ fontFamily: 'Source Sans Pro' }}>Watch Pro Series</a>
   </div>
        <div className='flex flex-row space-x-2' >
            <button className='text-sm bg-zinc-900 text-white px-3 py-2 rounded-sm font-serif font-extralight hover:bg-zinc-700 hover:text-white transition-colors duration-300 rounded-4xl' style={{ fontFamily: 'Source Sans Pro' }}>Buy now</button>
        </div>

    </div>
  )
}

export default navbar