import { Navbar } from '../components/Navbar.jsx'
import { Transition } from '../components/Transition.jsx'
import { ProjectCard } from '../components/ProjectCard.jsx'
import { projects } from '../constants/projects.js'

const Projects = () => {
    return (
        <>
            <Transition />
            <main className='flex flex-col m-6 sm:mx-12'>
                <Navbar />
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-20 place-items-center'>
                    {
                        projects.map((project, index) => (
                            <ProjectCard
                                key={index}
                                project={project}
                            />
                        ))
                    }
                </div>
            </main>
        </>
    )
}

export default Projects