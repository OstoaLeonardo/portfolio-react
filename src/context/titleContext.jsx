import { createContext, useState } from 'react'

export const TitleContext = createContext()

export const TitleProvider = ({ children }) => {
    const [title, setTitle] = useState('Welcome')
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