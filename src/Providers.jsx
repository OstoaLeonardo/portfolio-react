import { LanguageProvider } from './context/languageContext.jsx'
import { TitleProvider } from './context/titleContext.jsx'

export function Providers({ children }) {
    return (
        <LanguageProvider>
            <TitleProvider>
                {children}
            </TitleProvider>
        </LanguageProvider>
    )
}