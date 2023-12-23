import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { BorderCard } from './BorderCard'
import { IconCard } from './IconCard'

library.add(fab)

export function SocialNetworkCard({ link, icon, color, label }) {
    const colorVariants = {
        'linkedin': 'bg-linkedin-light dark:bg-linkedin-dark',
        'behance': 'bg-behance-light dark:bg-behance-dark',
        'twitter': 'bg-twitter-light dark:bg-twitter-dark',
    }

    return (
        <BorderCard size='small' titleBorder={label.split(' ')[0]} titleBottom={label.split(' ')[0]}>
            <a href={link} target='_blank' aria-label={label}
                className={`w-full h-full flex justify-center items-center p-10 ${colorVariants[color]}`}>
                <IconCard icon={faUpRightFromSquare} />
                <FontAwesomeIcon
                    className='text-slate-100 text-2xl sm:text-6xl xl:text-8xl'
                    icon={['fab', icon]}
                />
            </a>
        </BorderCard>
    )
}
