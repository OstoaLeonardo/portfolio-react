import { useEffect } from 'react'

export function Cursor() {
    useEffect(() => {
        const cursor = document.querySelector('.cursor')

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.pageX + 'px'
            cursor.style.top = e.pageY + 'px'
        })

        document.addEventListener('click', () => {
            cursor.classList.add('bg-white')

            setTimeout(() => {
                cursor.classList.remove('bg-white')
            }, 100)
        })

        const lightBar = document.querySelector('.light-bar')

        document.addEventListener('mousemove', (e) => {
            lightBar.style.left = e.pageX + 'px'

            lightBar.animate({
                left: e.pageX + 'px',
            }, {duration: 1000, fill: 'forwards'})
        })
    }, [])

    return (
        <>
            <div className='cursor mix-blend-difference z-50' />
            <div className='light-bar bg-gradient-to-b from-blue-50 from-15% to-blue-200 hidden xl:block' />
        </>
    )
}