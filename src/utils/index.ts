import * as PIXI from 'pixi.js';
import { mineStateType, tweenType } from '../@types';
import cryptojs from 'crypto-js'
import { tweenings } from '../config';
export const getMineItem = ({ isMine, onOpen }: { isMine: boolean, onOpen?: (state: mineStateType) => void }) => {
    let mineState: mineStateType = "UNKNOWN"
    const mineItem = new PIXI.Sprite(PIXI.Texture.from(`./UNKNOWN.png`))
    mineItem.anchor.set(0.5)
    mineItem.eventMode = 'static';
    mineItem.cursor = 'pointer';
    mineItem.on('pointerdown', () => {
        if (mineState === "UNKNOWN") {
            mineState = isMine ? "FAIL" : "SUCCESS"
            mineItem.texture = PIXI.Texture.from(`./${mineState}.png`)
            if (onOpen) onOpen(mineState)
        }
    })
    const openMine = () => {
        if (mineState === "UNKNOWN") {
            tweenTo(mineItem.scale, "x", 1, 0, 500, backout(1.1), null, async () => {
                mineState = isMine ? "MINE" : "NOMINE"
                mineItem.texture = PIXI.Texture.from(`./${mineState}.png`)
                tweenTo(mineItem.scale, "x", 0, 1, 500, backout(1.1), null, null)
            })
        }
    }
    return { mineItem, openMine }
}
export const genInitMinesBoard = () => {
    const mineItem = new PIXI.Sprite(PIXI.Texture.from(`./UNKNOWN.png`))
    mineItem.anchor.set(0.5)
    mineItem.alpha = 0.7
    return mineItem
}
export const genMinesValBoard = async (mineCount: number) => {
    const server_seed = Math.ceil(Math.random() * 99999999)
    const client_seed = Math.ceil(Math.random() * 99999999)
    const seed = `${server_seed}${client_seed}`
    const hash = await genSHA512(seed)
    let start = 0, count = 0
    const mines = Array.from({ length: 5 }, () => Array.from({ length: 5 }, () => false))
    while (count < mineCount) {
        const pos = parseInt(hash.substring(start, start + 2), 16) % 25
        const x = Math.floor(pos % 25 / 5)
        const y = pos % 5
        if (!mines[x][y]) {
            count++
            mines[x][y] = true
        }
        start += 2
    }
    return mines
}
const genSHA512 = async (message: string) => {
    const hash = cryptojs.SHA512(message).toString(cryptojs.enc.Hex);
    return hash;
}
export const tweenTo = (
    object: object,
    property: string,
    propertyBeginValue: number,
    target: number,
    time: number,
    easing: (t: number) => number,
    change: (() => Promise<void>) | null,
    complete: (() => Promise<void>) | null,
) => {
    const tween: tweenType = {
        object,
        property,
        propertyBeginValue,
        target,
        easing,
        time,
        change,
        complete,
        start: Date.now(),
    };
    tweenings.push(tween);
    return tween;
}
export function lerp(a1: number, a2: number, t: number) {
    return a1 * (1 - t) + a2 * t;
}
export function backout(b: number) {
    return (t: number) => (Math.sin(b * Math.PI * t - Math.PI / 2) + 1) / (Math.sin(b * Math.PI - Math.PI / 2) + 1)
}