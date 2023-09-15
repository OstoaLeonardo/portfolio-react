import { AboutMeCard } from '../components/AboutMeCard'
import { DarkModeCard } from '../components/DarkModeCard'
import { DiscordStatusCard } from '../components/DiscordStatusCard'
import { GitHubCard } from '../components/GitHubCard'
import { InfoCard } from '../components/InfoCard'
import { PlayingNowSpotifyCard } from '../components/PlayingNowSpotifyCard'
import { ProjectsCard } from '../components/ProjectsCard'
import { SocialNetworkCard } from '../components/SocialNetworkCard'
import { SolidIconCard } from '../components/SolidIconCard'
import { TechnologiesCard } from '../components/TechnologiesCard'
import { WeatherCard } from '../components/WeatherCard'
import { CertificatesCard } from '../components/CertificatesCard'
import { Transition } from '../components/Transition'
import { ChatAI } from '../components/ChatAI'
import { PhrasesCard } from '../components/PhrasesCard'
import { CurriculumCard } from '../components/CurriculumCard'

const Home = () => {
    return (
        <>
            <Transition />
            <main className='flex flex-col place-items-center p-6'>
                <div className='grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-4 max-w-5xl md:max-w-5xl xl:max-w-7xl'>
                    <AboutMeCard />
                    <CurriculumCard link={'https://docs.google.com/document/d/1K_RaBKxsiGUQUHaNt_yg91-W8BYAfSpAQM-THx3PKgY/edit?usp=sharing'} />
                    <SolidIconCard link={'mailto:ostoaleonardo.dev@gmail.com'} icon={'envelope'} />
                    <InfoCard header={'Age'} body={'21'} footer={'Years old'} color={'purple'} />
                    <SocialNetworkCard link={'https://www.linkedin.com/in/ostoa-leonardo/'} icon={'linkedin-in'} color={'linkedin'} />
                    <ProjectsCard />
                    <GitHubCard />
                    <TechnologiesCard />
                    <InfoCard header={''} body={'+3'} footer={'Years of experience'} color={'yellow'} />
                    <PlayingNowSpotifyCard />
                    <SocialNetworkCard link={'https://www.behance.net/ostoaleonardo'} icon={'behance'} color={'behance'} />
                    <DiscordStatusCard />
                    <SocialNetworkCard link={'https://twitter.com/ostoaleonardo_'} icon={'twitter'} color={'twitter'} />
                    <WeatherCard />
                    <ChatAI />
                    <CertificatesCard />
                    <PhrasesCard />
                </div>
            </main>
        </>
    )
}

export default Home
