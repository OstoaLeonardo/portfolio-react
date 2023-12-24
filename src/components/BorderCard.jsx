import { MarqueeText } from './MarqueeText.jsx'
import useTitle from '../hooks/useTitle.js'

function TextMarquee({ text, classNames }) {
    return (
        <span className={`text-[0.3rem] md:text-[0.5rem] lg:text-[0.7rem] text-neutral-950 font-archivo-black opacity-80 uppercase ${classNames}`}>
            {text}
        </span>
    )
}

function BorderMarquee({ children, direction = 'horizontal' }) {
    const directionVariants = {
        'horizontal': 'w-full h-fit',
        'vertical': 'w-fit h-full',
    }

    return (
        <MarqueeText
            alwaysRepeat
            direction={direction === 'horizontal' ? 'ltr' : 'ttb'}
            classNames={`hidden xl:group-hover:flex bg-white transition-all ${directionVariants[direction]}`}
        >
            {children}
        </MarqueeText>
    )
}

export function BorderCard({ size, title, subtitle, titleTop, titleBottom, children }) {
    const { setTitle, setSubtitle } = useTitle()
    const sizeVariants = {
        'small': 'w-auto h-full aspect-square',
        'medium': 'w-auto h-full aspect-[2/1]',
    }

    const handleMouseEnter = () => {
        setTitle(title || titleTop || titleBottom || 'Welcome')
        setSubtitle(subtitle || '')
    }

    const handleMouseLeave = () => {
        setTitle('Welcome')
        setSubtitle('')
    }

    return (
        <section
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative flex items-center justify-center ${sizeVariants[size]} group`}
        >
            <div className='w-full h-full flex flex-col justify-between'>
                {/* <BorderMarquee>
                    <TextMarquee text={title} />
                </BorderMarquee> */}
                <div className='w-full h-full flex flex-row justify-between'>
                    {/* <BorderMarquee direction='vertical'>
                        <TextMarquee text={title} classNames='writing-vertical-lr rotate-180' />
                    </BorderMarquee> */}
                    <div className='relative w-full h-full border-4 group-hover:border-white/80 overflow-hidden'>
                        {children}
                    </div>
                    {/* <BorderMarquee direction='vertical'>
                        <TextMarquee text={title} classNames='writing-vertical-lr' />
                    </BorderMarquee> */}
                </div>
                {/* <BorderMarquee>
                    <TextMarquee text={title} />
                </BorderMarquee> */}
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