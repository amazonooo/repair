import { FC } from 'react'

const Price: FC = () => {
  return (
		<section className='pt-16 md:pt-20 px-4'>
			<h1 className='uppercase text-black text-center text-2xl font-extrabold leading-9 pb-9 lg:pb-16 md:text-4xl sm:text-3xl lg:text-5xl'>
				Цена
			</h1>
			<div className='flex flex-col gap-7 sm:justify-between md:justify-between sm:items-center sm:flex-row md:mx-6 2xl:mx-24 xl:mx-8'>
				<div>
					<img
						src='/price.jpg'
						alt='price-img'
						className='rounded-md md:h-[653px] md:w-[750px]'
					/>
				</div>
				<div className='text-[.875rem] leading-[15px] sm:leading-[25px] sm:text-xl font-medium flex flex-col gap-4 lg:text-2xl lg:gap-9 lg:max-w-[475px]'>
					<p>Цена зависит от площади и толщины слоя.</p>
					<p>
						От <span className='text-primary font-bold'>1000 кв</span> за работу
						с вашим материалом – от 300 руб кв.м.
					</p>
					<p>
						С нашим материалом – от
						<span className='text-primary font-bold'>550 руб</span> кв.м.
					</p>
				</div>
			</div>
		</section>
	)
}

export default Price