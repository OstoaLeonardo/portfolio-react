import { Link } from 'react-router-dom'
import { BorderCard, TitleCard, IconCard } from '../Card'
import { useStrings } from '../../hooks'
import Icons from '../UI'

export function ProjectsCard() {
    const { strings } = useStrings()

    return (
        <BorderCard
            size='medium'
            title={strings.projectsCard.title}
            titleTop={strings.projectsCard.title}
        >
            <Link to='/projects' className='w-full h-full flex flex-col bg-slate-400 dark:bg-neutral-800 bg-projects-card bg-cover p-2 md:p-4 cursor-pointer'>
                <IconCard ico={<Icons.ArrowDownRight />} />
                <header className='hidden group-hover:flex'>
                    <TitleCard text={strings.projectsCard.title} />
                </header>
            </Link>
        </BorderCard>
    )
}
