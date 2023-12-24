import { useContext } from 'react'
import { LanguageContext } from '../context/languageContext.jsx'

export function useLenguage() {
    const { language, toggleLanguage } = useContext(LanguageContext)

    return {
        language,
        toggleLanguage
    }
}