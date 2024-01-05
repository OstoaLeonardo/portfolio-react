import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { BorderCard, IconCard } from '../Card'
import { useStrings } from '../../hooks'
import Icons from '../UI'

library.add(fab)

export function SocialCard({ link, icon, color, label }) {
    const { strings } = useStrings()
    const colorVariants = {
        'linkedin': 'bg-linkedin-light dark:bg-linkedin-dark',
        'behance': 'bg-behance-light dark:bg-behance-dark',
        'twitter': 'bg-twitter-light dark:bg-twitter-dark',
    }

    return (
        <BorderCard
            size='small'
            title={label.split(' ')[0]}
            subtitle={strings.socialCard.subtitle}
            titleBottom={label.split(' ')[0]}
        >
            <a href={link} target='_blank' aria-label={label}
                className={`w-full h-full flex justify-center items-center p-10 ${colorVariants[color]}`}>
                <IconCard ico={<Icons.ArrowRightUp />} />
                <FontAwesomeIcon
                    className='text-neutral-100 text-2xl sm:text-6xl xl:text-8xl'
                    icon={['fab', icon]}
                />
            </a>
        </BorderCard>
    )
}
