import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export function CurriculumCard({ link }) {
    return (
        <a href={link} target='_blank' className='relative flex flex-col justify-center items-center col-span-1 aspect-square rounded-2xl sm:rounded-3xl overflow-hidden p-10 bg-crayon dark:bg-slate-800 hover:scale-105 transition-all duration-300'>
            <div className='absolute flex top-4 sm:top-8 right-4 sm:right-8'>
                <FontAwesomeIcon
                    className='text-slate-700 dark:text-slate-100 text-xs md:text-sm'
                    icon={faUpRightFromSquare}
                />
            </div>
            <div className='flex flex-row justify-center items-center gap-2 lg:gap-3'>
                <FontAwesomeIcon
                    className='hidden sm:flex text-sm md:text-xl text-slate-700 dark:text-slate-100'
                    icon={faFile}
                />
                <span className='text-sm md:text-2xl font-semibold text-slate-700 dark:text-slate-100'>Curriculum</span>
            </div>
        </a>
    )
}
