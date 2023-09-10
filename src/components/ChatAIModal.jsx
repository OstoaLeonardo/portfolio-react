import { Modal, ModalContent, ModalHeader } from '@nextui-org/modal'
import { MendableInPlace } from '@mendable/search'

export function ChatAIModal({ isOpen, onClose }) {

    return (
        isOpen && (
            <Modal isOpen={isOpen} onClose={onClose} size='2xl' backdrop='opaque' radius='lg'
                classNames={{
                    closeButton: 'text-slate-100'
                }}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className='flex flex-col gap-1 text-2xl sm:text-4xl font-bold mt-2'>
                                Chat with my AI bot
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
                        </>
                    )}
                </ModalContent>
            </Modal>
        )
    )
}