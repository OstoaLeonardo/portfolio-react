import { BorderCard } from '../Card'
import { useStrings } from '../../hooks'
import Icons from '../UI'

export function TechnologiesCard() {
    const { strings } = useStrings()

    return (
        <BorderCard
            size='small'
            title={strings.technologiesCard.title}
            subtitle={strings.technologiesCard.subtitle}
        >
            <div className='w-full h-full grid grid-cols-4 items-center place-items-center bg-neutral-800 p-2 md:p-5'>
                <Icons.HTML5 />
                <Icons.CSS3 />
                <Icons.JavaScript />
                <Icons.React />
                <Icons.Tailwind />
                <Icons.NextJs />
                <Icons.Expo />
                <Icons.GitHub />
                <Icons.Figma />
            </div>
        </BorderCard>
    )
}
