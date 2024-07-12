import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const manrope = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: {
		default: 'ProfPol',
		template: '%s - PROFPOL',
	},
	description: 'Предлагаем Вам услуги по устройству полусухой стяжки пола.',
	keywords: 'Стяжка пола, Полусухая стяжка пола, в Сургуте',
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
