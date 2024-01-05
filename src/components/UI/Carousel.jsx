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
import { useLanguage, useStrings } from '../../hooks'

export function Carousel() {
    const { strings } = useStrings()
    const { language } = useLanguage()

    return (
        <div className='h-full flex flex-row overflow-x-scroll overflow-y-hidden scrollbar-hide'>
            <AboutMeCard />
            <InfoCard
                header={strings.yearsOldCard.header}
                body={'21'}
                footer={strings.yearsOldCard.footer}
                title={language === 'en' ? strings.yearsOldCard.footer : strings.yearsOldCard.header}
                color='purple'
            />
            <TechnologiesCard />
            <SocialCard link='https://www.linkedin.com/in/ostoaleonardo/' icon='linkedin-in' color='linkedin' label='LinkedIn profile' />
            <ProjectsCard />
            <GitHubCard />
            <InfoCard
                body='+3'
                footer={strings.experienceCard.footer}
                title={strings.experienceCard.title}
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
