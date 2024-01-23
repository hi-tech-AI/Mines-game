import { useState } from 'react'
import './App.css'
import SwitchButton from './components/SwitchButton'
import Layout from './layout'
import PIXIComponent from './components/PIXIComponent'
import ControlBar from './components/ControlBar'
import StoreProvider from './store'

function App() {

  const [checked, setChecked] = useState(false)
  return (
    <StoreProvider>
      <Layout>
        <div className='flex flex-col gap-1 justify-between items-center max-w-[430px] mx-auto w-full h-full py-1'>
          <ControlBar />
          <PIXIComponent />
          <div className='flex w-full justify-between items-center gap-2'>
            <button className='w-full rounded-full px-2 bg-[#0267a5] border border-black/50 text-white shadow-[inset_1px_1px_#fff1cd33] p-1 text-sm uppercase text-center hover:bg-opacity-20'>
              Random
            </button>
            <div className='flex justify-center items-center gap-2 w-full h-full bg-black/30 text-white rounded-full text-xs relative'>
              <svg className='w-[22px] h-[18px] absolute left-2'><use href="#svg-refresh" /></svg>
              <SwitchButton checked={checked} onChange={() => setChecked(prev => !prev)} disabled={false} />
              <span>Auto Game</span>
            </div>
          </div>
        </div>
      </Layout>
    </StoreProvider>
  )
}

export default App
