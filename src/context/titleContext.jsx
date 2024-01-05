import { createContext, useState } from 'react'
import { useStrings } from '../hooks'

export const TitleContext = createContext()

export const TitleProvider = ({ children }) => {
    const { strings } = useStrings()
    const [title, setTitle] = useState(strings.ledScreen.title)
    const [subtitle, setSubtitle] = useState('')

    return (
        <TitleContext.Provider
            value={{
                title,
                setTitle,
                subtitle,
                setSubtitle,
            }}
        >
            {children}
        </TitleContext.Provider>
    )
}