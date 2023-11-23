import { useEffect, useState } from 'react'

export function useDarkMode() {
    const [theme, setTheme] = useState('dark')

    useEffect(() => {
        const getTheme = () => {
            const theme = localStorage.getItem('theme')
            if (theme === 'dark') {
                document.documentElement.classList.add('dark')
            } else {
                document.documentElement.classList.remove('dark')
            }
            setTheme(theme)
        }

        getTheme()
    }, [])

    const toggleTheme = () => {
        const theme = localStorage.getItem('theme')
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        localStorage.setItem('theme', newTheme)
        document.documentElement.classList.toggle('dark')
        setTheme(newTheme)
    }

    return {
        theme,
        toggleTheme
    }
}
