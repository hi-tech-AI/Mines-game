import { ReactNode } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='flex justify-center items-center w-full min-h-screen relative bg-black'>
            <div className='w-full h-screen max-w-[960px] lg:max-h-[540px] relative overflow-hidden rounded-[14px] shadow-[inset_1px_1px_#ffffff3b]' style={{ background: "linear-gradient(-57deg,#0048dc 3%,#0781cc 85%)" }}>
                <Header />
                <div className='flex w-full h-full pb-[160px] lg:pt-[40px] lg:pb-[64px]'>
                    {children}
                </div>
                <Footer />
                <svg className='absolute top-[50%] -left-[103px] w-[260px] h-[260px] -translate-y-[50%]'><use href="#svg-star" /></svg>
                <svg className='absolute top-[46%] -right-[80px] w-[275px] h-[305px] -translate-y-[50%]'><use href="#svg-mine" /></svg>
            </div>
        </div>
    )
}
export default Layout