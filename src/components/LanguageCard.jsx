import useLenguage from '../hooks/useLenguage'

export function LanguageCard() {
    const { language, toggleLanguage } = useLenguage()

    return (
        <section
            onClick={toggleLanguage}
        className='flex flex-col justify-center items-center col-span-1 bg-crayon dark:bg-slate-800 aspect-square rounded-2xl sm:rounded-3xl cursor-pointer'
        >
            <header className='text-slate-700 dark:text-slate-100 text-3xl xl:text-8xl md:text-7xl sm:text-6xl font-bold uppercase select-none'>
                {language}
            </header>
            <footer className='text-slate-500 text-xs xl:text-xl md:text-lg sm:text-xs font-bold uppercase select-none'>
                {language === 'en' ? 'ES' : 'EN'}
            </footer>
        </section>
    )
}
