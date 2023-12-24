import React, { useEffect, useState } from 'react'
import { getRecentlyPlayedItem } from '../scripts/spotify.js'
import { MarqueeText } from './MarqueeText.jsx'
import { BorderCard } from './BorderCard.jsx'

export function SpotifyCard() {
    const [recentlyPlayed, setRecentlyPlayed] = useState({
        artist: 'Loading...',
        image: 'https://i.scdn.co/image/ab67616d0000b273966ee66d723744788a24dfcc'
    })

    useEffect(() => {
        const pollNowPlaying = async () => {
            try {
                const response = await getRecentlyPlayedItem()
                if (response) {
                    setRecentlyPlayed(response)
                }
            } catch (error) {
                // Handle errors
            } finally {
                // Initiate another poll
                setTimeout(pollNowPlaying, 60000)
            }
        }

        pollNowPlaying()
    }, [])

    const backgroundImageStyle = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${recentlyPlayed.image})`
    }

    return (
        <BorderCard size='medium' title='Spotify' subtitle='Recently Played' titleBottom='Spotify'>
            <div className='w-full h-full flex flex-col justify-end bg-cover bg-center p-4' style={backgroundImageStyle}>
                <div className='hidden group-hover:flex flex-col select-none'>
                    <div className='w-fit bg-spotify px-1 md:px-2 md:py-1 max-lg:mb-0 mb-2'>
                        <span className='text-[0.4rem] md:text-lg text-neutral-950 font-oswald uppercase'>
                            Recently Played
                        </span>
                    </div>

                    <MarqueeText classNames='max-w-full'>
                        <span className='text-white text-sm sm:text-xl md:text-2xl xl:text-7xl font-archivo-black line-clamp-1 uppercase'>
                            {recentlyPlayed.title}
                        </span>
                    </MarqueeText>
                    <MarqueeText>
                        <span className='text-white text-xs sm:text-lg md:text-xl xl:text-2xl font-oswald opacity-70 whitespace-nowrap uppercase'>
                            {recentlyPlayed.artist}
                        </span>
                    </MarqueeText>
                </div>
            </div>
        </BorderCard>
    )
}
