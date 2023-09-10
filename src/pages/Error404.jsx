import Lottie from 'lottie-react'
import { Link } from 'react-router-dom'
import { Transition } from '../components/Transition'
import error404 from '../../public/anims/error404.json'
import astronaut from '../../public/anims/astronaut.json'

const Error = () => {
    return (
        <>
            <Transition />
            <div className='absolute top-0 bottom-0 left-0 right-0 flex flex-col place-items-center'>
                <Lottie animationData={error404} className='relative top-[7%] w-1/2 h-1/2' />
                <Lottie animationData={astronaut} className='relative -top-[15%] w-1/3 h-1/3' />
                <h2 className='relative -top-[15%] text-3xl font-bold text-center text-neutral-800 bg-slate-50 px-2 rounded-md -rotate-6'>
                    Page not found
                </h2>
                <Link to='/'
                    className='relative -top-[15%] mt-8 text-slate-50 hover:text-neutral-800 border-2 border-slate-50 hover:bg-slate-50 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5'>
                    Go back
                </Link>
            </div>
        </>
    )
}

export default Error