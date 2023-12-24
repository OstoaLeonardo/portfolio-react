import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useDarkMode } from '../hooks/useDarkMode'
import { useLenguage } from '../hooks/useLenguage'
import useTitle from '../hooks/useTitle.js'

export function Dropdown() {
    const [isOpen, setIsOpen] = useState(false)
    const { setTitle, setSubtitle } = useTitle()
    const { language, toggleLanguage } = useLenguage()
    const { theme, toggleTheme } = useDarkMode()

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
        
        if (isOpen) {
            setTitle('Welcome')
            setSubtitle('')
        } else {
            setTitle('Open')
            setSubtitle('Settings')
        }
    }

    return (
        <>
            <button onClick={toggleDropdown} className='absolute top-12 right-0 w-auto h-auto px-2 py-1 leading-none bg-white aspectd-square text-neutral-900 text-xl font-oswald uppercase'>
                <FontAwesomeIcon icon={faBars} />
                <span className='hidden md:inline-block pl-2'>Settings</span>
            </button>

            {isOpen && (
                <div className='absolute top-20 right-0 text-sm md:text-lg bg-white transition-all'>
                    <button className='w-full h-auto px-10 py-1 flex items-center justify-center text-neutral-900 hover:bg-neutral-100 font-oswald uppercase' onClick={toggleTheme}>
                        {theme === 'dark' ? 'Light' : 'Dark'} mode
                    </button>
                    <button className='w-full h-auto px-10 py-1 flex items-center justify-center text-neutral-900 hover:bg-neutral-100 font-oswald uppercase' onClick={toggleLanguage}>
                        {language === 'en' ? 'Español' : 'English'}
                    </button>
                </div>
            )}
        </>
    )
}
