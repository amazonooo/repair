import { FC } from 'react'
import Button from '../ui/Button'

const Header: FC = () => {
  return (
		<header className='pt-7 lg:pt-10 flex flex-col items-center justify-center'>
			<h1
				style={{
					fontFamily: 'Gunterz',
				}}
				className='uppercase mr-14 lg:mr-24 relative pb-16 md:pb-24 lg:pb-28 text-3xl md:text-4xl md:leading-[54px] lg:text-[3.5rem] lg:leading-[70px]'
			>
				Prof{' '}
				<span className='absolute text-primary top-[24%] left-[6rem] md:top-[22%] md:left-[7.6rem] lg:top-[25%] lg:left-[10.8rem] xl:left-[10.8rem] xl:top-[25%]'>
					Pol
				</span>
			</h1>
			<div className='flex flex-col items-center text-center justify-center'>
				<h1
					style={{
						fontFamily: 'Gunterz',
					}}
					className='md:mt-0 uppercase text-black text-2xl md:text-3xl md:leading-[48px] lg:text-[3rem] lg:leading-[64px]'
				>
					Полусухая стяжка пола
				</h1>
				<p className='mt-3 sm:text-[1.2rem] md:max-w-[608px] max-w-[280px] md:leading-7 md:text-xl lg:text-2xl lg:leading-7'>
					Мы предлагаем услуги по устройству полусухой стяжки пола, выполненной
					механизированным способом по немецкой технологии
				</p>
				<Button title='Связаться' />
			</div>
		</header>
	)
}

export default Header