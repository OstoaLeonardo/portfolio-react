import { useEffect, useState } from 'react'
import { BorderCard, TitleCard, IconCard } from '../Card'
import { retrieveContributionData } from '../../scripts'
import { useLanguage } from '../../hooks'
import { strings } from '../../constants'
import Icons from '../UI'

export function GitHubCard() {
    const { language } = useLanguage()
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
        <BorderCard
            size='medium'
            title='GitHub'
            subtitle={strings[language].socialCard.subtitle}
            titleTop='GitHub'
        >
            <a href='https://github.com/ostoaleonardo' target='_blank' aria-label='GitHub profile'
                className='w-full h-full flex flex-col justify-between bg-github max-lg:bg-github-card bg-cover p-2 md:p-4'>
                <IconCard ico={<Icons.ArrowRightUp />} />
                <header className='opacity-0 group-hover:opacity-100'>
                    <TitleCard text='GitHub' />
                </header>
                <footer className='w-full flex flex-col gap-2'>
                    <span className='w-full hidden lg:flex items-end justify-between'>
                        {getMonths().slice(-8).map((month, index) => {
                            return <span key={index} className='text-neutral-100 text-xs font-oswald uppercase'>{month}</span>
                        })}
                    </span>
                    <ul className='w-auto h-auto hidden lg:grid grid-rows-7 grid-flow-col gap-0.5 xl:gap-1'>
                        {contributions.slice(120, 365).map((day, index) => {
                            if (day.contributionCount === 0) {
                                return <li key={index} className='w-2 xl:w-2 bg-white bg-opacity-5 rounded-[.15rem] aspect-square' />
                            }
                            if (day.contributionCount < 3) {
                                return <li key={index} className='w-2 xl:w-2 bg-github-squeares bg-opacity-20 border-1 border-github-squeares border-opacity-10 rounded-[.15rem] aspect-square' />
                            }
                            if (day.contributionCount < 5) {
                                return <li key={index} className='w-2 xl:w-2 bg-github-squeares bg-opacity-30 border-1 border-github-squeares border-opacity-10 rounded-[.15rem] aspect-square' />
                            }
                            if (day.contributionCount >= 5) {
                                return <li key={index} className='w-2 xl:w-2 bg-github-squeares bg-opacity-80 border-1 border-github-squeares border-opacity-10 rounded-[.15rem] aspect-square' />
                            }
                        })}
                    </ul>
                    <span className='flex lg:hidden text-neutral-100 text-xs sm:text-lg md:text-xl xl:text-2xl font-oswald line-clamp-1'>
                        GitHub
                    </span>
                </footer>
            </a>
        </BorderCard>
    )
}
