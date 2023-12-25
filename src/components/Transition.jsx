import { motion, AnimatePresence } from 'framer-motion'

export function Transition({ isPresent = true }) {
    return (
        <AnimatePresence>
            {isPresent && (
                <motion.div
                    initial={{ scaleX: 1 }}
                    animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
                    exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
                    style={{ originX: isPresent ? 0 : 1 }}
                    className='fixed top-0 bottom-0 right-0 left-0 bg-neutral-900 z-30'
                />
            )}
        </AnimatePresence>
    )
}
