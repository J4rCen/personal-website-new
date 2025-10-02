'use client'

import React, { createContext, ReactNode, useContext, useEffect, useState } from "react"

interface ILanguageProvider {
    language: string
    setLanguage: (lan: string) => void
}

const LanguageContext = createContext<ILanguageProvider | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [selectLanguage, setSelectLanguage] = useState<string>('en')

    useEffect(() => {
        const lang = navigator.language.split('-')[0]
        setSelectLanguage(lang)
    }, [])

    const setLanguage = (lan: string) => {
        setSelectLanguage(lan)
    }

    return (
        <LanguageContext.Provider value={{ language: selectLanguage, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = (): ILanguageProvider => {
    const context = useContext(LanguageContext)

    if (!context) {
        throw new Error('useLanguage должен использоваться с LanguageProvider')
    }

    return context
}
