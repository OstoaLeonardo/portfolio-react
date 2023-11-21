import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import { getRecentlyPlayedItem } from '../scripts/spotify.js'
import Lottie from 'lottie-react'
import playingNow from '../assets/anims/playing-now.json'

export function PlayingNowSpotifyCard() {
    const [recentlyPlayed, setRecentlyPlayed] = useState({
        title: 'Starlight (Keep Me Afloat)',
        artist: 'Martin Garrix, DubVision, Shaun Farrugia',
        albumImageUrl: 'https://i.scdn.co/image/ab67616d0000b273966ee66d723744788a24dfcc'
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
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url(${recentlyPlayed.albumImageUrl})`
    }

    return (
        <div className='flex flex-col justify-between items-center col-span-2 md:aspect-auto rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-800 bg-cover bg-center p-4 sm:p-6 md:p-10' style={backgroundImageStyle}>
            <header className='flex items-center w-full h-auto'>
                <FontAwesomeIcon
                    className='text-slate-100 text-lg md:text-4xl mr-1 md:mr-3'
                    icon={faSpotify}
                />
                <p className='text-slate-100 text-sm sm:text-xl md:text-2xl xl:text-3xl font-bold'>
                    Spotify
                </p>
            </header>
            <footer className='flex flex-col w-full h-auto'>
                <div className='flex items-center'>
                    <Lottie animationData={playingNow} className='w-auto h-3 sm:h-5 mr-1 sm:mr-2' />
                    <p className='text-slate-100 text-sm sm:text-xl md:text-2xl xl:text-3xl font-bold line-clamp-1'>
                        {recentlyPlayed.title}
                    </p>
                </div>
                <p className='text-slate-100 text-xs sm:text-lg md:text-xl xl:text-2xl font-medium line-clamp-1'>
                    {recentlyPlayed.artist}
                </p>
            </footer>
        </div>
    )
}
