import { strings as stgs } from '../constants'
import { useLanguage } from './useLanguage.js'

export function useStrings() {
    const { language } = useLanguage()
    const strings = stgs[language]

    return {
        strings
    }
}