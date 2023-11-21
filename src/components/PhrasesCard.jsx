import { useEffect, useState } from 'react'
import { getQuote } from '../scripts/quotable.js'

export function PhrasesCard() {
    const [phrase, setPhrase] = useState('')
    const [autor, setAutor] = useState('')

    useEffect(() => {
        const getPhrase = async () => {
            const data = await getQuote()
            setPhrase(`"${data.content}"`)
            setAutor(data.author)
        }

        getPhrase()
    }, [])

    return (
        <div className='xl:min-h-[300px] flex flex-col row-span-1 col-span-2 text-end justify-center md:aspect-auto rounded-2xl sm:rounded-3xl overflow-hidden bg-crayon dark:bg-github p-4 sm:p-6 md:p-10 gap-1 md:gap-6'>
            <h2 className='text-slate-700 dark:text-slate-100 text-xs sm:text-xl md:text-2xl xl:text-3xl font-semibold'>
                {phrase}
            </h2>
            <span className='text-slate-700 dark:text-slate-100 text-xs sm:text-base md:text-lg xl:text-xl font-normal'>
                {autor}
            </span>
        </div>
    )
}
