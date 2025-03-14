import React from 'react'

export const SideBarCard = ({title , icon , func}) => {
  return (
    <div className='w-full h-[50px] flex items-center justify-start gap-3 cursor-pointer rounded-md bg-white duration-200 hover:bg-gray-100'>
        <img src={"https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-18-256.png"} alt="icon img" className='h-[25px] ml-2'/>
        <p className='text-md mt-1'>Search</p>
    </div>
  )
}
