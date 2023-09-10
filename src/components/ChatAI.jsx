import { useDisclosure } from '@nextui-org/modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { ChatAIModal } from './ChatAIModal'

export function ChatAI() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleOpen = () => {
        onOpen();
    }

    return (
        <>
            <div className='relative flex flex-col justify-center items-center col-span-1 aspect-square rounded-2xl sm:rounded-3xl overflow-hidden md:p-10 bg-crayon dark:bg-slate-800 hover:scale-105 transition-all duration-300 cursor-pointer'
                onClick={handleOpen}>
                <div className='absolute flex top-4 sm:top-8 right-4 sm:right-8'>
                    <FontAwesomeIcon
                        className='text-slate-700 dark:text-slate-300 text-xs md:text-sm'
                        icon={faArrowRight}
                    />
                </div>
                <img
                    className='w-auto h-1/2 md:h-3/4 rounded-full'
                    src='https://unavatar.io/twitter/avicii'
                />
            </div>

            {isOpen && (
                <ChatAIModal isOpen={isOpen} onClose={onClose} />
            )}
        </>
    )
}