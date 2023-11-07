import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faPaperclip } from '@fortawesome/free-solid-svg-icons'

export function ProjectsCard() {
    return (
        <Link to='/projects' className='relative flex flex-col col-span-2 rounded-2xl sm:rounded-3xl bg-slate-600 bg-projects-card bg-cover p-4 sm:p-6 md:p-10 hover:scale-105 transition-all duration-300 cursor-pointer'>
            <div className='absolute flex top-4 sm:top-8 right-4 sm:right-8'>
                <FontAwesomeIcon
                    className='text-slate-200 text-xs md:text-sm'
                    icon={faArrowRight}
                />
            </div>
            <header className='flex items-center w-full h-auto'>
                <FontAwesomeIcon
                    className='text-slate-200 text-xl xl:text-4xl md:text-3xl sm:text-xl mr-1 md:mr-3'
                    icon={faPaperclip}
                />
                <p className='text-slate-200 text-sm sm:text-xl md:text-2xl xl:text-3xl font-bold'>
                    My projects
                </p>
            </header>
        </Link>
    )
}
