import { Navbar } from '../components/Navbar.jsx'
import { Transition } from '../components/Transition.jsx'
import { ProjectCard } from '../components/ProjectCard.jsx'
import { projects } from '../constants/projects.js'
import { Cursor } from '../components/Cursor.jsx'

const Projects = () => {
    return (
        <>
            <Transition />
            <main className='h-full flex flex-col p-6 sm:px-12'>
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
            <Cursor />
        </>
    )
}

export default Projects