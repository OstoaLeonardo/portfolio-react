import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function IconLink({ href, icon }) {
    return (
        <a href={href} target='_blank'
            className='flex bg-neutral-900 justify-center items-center hover:scale-125 transition-all'>
            <FontAwesomeIcon
                className='text-slate-100 text-xs p-2'
                icon={icon}
            />
        </a>
    )
}