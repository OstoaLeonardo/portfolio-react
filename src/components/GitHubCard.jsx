import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function GitHubCard() {
    return (
        <a href='https://github.com/ostoaleonardo' target='_blank' aria-label='GitHub profile'
            className='relative flex flex-col justify-between col-span-2 rounded-2xl sm:rounded-3xl bg-github bg-github-card bg-cover p-4 sm:p-6 md:p-10 hover:scale-105 transition-all duration-300'>
            <div className='absolute flex top-4 sm:top-8 right-4 sm:right-8'>
                <FontAwesomeIcon
                    className='text-slate-100 text-xs md:text-sm'
                    icon={faUpRightFromSquare}
                />
            </div>
            <header className='flex items-center w-full h-auto'>
                <FontAwesomeIcon
                    className='text-slate-100 text-xl xl:text-4xl md:text-3xl sm:text-xl mr-1 md:mr-3'
                    icon={faGithub}
                />
                <p className='text-slate-100 text-sm sm:text-xl md:text-2xl xl:text-3xl font-bold'>
                    GitHub
                </p>
            </header>
            <footer className='flex flex-col w-full h-auto'>
                <p className='text-slate-100 text-xs sm:text-lg md:text-xl xl:text-2xl font-medium line-clamp-1'>
                    My GitHub profile
                </p>
            </footer>
        </a>
    )
}
