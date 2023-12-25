import { useContext } from 'react'
import { LanguageContext } from '../context/languageContext.jsx'

export function useLanguage() {
    const { language, toggleLanguage } = useContext(LanguageContext)

    return {
        language,
        toggleLanguage
    }
}