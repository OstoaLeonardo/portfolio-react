import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faFile } from '@fortawesome/free-solid-svg-icons'

export function Navbar() {
    return (
        <nav className='w-full fixed top-0 z-10 right-0 left-0 bg-slate-50/80 dark:bg-neutral-900/90 backdrop-blur-xl'>
            <div className='flex flex-wrap items-center justify-between p-6 md:px-12 md:py-8'>
                <Link to='/' className='flex items-center hover:scale-125 transition-all'>
                    <FontAwesomeIcon
                        className='text-slate-700 dark:text-slate-100 text-lg mr-3'
                        icon={faArrowLeft}
                    />
                    <span className='self-center text-2xl text-slate-700 dark:text-slate-100 font-semibold whitespace-nowrap'>
                        Back
                    </span>
                </Link>
                <div className='flex md:order-2'>
                    <a
                        target='_blank'
                        rel='noreferrer'
                        href='https://docs.google.com/document/d/1K_RaBKxsiGUQUHaNt_yg91-W8BYAfSpAQM-THx3PKgY/edit?usp=sharing'
                        className='text-sm font-medium text-slate-100 dark:text-slate-950 bg-slate-700 dark:bg-slate-100 rounded-lg px-4 py-2 hover:scale-125 transition-all'>
                        <FontAwesomeIcon
                            className='text-slate-100 dark:text-slate-950 text-sm mr-3'
                            icon={faFile}
                        />
                        Download CV
                    </a>
                </div>
                <div className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1' id='navbar-cta'>
                    <span className='self-center text-3xl text-slate-700 dark:text-slate-100 font-bold whitespace-nowrap'>
                        Projects
                    </span>
                </div>
            </div>
        </nav>
    )
}