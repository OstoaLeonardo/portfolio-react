import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function IconCard({ icon }) {
    return (
        <div className='absolute flex top-4 sm:top-6 right-4 sm:right-6'>
            <FontAwesomeIcon
                className='text-neutral-100 text-xs md:text-sm'
                icon={icon}
            />
        </div>
    )
}