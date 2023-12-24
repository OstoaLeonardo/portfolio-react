import { Link } from 'react-router-dom'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { BorderCard } from './BorderCard.jsx'
import { TitleCard } from './TitleCard.jsx'
import { IconCard } from './IconCard.jsx'
import { strings } from '../constants/strings'
import { useLenguage } from '../hooks/useLenguage.js'
import { ArrowDownRightIcon } from './Icons.jsx'

export function ProjectsCard() {
    const { language } = useLenguage()

    return (
        <BorderCard
            size='medium'
            title={strings[language].projectsCard.title}
            titleTop={strings[language].projectsCard.title}
        >
            <Link to='/projects' className='w-full h-full flex flex-col bg-crayon dark:bg-neutral-950 bg-projects-card bg-cover p-2 md:p-4 cursor-pointer'>
                <IconCard ico={<ArrowDownRightIcon />} />
                <header className='hidden group-hover:flex'>
                    <TitleCard text={strings[language].projectsCard.title} />
                </header>
            </Link>
        </BorderCard>
    )
}
