import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

export function SocialNetworkCard({ link, icon, color }) {
    const colorVariants = {
        'linkedin': 'bg-linkedin-light dark:bg-linkedin-dark',
        'behance': 'bg-behance-light dark:bg-behance-dark',
        'twitter': 'bg-twitter-light dark:bg-twitter-dark',
    }
    
    return (
        <a href={link} target='_blank' className={`relative flex flex-col justify-center items-center col-span-1 aspect-square rounded-2xl sm:rounded-3xl overflow-hidden p-10 ${colorVariants[color]} hover:scale-105 transition-all duration-300`}>
            <div className='absolute flex top-4 sm:top-8 right-4 sm:right-8'>
                <FontAwesomeIcon
                    className='text-slate-100 text-xs md:text-sm'
                    icon={faUpRightFromSquare}
                />
            </div>
            <FontAwesomeIcon
                className='text-slate-100 text-2xl sm:text-6xl xl:text-8xl'
                icon={['fab', icon]}
            />
        </a>
    )
}
