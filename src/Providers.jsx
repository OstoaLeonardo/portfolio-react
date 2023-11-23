import { LanguageProvider } from './context/languageContext.jsx'

export function Providers({children}) {
    return (
        <LanguageProvider>
            {children}
        </LanguageProvider>
    )
}