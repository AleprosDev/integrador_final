import React from 'react';
import { ReactComponent as LoadingRing } from '../assets/favicon/loading_ring.svg'

function Loading() {
  return (
    <div className='flex justify-center items-center dark:text-gray-600 fill-blue-600'>

        <LoadingRing/>

            <span className='ml-12 animate-ping opacity-75'>Loading...</span>
    </div>
  )
}

export default Loading