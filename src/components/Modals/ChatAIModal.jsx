import { Modal, ModalContent, ModalHeader } from '@nextui-org/modal'
import { MendableInPlace } from '@mendable/search'
import { useLanguage } from '../../hooks'
import { strings } from '../../constants'

export function ChatAIModal({ isOpen, onClose }) {
    const { language } = useLanguage()

    return (
        isOpen && (
            <Modal isOpen={isOpen} onClose={onClose} size='2xl' backdrop='opaque' radius='none'
                classNames={{
                    base: 'bg-neutral-800 text-white',
                    closeButton: 'text-neutral-100 hover:bg-neutral-800/50 rounded-none'
                }}
            >
                <ModalContent>
                    <ModalHeader className='text-2xl sm:text-4xl font-archivo-black uppercase'>
                        {strings[language].chatAIModal.title}
                    </ModalHeader>
                    <MendableInPlace
                        anon_key='fd8063a7-7e04-4913-815c-e7743f2b3209'
                        welcomeMessage='✌️ Hi, I am Duilio!'
                        botIcon='https://unavatar.io/twitter/avicii'
                        userIcon='https://unavatar.io/twitter/avicii'
                        hintText='What you want to know about me?'
                        messageSettings={{ prettySources: true }}
                        language='en'
                    />
                </ModalContent>
            </Modal>
        )
    )
}