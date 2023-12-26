import { createContext, useState } from 'react'
import { useLanguage } from '../hooks'
import { strings } from '../constants'

export const TitleContext = createContext()

export const TitleProvider = ({ children }) => {
    const { language } = useLanguage()
    const [title, setTitle] = useState(strings[language].ledScreen.title)
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