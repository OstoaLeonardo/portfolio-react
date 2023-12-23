import { BorderCard } from './BorderCard.jsx'
import { MarqueeText } from './MarqueeText.jsx'
import { strings } from '../constants/strings.js'
import useLenguage from '../hooks/useLenguage.js'

export function AboutMeCard() {
    const { language } = useLenguage()

    return (
        <BorderCard size='large'>
            <div className='w-full h-full flex flex-col justify-between bg-slate-500 dark:bg-slate-800 bg-opacity-10 bg-gradient-to-r from-bright dark:from-slate-700 to-crayon dark:to-slate-800 p-10'>
                <div className='hidden lg:flex flex-col'>
                    <MarqueeText>
                        <span className='text-3xl md:text-7xl xl:text-8xl font-archivo-black font-outline-2 group-hover:text-white opacity-80 whitespace-nowrap uppercase'>
                            Frontend {' '}
                            <span className='text-3xl md:text-7xl xl:text-8xl font-archivo-black text-white group-hover:font-outline-2 opacity-80 whitespace-nowrap uppercase'>
                                Developer
                            </span>
                        </span>
                    </MarqueeText>
                    <MarqueeText direction='rtl'>
                        <span className='text-3xl md:text-7xl xl:text-8xl font-archivo-black text-white group-hover:font-outline-2 opacity-80 whitespace-nowrap uppercase'>
                            JavaScript {' '}
                            <span className='text-3xl md:text-7xl xl:text-8xl font-archivo-black font-outline-2 group-hover:text-white opacity-80 whitespace-nowrap uppercase'>
                                Developer
                            </span>
                        </span>
                    </MarqueeText>
                    <MarqueeText>
                        <span className='text-3xl md:text-7xl xl:text-8xl font-archivo-black font-outline-2 group-hover:text-white opacity-80 whitespace-nowrap uppercase'>
                            UI/UX {' '}
                            <span className='text-3xl md:text-7xl xl:text-8xl font-archivo-black text-white group-hover:font-outline-2 opacity-80 whitespace-nowrap uppercase'>
                                Designer
                            </span>
                        </span>
                    </MarqueeText>
                </div>
                <div className='flex flex-col'>
                    <div className='w-fit bg-slate-700 dark:bg-slate-100 px-2 py-1 mb-4'>
                        <h1 className='text-slate-100 dark:text-slate-700 text-3xl md:text-5xl xl:text-5xl font-archivo-black uppercase'>
                            {strings[language].aboutMeCard.title}
                        </h1>
                    </div>
                    <p className='text-slate-700 dark:text-slate-200 text-md md:text-xl xl:text-2xl font-oswald'>
                        {strings[language].aboutMeCard.about}
                    </p>
                </div>
            </div>
        </BorderCard>
    )
}
