import { Transition } from '../components/Transition.jsx'
import { LedScreen } from '../components/LedScreen.jsx'
import { Carousel } from '../components/Carousel.jsx'
import '@splidejs/react-splide/css'

const Home = () => {
    return (
        <>
            <Transition />
            <main className='h-screen flex justify-center items-center p-6 pt-0'>
                <div className='w-full h-full grid grid-rows-3 grid-cols-1 grid-flow-row max-w-5xl md:max-w-5xl xl:max-w-7xl'>
                    <LedScreen />
                    <section className='w-full h-full flex flex-col justify-center row-span-1 bg-white/5'>
                        <Carousel />
                    </section>
                </div>
            </main >
        </>
    )
}

export default Home
