import { useDisclosure } from '@nextui-org/modal'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { ChatAIModal } from './ChatAIModal.jsx'
import { BorderCard } from './BorderCard.jsx'
import { IconCard } from './IconCard.jsx'

export function ChatAI() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleOpen = () => {
        onOpen()
    }

    return (
        <>
            <BorderCard size='small' titleBorder='Chat AI'>
                <div className='w-full h-full flex justify-center items-center bg-crayon dark:bg-slate-800 cursor-pointer'
                    onClick={handleOpen}>
                    <IconCard icon={faArrowRight} />
                    <img
                        className='w-3/6 aspect-square rounded-full'
                        src='https://avatars.githubusercontent.com/u/141528763'
                        alt='Avatar'
                    />
                </div>
            </BorderCard>

            {isOpen && (
                <ChatAIModal isOpen={isOpen} onClose={onClose} />
            )}
        </>
    )
}