import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas);

export function SolidIconCard({ link, icon }) {
    return (
        <a href={link} target='_blank' className='relative flex flex-col justify-center items-center col-span-1 aspect-square rounded-2xl sm:rounded-3xl overflow-hidden p-10 bg-crayon dark:bg-slate-800 hover:scale-105 transition-all duration-300'>
            <div className='absolute flex top-4 sm:top-8 right-4 sm:right-8'>
                <FontAwesomeIcon
                    className='text-slate-700 dark:text-slate-300 text-xs md:text-sm'
                    icon={faUpRightFromSquare}
                />
            </div>
            <FontAwesomeIcon
                className='text-slate-700 dark:text-slate-300 text-2xl sm:text-6xl xl:text-8xl'
                icon={['fas', icon]}
            />
        </a>
    )
}
