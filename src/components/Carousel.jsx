import { AboutMeCard } from './AboutMeCard.jsx'
import { InfoCard } from './InfoCard.jsx'
import { TechnologiesCard } from './TechnologiesCard.jsx'
import { SocialNetworkCard } from './SocialNetworkCard.jsx'
import { ProjectsCard } from './ProjectsCard.jsx'
import { GitHubCard } from './GitHubCard.jsx'
import { SpotifyCard } from './SpotifyCard.jsx'
import { DiscordStatusCard } from './DiscordStatusCard.jsx'
import { WeatherCard } from './WeatherCard.jsx'
import { ChatAI } from './ChatAI.jsx'
import { useLenguage } from '../hooks/useLenguage'
import { strings } from '../constants/strings.js'

export function Carousel() {
    const { language } = useLenguage()

    return (
        <div className='h-full flex flex-row overflow-x-scroll overflow-y-hidden scrollbar-hide'>
            <AboutMeCard />
            <InfoCard
                header={strings[language].yearsOldCard.header}
                body='21'
                footer={strings[language].yearsOldCard.footer}
                color='purple'
            />
            <TechnologiesCard />
            <SocialNetworkCard link='https://www.linkedin.com/in/ostoaleonardo/' icon='linkedin-in' color='linkedin' label='LinkedIn profile' />
            <ProjectsCard />
            <GitHubCard />
            <InfoCard
                body='+3'
                footer={strings[language].experienceCard.footer}
                color='red'
            />
            <SpotifyCard />
            <SocialNetworkCard link='https://www.behance.net/ostoaleonardo' icon='behance' color='behance' label='Behance profile' />
            <DiscordStatusCard />
            <SocialNetworkCard link='https://twitter.com/ostoaleonardo_' icon='twitter' color='twitter' label='Twitter profile' />
            <WeatherCard />
            <ChatAI />
        </div>
    )
}
