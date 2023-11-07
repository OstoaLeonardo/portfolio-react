import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const certificates = ['JavaScript', 'React', 'Diseño UI/UX']

export function CertificatesCard() {
    return (
        <a href='https://codigofacilito.com/usuarios/ostoaleonardo' target='_blank' aria-label='Certificates'
            className='relative flex flex-col justify-center md:justify-start row-span-1 col-span-1 md:col-span-2 rounded-2xl sm:rounded-3xl bg-slate-600 dark:bg-slate-800 bg-certificates-card bg-cover aspect-square sm:aspect-auto p-4 sm:p-6 md:p-10 hover:scale-105 transition-all duration-300 cursor-pointer'>
            <div className='absolute flex top-4 sm:top-8 right-4 sm:right-8'>
                <FontAwesomeIcon
                    className='text-slate-100 text-xs md:text-sm'
                    icon={faUpRightFromSquare}
                />
            </div>
            <header className='hidden sm:flex items-center w-full h-auto'>
                <FontAwesomeIcon
                    className='text-slate-100 text-xl xl:text-4xl md:text-3xl sm:text-xl mr-1 md:mr-3'
                    icon={faAward}
                />
                <p className='text-slate-100 text-sm sm:text-xl md:text-2xl xl:text-3xl font-bold'>
                    Courses
                </p>
            </header>
            <FontAwesomeIcon
                className='sm:hidden text-slate-100 text-2xl sm:text-6xl xl:text-8xl'
                icon={faAward}
            />
            <ul className='hidden md:flex flex-row flex-wrap mt-3 sm:mt-6 gap-1 md:gap-5'>
                {certificates.map((certificate, index) => (
                    <li key={index} className='text-slate-100 font-medium'>{certificate}</li>
                ))}
            </ul>
        </a>
    )
}
