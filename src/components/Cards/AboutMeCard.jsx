import { BorderCard } from '../Card'
import { useStrings } from '../../hooks'

export function AboutMeCard() {
    const { strings } = useStrings()

    return (
        <BorderCard size='medium' title={strings.aboutMeCard.title}>
            <div className='w-full h-full flex flex-col justify-end bg-slate-400 dark:bg-neutral-800 p-6'>
                <div className='flex flex-col'>
                    <div className='w-fit bg-neutral-800 dark:bg-neutral-100 px-2 py-1 mb-4'>
                        <h1 className='text-neutral-100 dark:text-neutral-900 text-3xl md:text-5xl xl:text-4xl font-archivo-black uppercase'>
                            Duilio Ostoa
                        </h1>
                    </div>
                    <p className='text-neutral-700 dark:text-neutral-200 text-md md:text-lg xl:text-xl font-oswald'>
                        {strings.aboutMeCard.about}
                    </p>
                </div>
            </div>
        </BorderCard>
    )
}
