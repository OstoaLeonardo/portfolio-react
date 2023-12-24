import { useEffect, useRef, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll'
import '@splidejs/react-splide/css'

export function MarqueeText({ children, classNames, direction = 'ltr' }) {
    const containerRef = useRef(null)
    const [isTextTooLong, setIsTextTooLong] = useState(false)

    useEffect(() => {
        const containerWidth = containerRef.current.offsetWidth
        const textWidth = containerRef.current.querySelector('span').offsetWidth

        setIsTextTooLong(textWidth > containerWidth)
    }, [children])

    return (
        <div ref={containerRef} className={classNames + ' leading-none'}>
            {isTextTooLong ? (
                <Splide
                    aria-label='Splide'
                    options={{
                        type: 'loop',
                        drag: 'free',
                        clones: 9,
                        arrows: false,
                        autoWidth: true,
                        pagination: false,
                        direction: direction,
                        gap: '6rem',
                        height: direction === 'ttb' && '16rem',
                        autoScroll: {
                            speed: 1,
                            rewind: true,
                        },
                    }}
                    extensions={{ AutoScroll }}
                >
                    <SplideSlide>
                        {children}
                    </SplideSlide>
                </Splide>
            ) : (
                children
            )}
        </div>
    )
}