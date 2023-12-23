import { BorderCard } from './BorderCard.jsx'
import useLenguage from '../hooks/useLenguage.js'

export function LanguageCard() {
    const { language, toggleLanguage } = useLenguage()

    return (
        <BorderCard size='small' titleBorder='Language'>
            <div
                onClick={toggleLanguage}
                className='w-full h-full flex flex-col justify-center items-center bg-crayon dark:bg-slate-800 cursor-pointer'
            >
                <header className='text-slate-700 dark:text-slate-100 group-hover:opacity-20 text-3xl xl:text-8xl md:text-7xl sm:text-6xl font-archivo-black uppercase select-none'>
                    {language}
                </header>
                <footer className='text-slate-500 group-hover:text-slate-100 text-xs xl:text-xl md:text-lg sm:text-xs font-oswald uppercase select-none'>
                    {language === 'en' ? 'ES' : 'EN'}
                </footer>
            </div>
        </BorderCard>
    )
}
