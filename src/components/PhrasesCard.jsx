import { useEffect, useState } from 'react'
import axios from 'axios'

export function PhrasesCard() {
    const url = 'https://api.quotable.io/random?technology&maxLength=80'
    const [phrase, setPhrase] = useState('')
    const [autor, setAutor] = useState('')

    useEffect(() => {
        getPhrase()
    }, [])

    const getPhrase = async () => {
        try {
            const response = await axios.get(url)
            setPhrase(`"${response.data.content}"`)
            setAutor(response.data.author)
        } catch (error) {
            console.error(error)
        }
    }

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
