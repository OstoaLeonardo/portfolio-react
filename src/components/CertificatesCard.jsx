import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

const certificates = ['JavaScript', 'React', 'Diseño UI/UX']


export function CertificatesCard() {
    const url = 'https://firebasestorage.googleapis.com/v0/b/portfolio-ostoa-leonardo.appspot.com/o/certificates.png?alt=media&token=f79e5e6c-f504-46b0-9703-2c189e078b16'

    const backgroundImageStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)), url(${url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }

    return (
        <a href='https://codigofacilito.com/usuarios/ostoaleonardo' target='_blank'
            className='relative flex flex-col justify-center md:justify-start row-span-1 col-span-1 md:col-span-2 aspect-square md:aspect-auto rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-600 dark:bg-slate-700 p-4 sm:p-6 md:p-10 hover:scale-105 transition-all duration-300 cursor-pointer' style={backgroundImageStyle}>
            <div className='absolute flex top-4 sm:top-8 right-4 sm:right-8'>
                <FontAwesomeIcon
                    className='text-slate-200 text-xs md:text-sm'
                    icon={faUpRightFromSquare}
                />
            </div>
            <header className='hidden sm:flex items-center w-full h-auto'>
                <FontAwesomeIcon
                    className='text-slate-200 text-xl xl:text-4xl md:text-3xl sm:text-xl mr-1 md:mr-3'
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
            <ul className='hidden md:flex flex-row flex-wrap mt-3 sm:mt-6 text-slate-200 text-xs sm:text-sm md:text-sm xl:text-base font-medium gap-1 md:gap-2'>
                {certificates.map((certificate, index) => (
                    <li key={index} className='text-neutral-800 bg-slate-100 font-medium rounded-full px-2'>{certificate}</li>
                ))}
            </ul>
        </a>
    )
}
