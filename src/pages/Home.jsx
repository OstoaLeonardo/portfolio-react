import { Carousel, Cursor, LedScreen, Transition } from '../components'
import '@splidejs/react-splide/css'

const Home = () => {
    return (
        <>
            <Transition />
            <main className='h-screen flex justify-center items-center p-6 pt-0'>
                <div className='mix-blend-difference w-full h-full grid grid-rows-3 grid-cols-1 grid-flow-row max-w-5xl md:max-w-5xl xl:max-w-7xl z-10'>
                    <LedScreen />
                    <Cursor />
                    <section className='w-full h-full flex flex-col justify-center row-span-1 bg-white/5'>
                        <Carousel />
                    </section>
                </div>
            </main >
        </>
    )
}

export default Home
