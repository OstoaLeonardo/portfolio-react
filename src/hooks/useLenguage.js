import { useContext } from 'react'
import { LanguageContext } from '../context/languageContext.jsx'

export default function useLenguage() {
    const { language, toggleLanguage } = useContext(LanguageContext)

    return {
        language,
        toggleLanguage
    }
}