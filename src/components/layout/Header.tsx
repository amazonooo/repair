import { FC } from 'react'
import Button from '../ui/Button'

const Header: FC = () => {
  return (
		<header className='px-5 py-20 sm:px-10 md:px-14 lg:p-24 flex flex-col items-center justify-center overflow-hidden'>
			<div className='relative flex flex-col items-center justify-center h-full w-full py-20 md:py-16'>
				<div className='absolute w-[1155px] sm:w-[1230px] md:w-[1260px] lg:w-[1490px] h-[.1px] rotate-90 -left-[575px] sm:-left-[613px] md:-left-[628px] lg:-left-[743px] top-0 bg-black'></div>
				<div className='absolute w-[2520px] h-[1px] bottom-0 bg-black'></div>
				<div className='absolute w-[1155px] sm:w-[1230px] md:w-[1260px] lg:w-[1490px] h-[.1px] rotate-90 -right-[578px] sm:-right-[615px] md:-right-[630px] lg:-right-[745px] top-0 bg-black'></div>
				<div className='absolute w-[2520px] h-[1px] top-0 bg-black'></div>

				<div className='absolute w-4 h-4 bg-primary -top-2 -left-1.5'></div>
				<div className='absolute w-4 h-4 bg-primary -bottom-2 -left-1.5'></div>
				<div className='absolute w-4 h-4 bg-primary -top-2 -right-2'></div>
				<div className='absolute w-4 h-4 bg-primary -bottom-2 -right-2'></div>

				<h1
					style={{
						fontFamily: 'Gunterz',
					}}
					className='uppercase mr-14 lg:mr-24 relative pb-6 md:pb-24 sm:pb-16 text-base md:text-2xl md:leading-[54px] lg:text-[1.5rem] lg:leading-[50px]'
				>
					Prof{' '}
					<span className='absolute text-primary top-[24%] left-13 sm:top-[17%] sm:left-13 md:top-[14%] md:left-20 lg:left-20 lg:top-[13%]'>
						Pol
					</span>
				</h1>
				<div className='flex flex-col items-center text-center justify-center'>
					<h1
						style={{
							fontFamily: 'Gunterz',
						}}
						className='md:mt-0 uppercase text-black text-[2rem] leading-[40px] sm:text-[3rem] sm:leading-[60px] md:text-[4rem] md:leading-[70px] lg:text-[5rem] xl:text-[6rem] lg:leading-[99px]'
					>
						<span className='text-primary'>Полусухая</span>
						<br /> стяжка
						<br className='md:hidden' /> пола
					</h1>
					<p className='sm:text-base mt-4 md:max-w-[608px] max-w-[280px] md:leading-7 md:text-xl lg:text-2xl lg:leading-7'>
						Мы предлагаем услуги по устройству полусухой стяжки пола,
						выполненной механизированным способом по немецкой технологии
					</p>
					<Button title='Связаться' />
				</div>
			</div>
		</header>
	)
}

export default Header