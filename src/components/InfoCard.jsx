import { BorderCard } from './BorderCard.jsx'

export function InfoCard({ header, body, footer, color }) {
    const colorVariants = {
        'purple': 'bg-purple-light dark:bg-purple-dark',
        'red': 'bg-red-light dark:bg-red-dark',
    }

    return (
        <BorderCard size='small'>
            <div className={`w-full h-full flex flex-col justify-center items-center ${colorVariants[color]}`}>
                <header className='text-center text-xs sm:text-xs md:text-lg xl:text-2xl text-white font-oswald opacity-80 uppercase'>
                    {header}
                </header>
                <section className='text-3xl sm:text-6xl md:text-7xl xl:text-8xl text-white font-archivo-black opacity-80 uppercase'>
                    {body}
                </section>
                <footer className='text-center text-xs sm:text-xs md:text-lg xl:text-2xl text-white font-oswald opacity-80 uppercase'>
                    {footer}
                </footer>
            </div>
        </BorderCard>
    )
}
