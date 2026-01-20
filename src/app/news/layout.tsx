import React, { ReactNode } from 'react'

const layout = ({children} : {children : ReactNode}) => {
  return (
    <div className='flex justify-between'>
        <div className='flex-1'>
            {children}
        </div>
        <div className='w-64 p-2 border'>
            sidebar
        </div>
    </div>
  )
}

export default layout