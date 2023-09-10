import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

const technologies = [
    'html5',
    'css3-alt',
    'square-js',
    'react',
    'android',
    'java',
    'github',
    'figma'
]

export function TechnologiesCard() {
    return (
        <div className='col-span-1 grid grid-cols-3 bg-crayon dark:bg-slate-800 place-content-center place-items-center aspect-square rounded-2xl sm:rounded-3xl overflow-hidden p-2 gap-1 sm:gap-2 md:gap-3 xl:gap-4'>
            {
                technologies.map((technology) => (
                    <div className='col-span-1 flex' key={technology}>
                        <FontAwesomeIcon
                            className='text-slate-600 dark:text-slate-300 w-auto h-6 sm:h-10 md:h-12 xl:h-16'
                            icon={['fab', technology]}
                        />
                    </div>
                ))
            }
        </div>
    )
}
