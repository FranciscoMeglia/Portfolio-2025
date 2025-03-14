import React from 'react'
import { PostCard } from '../postCard/PostCard'

export const PostsContent = () => {
  return (
    <div className='w-full h-auto'>
        <div className='w-full h-[50px] flex items-center justify-center'>
            <div className='w-auto h-full flex items-center justify-center border-t'>
                <img src="" alt="" />
                <p className='text-sm font-semibold'>PROJECTS</p>
            </div>
        </div>
        <div className='w-full h-auto flex items-center justify-between flex-wrap gap-y-1.5'>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
        </div>
    </div>
  )
}
