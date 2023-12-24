import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

export function Navbar() {
    return (
        <nav className='w-full fixed top-0 z-10 right-0 left-0 bg-neutral-50/80 dark:bg-neutral-900/90 backdrop-blur-xl'>
            <div className='flex flex-wrap items-center justify-between p-6 md:px-12 md:py-8'>
                <Link to='/' className='flex items-center hover:scale-125 group transition-all'>
                    <FontAwesomeIcon
                        className='text-neutral-700 dark:text-neutral-100 text-md mr-3'
                        icon={faArrowLeft}
                    />
                    <span className='self-center text-xl text-neutral-700 dark:text-neutral-100 font-oswald uppercase'>
                        Back
                    </span>
                </Link>
                <div className='flex md:order-2'>
                    <a
                        target='_blank'
                        rel='noreferrer'
                        href='https://docs.google.com/document/d/1K_RaBKxsiGUQUHaNt_yg91-W8BYAfSpAQM-THx3PKgY/edit?usp=sharing'
                        className='text-md text-neutral-100 dark:text-neutral-950 bg-neutral-700 dark:bg-neutral-100 font-oswald px-2 py-1 hover:scale-125 transition-all uppercase'>
                        Download CV
                    </a>
                </div>
                <div className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1' id='navbar-cta'>
                    <span className='self-center text-3xl text-neutral-700 dark:text-neutral-100 font-archivo-black uppercase'>
                        Projects
                    </span>
                </div>
            </div>
        </nav>
    )
}