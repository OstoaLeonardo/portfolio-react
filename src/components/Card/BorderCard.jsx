import { useStrings, useTitle } from '../../hooks'

export function BorderCard({ size, title, subtitle, titleTop, titleBottom, children }) {
    const { strings } = useStrings()
    const { setTitle, setSubtitle } = useTitle()

    const sizeVariants = {
        'small': 'w-auto h-full aspect-square',
        'medium': 'w-auto h-full aspect-[2/1]',
    }

    const handleMouseEnter = () => {
        setTitle(title || titleTop || titleBottom || strings.ledScreen.title)
        setSubtitle(subtitle || '')
    }

    const handleMouseLeave = () => {
        setTitle(strings.ledScreen.title)
        setSubtitle('')
    }

    return (
        <section
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative flex justify-center items-center ${sizeVariants[size]} group`}
        >
            <div className='w-full h-full flex border-4 border-transparent group-hover:border-white overflow-hidden'>
                {children}
            </div>

            {titleTop && (
                <span className='absolute left-3 top-2 group-hover:hidden font-archivo-black text-sm sm:text-xl md:text-2xl xl:text-4xl text-white/80 uppercase'>
                    {titleTop}
                </span>
            )}

            {titleBottom && (
                <span className='absolute left-3 bottom-2 group-hover:hidden font-archivo-black text-sm sm:text-xl md:text-2xl xl:text-4xl text-white/80 uppercase'>
                    {titleBottom}
                </span>
            )}
        </section>
    )
}