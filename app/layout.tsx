'use client'
import "./global.scss"
import {LanguageProvider} from './contexts/userLanguage'

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html>
			<body>
				<LanguageProvider>
					{children}
				</LanguageProvider>
			</body>
		</html>
	);
}