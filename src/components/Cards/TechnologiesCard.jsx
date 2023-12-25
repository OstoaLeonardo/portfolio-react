import { BorderCard } from '../Card'
import Icons from '../UI'

export function TechnologiesCard() {
    return (
        <BorderCard size='small' title='Tech' subtitle='nologies'>
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
