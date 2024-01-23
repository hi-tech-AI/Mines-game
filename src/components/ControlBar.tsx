import { useState } from "react"
import { useGameParams } from "../store"

const MinesButton = ({ curItem }: { curItem: number }) => {
    const gameParams = useGameParams()
    return (
        <div className="px-4 py-1 w-full">
            <button onClick={() => gameParams.setParams(prev => ({ ...prev, mineCount: curItem }))} className={`w-full text-center ${curItem === gameParams.params.mineCount ? "bg-[#0267a5]" : "bg-[#094164] hover:bg-blue-700/50"} border border-black/80 rounded-full p-[2px] font-semibold`}>{curItem}</button>
        </div>
    )
}
const ControlBar = () => {
    const gameParams = useGameParams()
    const [open, setOpen] = useState(false)
    return (
        <div className='flex flex-col justify-center items-center w-full gap-1 py-1'>
            <div className='flex justify-between items-center w-full rounded-full bg-black/30 p-[1px]'>
                <div onClick={() => setOpen(prev => !prev)} className='flex items-center relative w-[150px] h-[24px] rounded-full px-2 bg-[#0267a5] border border-black/50 text-white shadow-[inset_1px_1px_#fff1cd33] text-xs hover:bg-opacity-20 cursor-pointer'>
                    <p className='w-full'>Mines: {gameParams.params.mineCount}</p>
                    <svg className='w-[8px] h-[5px]'><use href="#svg-arrow-down" /></svg>
                    <div className={`${open ? "" : "hidden"} justify-center items-center gap-2 absolute top-[26px] left-0 w-full h-40 overflow-y-auto bg-[#032e49] rounded-md py-1`}>
                        {Array.from({ length: 20 }, (_, i) => i + 1).map((item, i) => <MinesButton key={i} curItem={item} />)}
                    </div>
                </div>
                <div className='flex items-center gap-2 h-full bg-[#ffc107] text-black text-sm font-semibold px-4 rounded-full'>
                    Next: 0.33 USD
                </div>
            </div>
            <div className='w-[99%] mx-auto h-1 bg-black/20' />
        </div>
    )
}
export default ControlBar