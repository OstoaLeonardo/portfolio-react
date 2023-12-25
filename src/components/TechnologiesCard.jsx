import React from 'react'
import { HTML5Icon, CSS3Icon, ReactIcon, NextJsIcon, ExpoIcon, TailwindIcon, JavaScriptIcon, GitHubIcon, FigmaIcon } from './Icons.jsx'
import { BorderCard } from './BorderCard.jsx'

export function TechnologiesCard() {
    return (
        <BorderCard size='small' title='Tech' subtitle='nologies'>
            <div className='w-full h-full grid grid-cols-4 items-center place-items-center bg-neutral-800 p-2 md:p-5'>
                <HTML5Icon />
                <CSS3Icon />
                <JavaScriptIcon />
                <ReactIcon />
                <TailwindIcon />
                <NextJsIcon />
                <ExpoIcon />
                <GitHubIcon />
                <FigmaIcon />
            </div>
        </BorderCard>
    )
}
