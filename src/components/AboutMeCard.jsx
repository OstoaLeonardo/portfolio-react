import { BorderCard } from './BorderCard.jsx'
import { strings } from '../constants/strings.js'
import { useLenguage } from '../hooks/useLenguage.js'

export function AboutMeCard() {
    const { language } = useLenguage()

    return (
        <BorderCard size='medium' title='About me' subtitle='Frontend Dev'>
            <div className='w-full h-full flex flex-col justify-end bg-slate-400 dark:bg-neutral-800 p-6'>
                <div className='flex flex-col'>
                    <div className='w-fit bg-neutral-800 dark:bg-neutral-100 px-2 py-1 mb-4'>
                        <h1 className='text-neutral-100 dark:text-neutral-950 text-3xl md:text-5xl xl:text-4xl font-archivo-black uppercase'>
                            {strings[language].aboutMeCard.title}
                        </h1>
                    </div>
                    <p className='text-neutral-700 dark:text-neutral-200 text-md md:text-lg xl:text-xl font-oswald'>
                        {strings[language].aboutMeCard.about}
                    </p>
                </div>
            </div>
        </BorderCard>
    )
}
