import { useEffect } from 'react'
import { Dropdown } from './Dropdown.jsx'
import { useTitle } from '../../hooks'

export function LedScreen() {
    const { title, subtitle } = useTitle()

    useEffect(() => {
        const title = document.querySelector('.title')

        title.animate({
            transform: ['translateX(0)', 'translateX(-100%)'],
        }, {duration: 100, fill: 'forwards'})

        title.animate({
            transform: ['translateX(100%)', 'translateX(0)'],
        }, {duration: 100, fill: 'forwards', delay: 100})
    }, [title])

    return (
        <section className='relative w-full row-span-2 uppercase mix-blend-difference z-20'>
            <div className='w-full h-full max-md:flex max-md:items-center max-md:justify-center flex-col group'>
                <h2 className='title text-[20vw] md:text-[9vw] font-archivo-black font-outline-2 group-hover:text-white break-all transition-all'>
                    {title}
                </h2>
                <h3 className='hidden lg:inline-block absolute top-28 left-28 z-20 text-[9vw] text-white font-archivo-black group-hover:font-outline-2 whitespace-normal leading-none transition-all'>
                    {subtitle}
                </h3>
            </div>
            <Dropdown />
        </section>
    )
}
