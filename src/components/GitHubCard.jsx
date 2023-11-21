import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { retrieveContributionData } from '../scripts/github'

export function GitHubCard() {
    const [contributions, setContributions] = useState([])

    useEffect(() => {
        const getGitHubData = async () => {
            const contributions = await retrieveContributionData()
            setContributions(contributions)
        }

        getGitHubData()
    }, [])

    const getMonths = () => {
        const months = []
        contributions.forEach((day) => {
            const date = new Date(day.date)
            const month = date.toLocaleString('default', { month: 'short' })
            if (months.length === 0) {
                months.push(month)
            } else if (months[months.length - 1] !== month) {
                months.push(month)
            }
        })

        return months
    }


    return (
        <a href='https://github.com/ostoaleonardo' target='_blank' aria-label='GitHub profile'
            className='relative flex flex-col justify-between col-span-2 rounded-2xl sm:rounded-3xl bg-github max-lg:bg-github-card bg-cover overflow-hidden p-4 sm:p-6 md:p-10 hover:scale-105 transition-all duration-300'>
            <div className='absolute flex top-4 sm:top-8 right-4 sm:right-8'>
                <FontAwesomeIcon
                    className='text-slate-100 text-xs md:text-sm'
                    icon={faUpRightFromSquare}
                />
            </div>
            <header className='flex items-center w-full h-auto'>
                <FontAwesomeIcon
                    className='text-slate-100 text-xl xl:text-4xl md:text-3xl sm:text-xl mr-1 md:mr-3'
                    icon={faGithub}
                />
                <span className='text-slate-100 text-sm sm:text-xl md:text-2xl xl:text-3xl font-bold'>
                    GitHub
                </span>
            </header>
            <footer className='w-full flex flex-col gap-2'>
                <span className='w-full hidden lg:flex items-end justify-between'>
                    {getMonths().slice(-8).map((month, index) => {
                        return <span key={index} className='text-slate-100 text-xs capitalize'>{month}</span>
                    })}
                </span>
                <ul className='w-auto h-auto hidden lg:grid grid-rows-7 grid-flow-col gap-0.5 xl:gap-1'>
                    {contributions.slice(120, 365).map((day, index) => {
                        if (day.contributionCount === 0) {
                            return <li key={index} className='w-2 xl:w-2.5 bg-white bg-opacity-5 rounded-[.15rem] aspect-square' />
                        }
                        if (day.contributionCount < 3) {
                            return <li key={index} className='w-2 xl:w-2.5 bg-github-squeares bg-opacity-20 border-1 border-github-squeares border-opacity-10 rounded-[.15rem] aspect-square' />
                        }
                        if (day.contributionCount < 5) {
                            return <li key={index} className='w-2 xl:w-2.5 bg-github-squeares bg-opacity-30 border-1 border-github-squeares border-opacity-10 rounded-[.15rem] aspect-square' />
                        }
                        if (day.contributionCount >= 5) {
                            return <li key={index} className='w-2 xl:w-2.5 bg-github-squeares bg-opacity-80 border-1 border-github-squeares border-opacity-10 rounded-[.15rem] aspect-square' />
                        }
                    })}
                </ul>
                <span className='flex lg:hidden text-slate-100 text-xs sm:text-lg md:text-xl xl:text-2xl font-medium line-clamp-1'>
                    My GitHub profile
                </span>
            </footer>
        </a>
    )
}
