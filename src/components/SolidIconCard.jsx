import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas);

export function SolidIconCard({ link, icon, label }) {
    return (
        <a href={link} target='_blank' aria-label={label}
            className='relative flex flex-col justify-center items-center col-span-1 aspect-square rounded-2xl sm:rounded-3xl bg-crayon dark:bg-neutral-950 p-10 hover:scale-105 transition-all duration-300'>
            <div className='absolute flex top-4 sm:top-8 right-4 sm:right-8'>
                <FontAwesomeIcon
                    className='text-neutral-700 dark:text-neutral-100 text-xs md:text-sm'
                    icon={faUpRightFromSquare}
                />
            </div>
            <FontAwesomeIcon
                className='text-neutral-700 dark:text-neutral-100 text-2xl sm:text-6xl xl:text-8xl'
                icon={['fas', icon]}
            />
        </a>
    )
}
