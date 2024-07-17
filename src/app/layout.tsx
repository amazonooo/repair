import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const manrope = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
	metadataBase: new URL('https://profpol.online'),
	title: {
		default: 'ProfPol',
		template: '%s - PROFPOL',
	},
	openGraph: {
		description: 'Услуги по полусухой стяжке пола по всему ХМАО.',
		images: 'https://profpol.online/images/og-image.jpg',
	},
	description: 'Предлагаем Вам услуги по устройству полусухой стяжки пола.',
	keywords: [
		'Стяжка пола',
		'Полусухая стяжка пола',
		'Полусухая стяжка в Сургуте',
		'Стяжка пола в Сургуте',
		'Полусухая стяжка в ХМАО',
		'Полусухая стяжка пола в ХМАО',
	],
	robots: {
		index: true,
		follow: true,
	},
	creator: 'ProfPol Team',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
		<html lang='en'>
			<head>
				<link rel='icon' href='/logo.png' sizes='any' />
			</head>
			<body className={manrope.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
