
import { useEffect, useRef } from 'react';
import { app, appStage } from '../render/renderer';
import { config } from '../config';
const PIXIComponent = () => {
    const ref = useRef<HTMLDivElement>(null)
    const handleResize = () => {
        if (!ref.current) return
        app.renderer.resize(ref.current.clientWidth, Math.min(ref.current.clientHeight, 350))
        const APP_SCALE = Math.min(ref.current.clientWidth / config.width, ref.current.clientHeight / config.height)
        appStage.scale.set(APP_SCALE)
        appStage.position.set((ref.current.clientWidth - config.width * APP_SCALE) / 2, (Math.min(ref.current.clientHeight, 350) - config.height * APP_SCALE) / 2)
    };
    useEffect(() => {
        if (!ref.current) return
        ref.current.innerHTML = ""
        ref.current.appendChild(app.view)
    }, [ref])
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    return (
        <div ref={ref} className='flex justify-center items-center w-full h-full'></div>
    )
}
export default PIXIComponent

