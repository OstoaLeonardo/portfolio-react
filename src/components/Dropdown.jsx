import { useState } from 'react'
import { useDarkMode } from '../hooks/useDarkMode'
import { useLenguage } from '../hooks/useLenguage'
import { SunAltIcon, SortIcon, SunIcon, MenuIcon } from './Icons.jsx'
import useTitle from '../hooks/useTitle.js'

export function Dropdown() {
    const { setTitle, setSubtitle } = useTitle()
    const { language, toggleLanguage } = useLenguage()
    const { theme, toggleTheme } = useDarkMode()

    const openDropdown = () => {
        setTitle('Open')
        setSubtitle('Settings')
    }

    const closeDropdown = () => {
        setTitle('Welcome')
        setSubtitle('')
    }

    return (
        <section
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
            className='absolute top-12 right-0 flex flex-col items-end group'
        >
            <div className='w-fit bg-white aspectd-square leading-none px-2 py-1'>
                <span className='flex items-center text-neutral-900 text-xl font-oswald uppercase gap-2'>
                    <MenuIcon />
                    Settings
                </span>
            </div>

            <div className='hidden group-hover:flex flex-col w-36 text-sm md:text-lg bg-white transition-all'>
                <button className='w-full flex items-center justify-between text-neutral-900 hover:bg-neutral-100 font-oswald uppercase px-2 py-1' onClick={toggleTheme}>
                    {theme === 'dark' ? <SunAltIcon /> : <SunIcon />}
                    <span className='pl-2'>
                        {theme === 'dark' ? 'Light' : 'Dark'} mode
                    </span>
                </button>
                <button className='w-full flex items-center justify-between text-neutral-900 hover:bg-neutral-100 font-oswald uppercase px-2 py-1 ' onClick={toggleLanguage}>
                    <SortIcon />
                    <span className='pl-2'>
                        {language === 'en' ? 'Español' : 'English'}
                    </span>
                </button>
            </div>
        </section>
    )
}
