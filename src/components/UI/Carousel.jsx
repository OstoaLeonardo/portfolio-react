import {
    AboutMeCard,
    InfoCard,
    TechnologiesCard,
    SocialCard,
    ProjectsCard,
    GitHubCard,
    SpotifyCard,
    DiscordCard,
    WeatherCard,
    ChatAI
} from '../Cards'
import { strings } from '../../constants'
import { useLanguage } from '../../hooks'

export function Carousel() {
    const { language } = useLanguage()

    return (
        <div className='h-full flex flex-row overflow-x-scroll overflow-y-hidden scrollbar-hide'>
            <AboutMeCard />
            <InfoCard
                header={strings[language].yearsOldCard.header}
                body={'21'}
                footer={strings[language].yearsOldCard.footer}
                title={language === 'en' ? strings[language].yearsOldCard.footer : strings[language].yearsOldCard.header}
                color='purple'
            />
            <TechnologiesCard />
            <SocialCard link='https://www.linkedin.com/in/ostoaleonardo/' icon='linkedin-in' color='linkedin' label='LinkedIn profile' />
            <ProjectsCard />
            <GitHubCard />
            <InfoCard
                body='+3'
                footer={strings[language].experienceCard.footer}
                title={strings[language].experienceCard.title}
                color='red'
            />
            <SpotifyCard />
            <SocialCard link='https://www.behance.net/ostoaleonardo' icon='behance' color='behance' label='Behance profile' />
            <DiscordCard />
            <WeatherCard />
            <ChatAI />
        </div>
    )
}
