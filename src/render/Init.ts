
import { genInitMinesBoard } from "../utils";
import { appStage } from "./renderer";

const Init = async () => {    
    Array.from({ length: 5 }, () => Array.from({ length: 5 }, () => null)).forEach((row, i) => row.forEach((_, j) => {
        const mineItem = genInitMinesBoard()
        mineItem.position.set(i * 85 + 46, j * 70 + 34)
        appStage.addChild(mineItem)
    }))

}
export default Init