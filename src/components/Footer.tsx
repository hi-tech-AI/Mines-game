import { genMinesValBoard, getMineItem } from "../utils";
import { Sprite } from "pixi.js";
import { appStage } from "../render/renderer";
import { useGameParams } from "../store";

const openMinesBoard = (minesBoard: { mineItem: Sprite; openMine: () => void; }[][]) => {
    minesBoard.forEach(row => row.forEach(elem => elem.openMine()))
}
const Footer = () => {
    const { params: { mineCount } } = useGameParams()
    const handleBet = async () => {
        appStage.removeChildren()
        const minesValBoard = await genMinesValBoard(mineCount)
        const minesBoard = minesValBoard.map((row, i) => row.map((elem, j) => {
            const { mineItem, openMine } = getMineItem({
                isMine: elem,
                onOpen: (mineState) => {
                    if (mineState === "FAIL") {
                        openMinesBoard(minesBoard)
                    }
                }
            })
            mineItem.position.set(i * 85 + 46, j * 70 + 34)
            appStage.addChild(mineItem);
            return { mineItem, openMine }
        }));
    }
    return (
        <div className='w-full p-[2px] absolute bottom-9 lg:bottom-0 left-0'>
            <div className='flex flex-col-reverse lg:flex-row justify-center items-center w-full rounded-[12px] bg-black/30 p-1 gap-2'>
                <div className='flex items-center gap-2 rounded-full px-2 bg-[#0267a5] border border-black/50 text-white shadow-[inset_1px_1px_#fff1cd33] text-xs py-1'>
                    <div className='flex flex-col justify-center items-center px-2'>
                        <span>Bet, USD</span>
                        <div className='w-[142px] h-[22px] bg-black/30 rounded-full text-center font-bold border border-black/60 text-sm'>0.10</div>
                    </div>
                    <div className='flex gap-1 items-center'>
                        <button className='flex justify-center items-center w-[34px] h-[34px] rounded-full px-2 bg-[#0267a5] border border-black/50 text-white shadow-[inset_1px_1px_#fff1cd33] text-xs hover:bg-[#02578c]'>
                            <svg className='w-[10px] h-[2px]'><use href="#svg-minus" /></svg>
                        </button>
                        <button className='flex justify-center items-center w-[34px] h-[34px] rounded-full px-2 bg-[#0267a5] border border-black/50 text-white shadow-[inset_1px_1px_#fff1cd33] text-xs'>
                            <svg className='w-[13px] h-[14px]'><use href="#svg-coin" /></svg>
                        </button>
                        <button className='flex justify-center items-center w-[34px] h-[34px] rounded-full px-2 bg-[#0267a5] border border-black/50 text-white shadow-[inset_1px_1px_#fff1cd33] text-xs hover:bg-[#02578c]'>
                            <svg className='w-[10px] h-[10px]'><use href="#svg-plus" /></svg>
                        </button>
                    </div>
                </div>
                <div className='flex items-cente rounded-[12px] gap-2'>
                    <button className='flex justify-center items-center w-[50px] h-[50px] border border-black/90 rounded-full opacity-65' style={{ background: "radial-gradient(circle at 50% 50%,#0576dc,#025cd5 68%)", boxShadow: "3px 3px 6px #020b1a80, inset -1px -1px #00000052, inset 1px 1px #fff1cd33" }}>
                        <svg className='w-[24px] h-[25px]'><use href="#svg-spin" /></svg>
                    </button>
                    <button onClick={handleBet} className='flex justify-center items-center relative w-[242px] h-[50px] px-2 rounded-[20px] border-2 border-black/90' style={{ background: "radial-gradient(circle at 50% 50%,#61a503,#2d7500 94%)" }}>
                        <svg className='w-[19px] h-[22px] absolute left-4'><use href="#svg-play" /></svg>
                        <span className='uppercase text-white'>Bet</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Footer