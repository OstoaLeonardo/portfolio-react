import { motion, AnimatePresence } from 'framer-motion'

export function Slideshow({ project }) {
    return (
        <div className='flex overflow-scroll snap-x snap-mandatory scroll-smooth no-scrollbar'>
            {project.images.map((image, index) => (
                <AnimatePresence key={index}>
                    <motion.img
                        src={image}
                        alt={project.title}
                        id={`slide-${index}`}
                        className={`sticky snap-center scroll ${index}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    />
                </AnimatePresence>
            ))}

            <div className='absolute w-full bottom-5 flex flex-row justify-center gap-2'>
                {project.images.map((index) => (
                    <a key={index} className='w-2 h-2 bg-white opacity-60 hover:opacity-100 transition-all' href={`#slide-${index}`} />
                ))}
            </div>
        </div>
    )
}