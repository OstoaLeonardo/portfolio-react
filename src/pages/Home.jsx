import { AboutMeCard } from '../components/AboutMeCard.jsx'
import { DiscordStatusCard } from '../components/DiscordStatusCard.jsx'
import { GitHubCard } from '../components/GitHubCard.jsx'
import { InfoCard } from '../components/InfoCard.jsx'
import { PlayingNowSpotifyCard } from '../components/PlayingNowSpotifyCard.jsx'
import { ProjectsCard } from '../components/ProjectsCard.jsx'
import { SocialNetworkCard } from '../components/SocialNetworkCard.jsx'
import { SolidIconCard } from '../components/SolidIconCard.jsx'
import { TechnologiesCard } from '../components/TechnologiesCard.jsx'
import { WeatherCard } from '../components/WeatherCard.jsx'
import { CertificatesCard } from '../components/CertificatesCard.jsx'
import { Transition } from '../components/Transition.jsx'
import { ChatAI } from '../components/ChatAI.jsx'
import { PhrasesCard } from '../components/PhrasesCard.jsx'
import { CurriculumCard } from '../components/CurriculumCard.jsx'

const Home = () => {
    return (
        <>
            <Transition />
            <main className='flex flex-col place-items-center p-6'>
                <div className='grid grid-cols-3 md:grid-cols-4 gap-2 md:gap-4 max-w-5xl md:max-w-5xl xl:max-w-7xl'>
                    <AboutMeCard />
                    <CurriculumCard link='https://docs.google.com/document/d/1K_RaBKxsiGUQUHaNt_yg91-W8BYAfSpAQM-THx3PKgY/edit?usp=sharing' />
                    <SolidIconCard link='mailto:ostoaleonardo.dev@gmail.com' icon='envelope' label='Email' />
                    <InfoCard header='Age' body='21' footer='Years old' color='purple' />
                    <SocialNetworkCard link='https://www.linkedin.com/in/ostoaleonardo/' icon='linkedin-in' color='linkedin' label='LinkedIn profile' />
                    <ProjectsCard />
                    <GitHubCard />
                    <TechnologiesCard />
                    <InfoCard body='+3' footer='Years of experience' color='red' />
                    <PlayingNowSpotifyCard />
                    <SocialNetworkCard link='https://www.behance.net/ostoaleonardo' icon='behance' color='behance' label='Behance profile' />
                    <DiscordStatusCard />
                    <SocialNetworkCard link='https://twitter.com/ostoaleonardo_' icon='twitter' color='twitter' label='Twitter profile' />
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
