import React from 'react'

export const HistoryCard = () => {
  return (
    <div className='w-auto h-auto flex items-center justify-center flex-col gap-4'>
        <div className='w-[90px] h-[90px] flex items-center justify-center rounded-full border border-gray-300'>
            <div className='w-[80px] h-[80px] rounded-full bg-amber-100'>
            </div>
        </div>
        <p className='text-[12px] font-semibold'>Testing History</p>
    </div>
  )
}
