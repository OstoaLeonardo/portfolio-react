import { BorderCard } from './BorderCard.jsx'
import { MoonIcon, SunIcon } from './Icons.jsx'
import { useDarkMode } from '../hooks/useDarkMode.js'

export function DarkModeCard() {
    const { theme, toggleTheme } = useDarkMode()

    return (
        <BorderCard size='small' title='Change theme'>
            <div onClick={toggleTheme} className='w-full h-full flex justify-center items-center bg-crayon dark:bg-neutral-950 cursor-pointer'>
                <span className='group-hover:rotate-[32deg] transition-all'>
                    {theme === 'light' ? <SunIcon /> : <MoonIcon />}
                </span>
            </div>
        </BorderCard>
    )
}
