import { useDisclosure } from '@nextui-org/modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { ProjectModal } from './ProjectModal.jsx'

export function ProjectCard({ project }) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const colorVariants = {
        'dadu': 'bg-dadu',
        'prefer': 'bg-prefer',
        'portfolio': 'bg-portfolio',
        'spotify': 'bg-spotify',
        'movies': 'bg-movies',
        'store': 'bg-store',
    }

    const handleOpen = () => {
        onOpen();
    }

    return (
        <>
            <div className={`w-full h-full flex flex-col justify-between rounded-2xl cursor-pointer ${colorVariants[project.color]}`}
                onClick={handleOpen}>
                <div className='flex flex-col p-6'>
                    <div className='flex flex-row justify-between items-start'>
                        <div className='flex flex-col'>
                            <span className='text-base font-medium tracking-tight'>
                                {project.type}
                            </span>
                        </div>
                        <div className='flex justify-center items-center gap-2'>
                            {project.demo && (
                                <a href={project.demo} target='_blank'
                                    className='flex text-slate-100 bg-neutral-800 font-medium justify-center items-center shadow rounded-lg pr-2 hover:scale-125 transition-all duration-200'>
                                    <FontAwesomeIcon
                                        className='text-slate-100 text-xs p-2'
                                        icon={faUpRightFromSquare}
                                    />
                                    Demo
                                </a>
                            )}
                            {project.github && (
                                <a href={project.github} target='_blank'
                                    className='flex bg-neutral-800 justify-center items-center shadow rounded-lg hover:scale-125 transition-all duration-200'>
                                    <FontAwesomeIcon
                                        className='text-slate-100 text-xs p-2'
                                        icon={faGithub}
                                    />
                                </a>
                            )}
                        </div>
                    </div>
                    <span className='text-3xl font-bold'>
                        {project.title}
                    </span>
                    <section className='flex flex-wrap gap-1 pt-4'>
                        {project.technologies.map((technology, index) => (
                            <span key={index}
                                className='inline-block text-neutral-800 bg-slate-100 text-xs font-medium rounded-full tracking-wide px-2 py-1'>
                                {technology}
                            </span>
                        ))}
                    </section>
                </div>
                <img src={project.images[0]} alt={project.title} className='rounded-b-2xl' />
            </div>

            {isOpen && (
                <ProjectModal isOpen={isOpen} onClose={onClose} project={project} />
            )}
        </>
    )
}
