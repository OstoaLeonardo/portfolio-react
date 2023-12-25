import { useDisclosure } from '@nextui-org/modal'
import { ChatAIModal } from './ChatAIModal.jsx'
import { BorderCard } from './BorderCard.jsx'
import { IconCard } from './IconCard.jsx'
import { ScaleIcon } from './Icons.jsx'

export function ChatAI() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleOpen = () => {
        onOpen()
    }

    return (
        <>
            <BorderCard size='small' title='Chat AI' subtitle={'\\[\'.\']/'}>
                <div className='w-full h-full flex justify-center items-center bg-slate-400 dark:bg-neutral-800 cursor-pointer'
                    onClick={handleOpen}>
                    <IconCard ico={<ScaleIcon />} />
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