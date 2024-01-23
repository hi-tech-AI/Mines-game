const Header = () => {
    return (
        <div className='w-full p-[2px] absolute max-lg:bottom-0 lg:top-0 left-0'>
            <div className='flex justify-between items-center w-full rounded-full lg:bg-black/30 p-1'>
                <div className='flex gap-4 items-center'>
                    <button className='flex items-center w-[130px] h-[24px] rounded-full px-2 bg-[#0267a5] border border-black/50 text-white shadow-[inset_1px_1px_#fff1cd33] text-xs hover:bg-opacity-20'>
                        <p className='w-full uppercase'>Mines</p>
                        <svg className='w-[8px] h-[5px] rotate-180 lg:rotate-0'><use href="#svg-arrow-down" /></svg>
                    </button>
                    <button className='flex items-center rounded-full px-1 text-xs lg:w-[140px] h-[24px] font-semibold' style={{ background: "linear-gradient(to bottom,#f9a119,#f38410)" }}>
                        <svg width={16} height={16}><use href="#svg-question" /></svg>
                        <p className='grow-[20] hidden lg:block'>How to Play?</p>
                    </button>
                </div>
                <div className='flex items-center gap-2 text-white text-xs font-semibold'>
                    <p>3000.00 <span className='text-white/70'>USD</span></p>
                    <button className='flex justify-center items-center w-[24px] h-[24px] rounded-full bg-[#0267a5] border border-black/50 text-white shadow-[inset_1px_1px_#fff1cd33] text-xs hover:bg-opacity-20'>
                        <svg className='w-[10px] h-[7px]'><use href="#svg-three-bar" /></svg>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Header