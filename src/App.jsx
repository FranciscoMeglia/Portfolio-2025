import './App.css'
import { Sidebar } from './components/sidebar/Sidebar'
import test from './assets/test.jpg'

function App() {

  return (
    <div className="w-screen h-[2000px] flex">
      <div className='w-[330px]'>
      <Sidebar/>
      </div>
      <div className='w-full flex flex-col items-center justify-start'>
        <div className='w-[1000px] h-[500px] border-b border-b-gray-300'>
          <div className='w-full h-[250px] mt-12 flex items-center justify-center bg-amber-200'>
            <div className='w-[30%] h-full flex items-center justify-center bg-amber-600'>
              <img className='rounded-full' src={test} alt="" />

            </div>
            <div className='w-[70%] h-full bg-blue-300'>

            </div>
          </div>
        </div>
        <div className='w-[1000px] h-[400px] border-b border-b-gray-300'>

        </div>
      </div>
    </div>
  )
}

export default App
