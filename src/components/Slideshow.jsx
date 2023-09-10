import { motion, AnimatePresence } from 'framer-motion'
import '../styles/hiddenScroll.css'

export const Slideshow = ({ project }) => {
  return (
    <div className='flex overflow-scroll snap-x snap-mandatory scroll-smooth'>
      {project.images.map((image, index) => (
        <AnimatePresence key={index}>
          <motion.img
            src={image}
            alt={project.title}
            id={`slide-${index}`}
            className={`sticky snap-center ${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      ))}
      
      <div className='absolute right-0 left-0 bottom-5 flex flex-row justify-center gap-2'>
        {project.images.map((index) => (
          <a key={index} className='w-2.5 h-2.5 bg-black opacity-50 rounded-full hover:opacity-100 transition-all ease-in-out duration-200' href={`#slide-${index}`} />
        ))}
      </div>
    </div>
  );
};
