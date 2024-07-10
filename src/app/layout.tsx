import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Repair',
	description: 'We offer you services for installing semi-dry floor screed.',
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
				{children}
			</body>
		</html>
	)
}
