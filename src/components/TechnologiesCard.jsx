import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { NextJsIcon, ExpoIcon, TailwindIcon } from './Icons'

library.add(fab)

const technologies = [
    'html5',
    'css3-alt',
    'square-js',
    'react',
    'android',
    'github',
    'figma',
]

export function TechnologiesCard() {
    return (
        <section className='col-span-1 bg-crayon dark:bg-slate-800 aspect-square rounded-2xl sm:rounded-3xl p-2 md:p-5'>
            <div className='w-full h-full grid grid-cols-4 items-center place-items-center'>
                {technologies.map((technology, index) => (
                    <FontAwesomeIcon
                        key={index}
                        className='w-[85%] h-auto text-slate-600 dark:text-slate-100 aspect-square'
                        icon={['fab', technology]}
                    />
                ))}
                <TailwindIcon />
                <NextJsIcon />
                <ExpoIcon />
            </div>
        </section>
    )
}
