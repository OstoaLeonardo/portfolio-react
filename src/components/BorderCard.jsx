import { MarqueeText } from './MarqueeText.jsx'

function TextMarquee({ text, classNames }) {
    return (
        <span className={`text-[0.3rem] md:text-[0.5rem] lg:text-xs text-neutral-950 font-archivo-black opacity-80 uppercase ${classNames}`}>
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

export function BorderCard({ size, titleBorder, titleTop, titleBottom, children }) {
    const sizeVariants = {
        'small': 'col-span-1 aspect-square',
        'medium': 'col-span-2 row-span-1',
        'large': 'col-span-3 md:row-span-2',
    }

    return (
        <section className={`relative ${sizeVariants[size]} group overflow-hidden`}>
            <div className='w-full h-full flex flex-col justify-between'>
                <BorderMarquee>
                    <TextMarquee text={titleBorder} />
                </BorderMarquee>
                <div className='w-full h-full flex flex-row justify-between'>
                    <BorderMarquee direction='vertical'>
                        <TextMarquee text={titleBorder} classNames='writing-vertical-lr rotate-180' />
                    </BorderMarquee>
                    <div className='relative w-full h-full border-4 group-hover:border-neutral-900'>
                        {children}
                    </div>
                    <BorderMarquee direction='vertical'>
                        <TextMarquee text={titleBorder} classNames='writing-vertical-lr' />
                    </BorderMarquee>
                </div>
                <BorderMarquee>
                    <TextMarquee text={titleBorder} />
                </BorderMarquee>
            </div>

            {titleTop && (
                <span className='absolute left-3 top-2 group-hover:hidden font-archivo-black text-sm sm:text-xl md:text-2xl xl:text-4xl text-white opacity-80 uppercase'>
                    {titleTop}
                </span>
            )}

            {titleBottom && (
                <span className='absolute left-3 bottom-2 group-hover:hidden font-archivo-black text-sm sm:text-xl md:text-2xl xl:text-4xl text-white opacity-80 uppercase'>
                    {titleBottom}
                </span>
            )}
        </section>
    )
}