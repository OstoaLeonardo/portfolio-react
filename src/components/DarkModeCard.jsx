import { useDarkMode } from '../hooks/useDarkMode.js'
import { MoonIcon, SunIcon } from './Icons.jsx'

export function DarkModeCard() {
    const { theme, toggleTheme } = useDarkMode()

    return (
        <section className='flex justify-center items-center col-span-1 bg-crayon dark:bg-slate-800 rounded-2xl sm:rounded-3xl aspect-square gap-4'>
            <button className='hover:bg-slate-800/10 dark:hover:bg-slate-200/10 rounded-xl p-4' onClick={toggleTheme}>
                {theme === 'light' ? <SunIcon /> : <MoonIcon />}
            </button>
        </section>
    )
}
