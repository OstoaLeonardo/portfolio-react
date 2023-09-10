import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function GitHubCard() {
    const url = 'https://firebasestorage.googleapis.com/v0/b/portfolio-ostoa-leonardo.appspot.com/o/github.png?alt=media&token=bdcf5525-6a66-4cf7-93dd-4d47b4dd2e02'

    const backgroundImageStyle = {
        backgroundImage: `url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }

    return (
        <a href='https://github.com/ostoaleonardo' target='_blank' className='relative flex flex-col justify-between col-span-2 md:aspect-auto rounded-2xl sm:rounded-3xl overflow-hidden bg-github p-4 sm:p-6 md:p-10 hover:scale-105 transition-all duration-300' style={backgroundImageStyle}>
            <div className='absolute flex top-4 sm:top-8 right-4 sm:right-8'>
                <FontAwesomeIcon
                    className='text-slate-200 text-xs md:text-sm'
                    icon={faUpRightFromSquare}
                />
            </div>
            <header className='flex items-center w-full h-auto'>
                <FontAwesomeIcon
                    className='text-slate-200 text-xl xl:text-4xl md:text-3xl sm:text-xl mr-1 md:mr-3'
                    icon={faGithub}
                />
                <p className='text-slate-200 text-sm sm:text-xl md:text-2xl xl:text-3xl font-bold'>
                    GitHub
                </p>
            </header>
            <footer className='flex flex-col w-full h-auto'>
                <p className='text-slate-200 text-xs sm:text-lg md:text-xl xl:text-2xl font-medium line-clamp-1'>
                    My GitHub profile
                </p>
            </footer>
        </a>
    )
}
