import { useDisclosure } from '@nextui-org/modal'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { ProjectModal } from '../Modals'
import { IconLink } from './IconLink.jsx'
import { Chip } from './Chip.jsx'

export function ProjectCard({ project }) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const colorVariants = {
        'dadu': 'bg-dadu',
        'prefer': 'bg-prefer',
        'portfolio': 'bg-portfolio',
        'spotify': 'bg-spotify',
        'movies': 'bg-movies',
        'store': 'bg-store',
        'default': 'bg-neutral-900'
    }

    const handleOpen = () => {
        onOpen()
    }

    return (
        <article className={`w-full h-full flex flex-col justify-between cursor-pointer ${colorVariants[project.color]}`}
            onClick={handleOpen}>
            <div className='flex flex-col p-6'>
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-col'>
                        <span className='text-white text-base font-oswald opacity-90 uppercase'>
                            {project.type}
                        </span>
                    </div>
                    <div className='flex justify-center items-center gap-2'>
                        {project.demo && <IconLink href={project.demo} icon={faUpRightFromSquare} />}
                        {project.github && <IconLink href={project.github} icon={faGithub} />}
                    </div>
                </div>
                <span className='text-white text-4xl font-archivo-black uppercase mt-3'>
                    {project.title}
                </span>
                <section className='flex flex-wrap gap-1 pt-4'>
                    {project.technologies.map((technology, index) => (
                        <Chip key={index} text={technology} />
                    ))}
                </section>
            </div>
            <img src={project.images[0]} alt={project.title} />

            {isOpen && <ProjectModal isOpen={isOpen} onClose={onClose} project={project} />}
        </article>
    )
}
