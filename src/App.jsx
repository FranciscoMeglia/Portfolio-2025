import './App.css'
import { Sidebar } from './components/sidebar/Sidebar'
import test from './assets/test.jpg'
import { HistoryCard } from './components/historycard/HistoryCard'
import { PostsContent } from './components/postsContent/PostsContent'

function App() {

  return (
    <div className="w-screen h-auto pb-15 flex">
      <div className='w-[330px]'>
      <Sidebar/>
      </div>
      <div className='w-full flex flex-col items-center justify-start'>
        <div className='w-[1000px] h-auto border-b pb-15 border-b-gray-300'>
          {/* PROFILE IMG AND INFO */}
          <div className='w-full h-auto mt-12 flex items-center justify-center'>
            <div className='w-[30%] h-full flex items-center justify-center'>
              <img className='rounded-full h-[160px]' src={test} alt="" />
            </div>
            <div className='w-[70%] h-full flex items-start justify-start flex-col'>
              <div className='w-auto h-full flex items-center justify-start flex-col'>
                  <div className='w-full h-auto flex items-center justify-start gap-2'>
                    <p className='text-black text-lg'>Francisco Meglia</p>
                    <button className='bg-blue-500 text-white py-1 px-2 ml-4 rounded-lg'>Linkedin</button>
                    <button className='bg-gray-200 p-1 rounded-md'>IC0</button>
                    <button>IC1</button>
                  </div>
                  <div className='w-full h-[70px] flex items-center justify-between'>
                    <div className='flex gap-1'>
                      <span className=' font-semibold'>7</span>
                      <p className=' text-gray-400'>projects</p>
                    </div>
                    <div className='flex gap-1'>
                      <span className=' font-semibold'>2</span>
                      <p className=' text-gray-400'>experience</p>
                    </div>
                    <div className='flex gap-1'>
                      <span className=' font-semibold'>20</span>
                      <p className=' text-gray-400'>years old</p>
                    </div>
                  </div>
                  <div className='w-full h-auto mt-2'>
                    <p className='font-semibold text-md'>Francisco Meglia</p>
                    <p>RC Helicopter Pilot</p>
                    <p>Hola aca estoy</p>
                    <p className='mt-3 text-[12px]'>Followed by <span className=' font-bold'>Google</span>, <span>javiermilei</span> + 9 more</p>
                  </div>
              </div>
            </div>
          </div>
          {/* PROFILE IMG AND INFO */}
          <div className='w-full h-auto mt-12 flex items-center justify-start gap-15'>
            <HistoryCard/>
            <HistoryCard/>
            <HistoryCard/>
            <HistoryCard/>
          </div>
        </div>
        <div className='w-[1000px] h-auto'>
          <PostsContent/>
          <div className='w-full h-auto mt-6 flex items-center justify-center flex-wrap gap-4 text-[12px] text-gray-500'>
            <p>Meta</p>
            <p>About</p>
            <p>Blog</p>
            <p>Jobs</p>
            <p>Help</p>
            <p>API</p>
            <p>Privacy</p>
            <p>Terms</p>
            <p>Locations</p>
            <p>Instagram Lite</p>
            <p>Threads</p>
            <p>Contat Uploading & Non-Users</p>
            <p>Meta Verified</p>
          </div>
          <div className='w-full h-auto mt-4 flex items-center justify-center gap-4 text-[12px] text-gray-500'>
            <p>English</p>
            <p>@ 2025 Instagram from Meta</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
