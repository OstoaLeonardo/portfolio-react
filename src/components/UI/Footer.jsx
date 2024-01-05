import { useTitle, useStrings } from '../../hooks'
import Icons from './Icons.jsx'

export function Footer() {
    const { setTitle, setSubtitle } = useTitle()
    const { strings } = useStrings()

    const handleMouseEnter = () => {
        setTitle(strings.emailButton.copy)
        setSubtitle(strings.emailButton.email)
    }

    const handleMouseLeave = () => {
        setTitle(strings.ledScreen.title)
        setSubtitle('')
    }

    const handleCopy = () => {
        navigator.clipboard.writeText('ostoaleonardo.dev@gmail.com')
        setTitle(strings.emailButton.copied)
        setSubtitle('')
    }

    return (
        <footer className='w-full h-fit flex items-center justify-end mt-2 z-20'>
            <button
                onClick={handleCopy}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className='w-fit bg-white aspectd-square cursor-pointer leading-none px-2 py-1'>
                <span className='flex items-center text-neutral-900 text-sm font-oswald uppercase gap-2'>
                    <Icons.Copy />
                    ostoaleonardo.dev@gmail.com
                </span>
            </button>
        </footer>
    )
}