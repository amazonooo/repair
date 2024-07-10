import Image from 'next/image'
import { FC, Suspense } from 'react'
import Button from '../ui/Button'

const Header: FC = () => {
  return (
		<header className='md:grid pt-7 px-4 md:pt-0 md:px-0 gap-5 md:grid-cols-2'>
			<Suspense>
				<Image
					className='pointer-events-none rounded-[3px] w-full h-[422px] md:order-1 md:h-[450px] lg:h-[600px]'
					src='/header.png'
					alt='header'
					width={320}
					height={422}
				/>
			</Suspense>
			<div className='flex flex-col md:justify-center xl:pl-[132px] md:ml-6 2xl:ml-24 xl:ml-8'>
				<h1 style={{
					fontFamily: 'Gunterz'
				}} className='md:mt-0 uppercase mt-5 text-black text-[2rem] leading-8 font-medium xl:text-[3rem] lg:max-w-[548px] lg:leading-[61px] md:leading-9 md:max-w-[360px] md:text-[2.5rem]'>
					Полусухая стяжка пола
				</h1>
				<p className='mt-3 text-base md:max-w-[608px] md:leading-7 md:text-xl lg:text-2xl lg:leading-7'>
					Мы предлагаем услуги по устройству полусухой стяжки пола, выполненной
					механизированным способом по немецкой технологии
				</p>
				<Button title='Связаться' />
			</div>
		</header>
	)
}

export default Header