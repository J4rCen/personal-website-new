'use client'
import "./global.scss"
import i18n from '@/i18n/index'
import { useEffect } from "react"

export default function RootLayout({ children }: { children: React.ReactNode }) {

	useEffect(() => {
		const lan = navigator.language.split('-')[0]
		i18n.changeLanguage(lan)
	}, [])

	return (
		<html>
			<body>
				{children}
			</body>
		</html>
	);
}