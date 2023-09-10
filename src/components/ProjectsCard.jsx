import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faPaperclip } from '@fortawesome/free-solid-svg-icons'

export function ProjectsCard() {
    const url = 'https://firebasestorage.googleapis.com/v0/b/portfolio-ostoa-leonardo.appspot.com/o/projects.png?alt=media&token=647465d3-d159-4d66-8dcb-3806afb9fd23'

    const backgroundImageStyle = {
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }

    return (
        <Link to='/projects'
            className='relative flex flex-col col-span-2 md:aspect-auto rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-600 dark:bg-slate-700 p-4 sm:p-6 md:p-10 hover:scale-105 transition-all duration-300 cursor-pointer' style={backgroundImageStyle}>
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
