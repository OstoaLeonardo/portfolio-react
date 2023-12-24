import { useContext } from 'react'
import { TitleContext } from '../context/titleContext.jsx'

export default function useTitle() {
    const { title, setTitle, subtitle, setSubtitle } = useContext(TitleContext)

    return {
        title,
        setTitle,
        subtitle,
        setSubtitle
    }
}