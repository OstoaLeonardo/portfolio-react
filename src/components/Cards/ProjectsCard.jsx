import { Link } from 'react-router-dom'
import { BorderCard, TitleCard, IconCard } from '../Card'
import { useLanguage } from '../../hooks'
import { strings } from '../../constants'
import Icons from '../UI'

export function ProjectsCard() {
    const { language } = useLanguage()

    return (
        <BorderCard
            size='medium'
            title={strings[language].projectsCard.title}
            titleTop={strings[language].projectsCard.title}
        >
            <Link to='/projects' className='w-full h-full flex flex-col bg-slate-400 dark:bg-neutral-800 bg-projects-card bg-cover p-2 md:p-4 cursor-pointer'>
                <IconCard ico={<Icons.ArrowDownRight />} />
                <header className='hidden group-hover:flex'>
                    <TitleCard text={strings[language].projectsCard.title} />
                </header>
            </Link>
        </BorderCard>
    )
}
