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
	alternates: {
    canonical: new URL('https://profpol.online'),
  },
	openGraph: {
		description: 'Услуги по полусухой стяжке пола по всему ХМАО.',
		images: 'https://profpol.online/images/og-image.jpg',
	},
	description: 'Услуги по устройству полусухой стяжки пола',
	keywords: [
		'Стяжка пола',
		'Полусухая стяжка пола',
		'Полусухая стяжка в Сургуте',
		'Стяжка пола в Сургуте',
		'Полусухая стяжка в ХМАО',
		'Полусухая стяжка пола в ХМАО',
		'Сургут стяжка пола',
		'Цементная стяжка пола',
		'Полусухая стяжка пола!',
		'Рассчитать стяжку пола',
		'Пол',
		'Заливка',
		'Стяжка пола любой сложности',
		'полы в Сургуте',
		'полы в ХМАО',
		'Услуги стяжки пола ХМАО',
		'Услуги стяжки пола',
		'Полусухая стяжка пола недорого ХМАО',
		'Полусухая стяжка пола недорого',
		'Полусухая стяжка пола заказать ХМАО',
		'Полусухая стяжка пола заказать',
		'Полусухая механизированная стяжка пола ХМАО',
		'Технология полусухой стяжки пола ХМАО',
		'Полусухая стяжка Сургут',
		'Полусухая стяжка ХМАО',
		'Полусухая стяжка Ханты-Мансийск',
		'Полусухая стяжка Нижневартовск',
		'Полусухая стяжка Нягань',
		'Полусухая стяжка Радужный',
		'Как сделать полусухую стяжку пола ХМАО?',
		'Сколько стоит полусухая стяжка пола в ХМАО?',
		'Где заказать полусухую стяжку пола в ХМАО?',
		'Кто делает полусухую стяжку пола в ХМАО?',
		'Полусухая стяжка пола стоимость за м2 ХМА',
		'Полусухая стяжка пола примеры работ ХМАО',
		'Полусухая стяжка Урай',
		'Полусухая стяжка Югорск',
		'Где найти компанию для полусухой стяжки пола в ХМАО?',
		'Как ухаживать за полусухой стяжкой пола в ХМАО?',
		'Полусухая стяжка пола отзывы клиентов ХМАО',
		'Полусухая стяжка пола сертифицированные материалы ХМАО',
		'Услуги стяжки пола',
		'Полусухая стяжка пола недорого',
		'Полусухая стяжка для теплого пола',
		'Технология полусухой стяжки',
		'Полусухая стяжка пола цена',
		'пол стяжка Сургут',
		'Полусухая стяжка на деревянный пол',
		'Полусухая стяжка под ламинат',
		'Полусухая стяжка отзывы',
		'Полусухая стяжка расценки',
		'Полусухая стяжка своими руками видео',
		'Полусухая стяжка машинная',
		'Полусухая стяжка технология',
		'Полусухая стяжка расценки',
		'Полусухая стяжка для теплого пола',
		'пол стяжка',
		'пол полусухая стяжка',
		'пол стяжка Сургут',
		'пол стяжка ХМАО',
		'стяжка ХМАО',
		'стяжка Сургут',
		'profpol сугрут',
		'profpol цены',
		'profpol услуги',
		'profpol полы',
		'profpol стяжка полов',
		'profpol стяжка',
		'профпол полы',
		'профпол стяжка',
		'профпол сургут',
		'профпол ХМАО',
		'Полусухая стяжка пола стоимость',
		'Профессиональная полусухая стяжка пола',
		'Полусухая стяжка пола под ключ',
		'Полусухая цементно-песчаная стяжка',
		'Толщина полусухой стяжки',
		'Затирочные машины для полусухой стяжки',
		'Полусухая стяжка без трещин',
		'Полусухая стяжка с добавками',
		'Полусухая стяжка пола: лучшие практики',
		'Полусухая стяжка пола: часто задаваемые вопросы',
		'Полусухая стяжка пола: реальные примеры и фото',
		'Полусухая стяжка пола в офисе',
		'Полусухая стяжка пола в гараже',
		'Полусухая стяжка пола в новостройке',
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
