import '../../styles/weather.css'

export function WeatherWidget({ isNight }) {
    const bgTime = isNight ? 'bg-[#2f3475]' : 'bg-[#98cfff]'

    return (
        <div className={`h-full w-full flex items-center ${bgTime}`}>
            <div className='absolute top-0 right-0 widget'>
                {isNight && (
                    <div className='moon-night'>
                        <div className='moon' />
                    </div>
                )}

                {!isNight && (
                    <div className='sunny-day'>
                        <div className='sun' />
                    </div>
                )}
            </div>
        </div>
    )
}