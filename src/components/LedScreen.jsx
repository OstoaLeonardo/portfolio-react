import { Dropdown } from './Dropdown.jsx'
import useTitle from '../hooks/useTitle.js'

export function LedScreen() {
    const { title, subtitle } = useTitle()
    
    return (
        <section className='relative w-full row-span-2 uppercase select-none mix-blend-difference z-20'>
            <div className='w-full h-full max-md:flex max-md:items-center max-md:justify-center flex-col group'>
                <span className='text-[20vw] md:text-[9vw] font-archivo-black font-outline-2 group-hover:text-white break-all transition-all'>
                    {title}
                </span>
                <span className='hidden lg:inline-block absolute top-28 left-28 z-20 text-[9vw] text-white font-archivo-black group-hover:font-outline-2 whitespace-normal leading-none transition-all'>
                    {subtitle}
                </span>
            </div>
            <Dropdown />
        </section>
    )
}
