import { createContext, useEffect, useState } from 'react'

export const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en')

    const toggleLanguage = () => {
        if (language === 'en') {
            setLanguage('es')
            setLanguageLocalStorage('es')
        }
        else {
            setLanguage('en')
            setLanguageLocalStorage('en')
        }
    }

    const setLanguageLocalStorage = (language) => {
        localStorage.setItem('language', language)
    }

    useEffect(() => {
        const getLanguage = () => {
            const language = localStorage.getItem('language')
            if (language) setLanguage(language)
        }

        getLanguage()
    }, [])

    return (
        <LanguageContext.Provider
            value={{
                language,
                toggleLanguage
            }}
        >
            {children}
        </LanguageContext.Provider>
    )
}