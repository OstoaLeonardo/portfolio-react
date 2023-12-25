import { Link } from 'react-router-dom'
import { Transition } from '../components'

const Error = () => {
    return (
        <>
            <Transition />
            <main className='w-screen h-screen flex justify-center items-center p-12'>
                <div className='flex flex-col group uppercase gap-4'>
                    <span className='text-7xl md:text-9xl text-neutral-50 font-archivo-black group-hover:font-outline-2 flex-wrap leading-none transition-all'>
                        Page not {' '}
                        <span className='font-outline-2 group-hover:text-neutral-50'>
                            found
                        </span>
                    </span>
                    <Link to='/' className='w-fit text-xl sm:text-2xl md:text-3xl xl:text-4xl hover:scale-125 bg-neutral-100 text-neutral-950 font-archivo-black uppercase transition-all p-1'>
                        Go back
                    </Link>
                </div>
            </main>
        </>
    )
}

export default Error