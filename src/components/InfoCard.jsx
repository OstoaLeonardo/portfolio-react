export function InfoCard({ header, body, footer, color }) {
    const colorVariants = {
        'purple': 'bg-purple-light dark:bg-purple-dark',
        'red': 'bg-red-light dark:bg-red-dark',
    }

    return (
        <div className={`flex flex-col justify-center items-center col-span-1 aspect-square rounded-2xl sm:rounded-3xl overflow-hidden ${colorVariants[color]}`}>
            <header className='text-slate-100 text-xs xl:text-xl md:text-lg sm:text-xs font-medium uppercase'>
                {header}
            </header>
            <section className='text-slate-100 text-3xl xl:text-8xl md:text-7xl sm:text-6xl font-bold uppercase'>
                {body}
            </section>
            <footer className='text-slate-100 text-xs xl:text-xl md:text-lg sm:text-xs font-semibold uppercase text-center'>
                {footer}
            </footer>
        </div>
    )
}
