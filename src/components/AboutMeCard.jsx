import useLenguage from '../hooks/useLenguage.js'
import { strings } from '../constants/strings.js'

export function AboutMeCard() {
    const { language } = useLenguage()

    return (
        <div className='flex flex-col justify-end col-span-3 md:row-span-2 rounded-2xl sm:rounded-3xl p-10 bg-slate-500 dark:bg-slate-800 bg-opacity-10 bg-gradient-to-r from-bright dark:from-slate-700 to-crayon dark:to-slate-800'>
            <h1 className='text-slate-700 dark:text-slate-100 text-3xl md:text-4xl xl:text-5xl font-bold mb-5'>
                {'✌️ ' + strings[language].aboutMeCard.title}
            </h1>
            <p className='text-slate-700 dark:text-slate-100 text-md md:text-xl xl:text-2xl'>
                {strings[language].aboutMeCard.about}
            </p>
        </div>
    )
}
