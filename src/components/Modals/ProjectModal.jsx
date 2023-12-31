import { Modal, ModalContent, ModalHeader, ModalBody } from '@nextui-org/modal'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Slideshow, IconLink, Chip } from '../ProjectCard'

export function ProjectModal({ isOpen, onClose, project }) {
    const colorVariants = {
        'dadu': 'bg-dadu',
        'prefer': 'bg-prefer',
        'portfolio': 'bg-portfolio',
        'spotify': 'bg-spotify',
        'movies': 'bg-movies',
        'store': 'bg-store',
        'default': 'bg-neutral-900',
    }

    return (
        isOpen && (
            <Modal isOpen={isOpen} onClose={onClose} size='xl' backdrop='opaque' radius='none' placement='center'
                classNames={{
                    base: `${colorVariants[project.color]}`,
                    closeButton: 'text-neutral-100 hover:bg-neutral-800/50 rounded-none',
                }}
            >
                <ModalContent>
                    <ModalHeader className='flex flex-col justify-between mt-4'>
                        <div className='flex flex-col justify-between'>
                            <div className='flex flex-row justify-between items-start'>
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
                        </div>
                        <span className='text-white text-4xl font-archivo-black uppercase mt-3'>
                            {project.title}
                        </span>
                        <section className='flex flex-wrap gap-1 pt-4'>
                            {project.technologies.map((technology, index) => (
                                <Chip key={index} text={technology} />
                            ))}
                        </section>
                    </ModalHeader>
                    <ModalBody className='text-white text-xl font-oswald opacity-90'>
                        {project.description}
                    </ModalBody>
                    <Slideshow project={project} />
                </ModalContent>
            </Modal>
        )
    )
}