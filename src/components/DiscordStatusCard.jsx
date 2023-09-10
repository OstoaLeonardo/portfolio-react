import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'

export function DiscordStatusCard() {
    const url = 'https://api.lanyard.rest/v1/users/771148579356016650'
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
            const response = await axios.get(url)
            const { activities, discord_status } = response.data.data

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
        <div className='relative flex justify-center items-center col-span-1 aspect-square rounded-2xl sm:rounded-3xl overflow-hidden bg-discord-light dark:bg-discord-dark'>
            <FontAwesomeIcon
                className='text-stone-100 text-xs sm:text-sm md:text-lg xl:text-2xl mr-1 sm:mr-2'
                icon={faDiscord}
            />
            <p className='text-slate-100 font-bold text-base sm:text-2xl xl:text-3xl capitalize'>
                {status}
            </p>
            <div className='absolute right-2 bottom-2 md:right-3 md:bottom-3 xl:right-4 xl:bottom-4 flex flex-row justify-center items-center'>
                <div className='hidden md:flex flex-col justify-center items-end'>
                    <p className='text-slate-200 font-semibold sm:text-xs md:text-xs xl:text-base'>
                        {activity}
                    </p>
                    <p className='text-slate-300 font-medium sm:text-xs md:text-xs xl:text-sm'>
                        {details}
                    </p>
                </div>
                {image && (
                    <img className='h-6 w-6 md:h-8 md:w-8 xl:h-10 xl:w-10 rounded-xl ml-2'
                        src={image} alt='Image Activity' />
                )}
            </div>
        </div>
    )
}
