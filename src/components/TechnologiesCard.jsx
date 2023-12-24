import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { NextJsIcon, ExpoIcon, TailwindIcon } from './Icons.jsx'
import { BorderCard } from './BorderCard.jsx'

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
        <BorderCard size='small' title='Tech' subtitle='nologies'>
            <div className='w-full h-full grid grid-cols-4 items-center place-items-center bg-crayon dark:bg-neutral-950 p-2 md:p-5'>
                {technologies.map((technology, index) => (
                    <FontAwesomeIcon
                        key={index}
                        className='w-[85%] h-auto text-neutral-600 dark:text-neutral-100 aspect-square'
                        icon={['fab', technology]}
                    />
                ))}
                <TailwindIcon />
                <NextJsIcon />
                <ExpoIcon />
            </div>
        </BorderCard>
    )
}
