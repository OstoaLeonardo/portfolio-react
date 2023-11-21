import { Modal, ModalContent, ModalHeader, ModalBody } from '@nextui-org/modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { Slideshow } from './Slideshow.jsx'

export function ProjectModal({ isOpen, onClose, project }) {
    const colorVariants = {
        'dadu': 'bg-dadu',
        'prefer': 'bg-prefer',
        'portfolio': 'bg-portfolio',
        'spotify': 'bg-spotify',
        'movies': 'bg-movies',
        'store': 'bg-store',
    }

    return (
        isOpen && (
            <Modal isOpen={isOpen} onClose={onClose} size='2xl' backdrop='opaque' radius='lg' placement='center'
                classNames={{
                    base: `${colorVariants[project.color]}`,
                    closeButton: 'text-slate-100'
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className='flex flex-col justify-between mt-4'>
                                <div className='flex flex-row justify-between items-start'>
                                    <span className='text-4xl font-bold'>
                                        {project.title}
                                    </span>
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
                                <section className='flex flex-wrap gap-1 pt-4'>
                                    {project.technologies.map((technology, index) => (
                                        <span key={index}
                                            className='inline-block text-neutral-800 bg-slate-100 text-xs font-medium rounded-full tracking-wide px-2 py-1'>
                                            {technology}
                                        </span>
                                    ))}
                                </section>
                            </ModalHeader>
                            <ModalBody>
                                {project.description}
                            </ModalBody>
                            <Slideshow project={project} />
                        </>
                    )}
                </ModalContent>
            </Modal>
        )
    )
}