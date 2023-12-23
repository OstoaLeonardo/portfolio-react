import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { getDiscordStatus } from '../scripts/discord.js'
import { BorderCard } from './BorderCard.jsx'

export function DiscordStatusCard() {
    const urlImg = 'https://cdn.discordapp.com/app-assets/'
    const urlImgSpotify = 'https://developer.spotify.com/images/guidelines/design/icon3@2x.png'
    const urlGif = 'https://www.icegif.com/wp-content/uploads/2021/10/icegif-300.gif'
    const [status, setStatus] = useState('Offline')
    const [activity, setActivity] = useState('')
    const [details, setDetails] = useState('')
    const [appId, setAppId] = useState('')
    const [assetId, setAssetId] = useState('')
    const [image, setImage] = useState('')
    const statusMap = {
        online: 'Online',
        iddle: 'Idle',
        dnd: 'Do not disturb'
    }

    useEffect(() => {
        getStatus()
    }, [appId, assetId])

    const getStatus = async () => {
        try {
            const status = await getDiscordStatus()
            const { activities, discord_status } = status

            setStatus(statusMap[discord_status] || 'Offline')

            const vsActivity = activities.find(activity => activity.name === 'Visual Studio Code')
            const spotifyActivity = activities.find(activity => activity.name === 'Spotify')
            const otherActivity = activities.find(activity => activity.name !== 'Visual Studio Code' && activity.name !== 'Spotify')

            if (otherActivity) {
                setActivity('Jugando a')
                setDetails(otherActivity.name)
                setImage(urlGif)
            } else if (spotifyActivity) {
                setActivity('Escuchando')
                setDetails(spotifyActivity.name)
                setImage(urlImgSpotify)
            } else if (vsActivity) {
                setActivity('Visual Studio Code')
                setAppId(vsActivity.application_id)
                setDetails(vsActivity.assets.large_text)
                setAssetId(vsActivity.assets.large_image)
                setImage(urlImg + appId + '/' + assetId)
            } else {
                setActivity('')
                setDetails('')
                setImage('')
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <BorderCard size='small' titleBorder='Discord' titleBottom={!activity && 'Discord'}>
            <div className='w-full h-full flex justify-center items-center bg-discord-light dark:bg-discord-dark'>
                <FontAwesomeIcon
                    className='hidden group-hover:flex text-stone-100 text-xs sm:text-sm md:text-5xl xl:text-8xl'
                    icon={faDiscord}
                />
                <span className='flex group-hover:hidden text-[3vw] font-archivo-black sm:font-outline-1 uppercase'>
                    {status}
                </span>
                <div className='absolute right-2 bottom-2 md:right-3 md:bottom-3 xl:right-4 xl:bottom-4 flex flex-row justify-center items-center'>
                    <div className='hidden md:flex flex-col justify-center items-end'>
                        <span className='text-slate-100 sm:text-xs xl:text-sm font-oswald uppercase'>
                            {activity}
                        </span>
                        <span className='text-slate-100 font-medium sm:text-xs md:text-xs xl:text-sm font-oswald opacity-70 uppercase'>
                            {details}
                        </span>
                    </div>
                    {image && <img className='h-4 w-4 md:h-8 md:w-8 xl:h-10 xl:w-10 ml-2' src={image} alt='Image Activity' />}
                </div>
            </div>
        </BorderCard>
    )
}
