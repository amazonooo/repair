import { FC } from 'react'
import Title from '../ui/Title'

const Price: FC = () => {
  return (
		<section className='pt-16 md:pt-24 px-4 lg:px-0'>
			<Title title='Цена' />
			<div className='flex flex-col gap-7 lg:gap-44 justify-center md:items-center md:flex-row md:mx-6 2xl:mx-24 xl:mx-8'>
				<div>
					<img
						src='/price.jpg'
						alt='price-img'
						className='rounded-lg sm:h-[500px] md:h-[653px] h-[230px] w-full md:w-[750px]'
					/>
				</div>
				<div className='text-[.875rem] leading-[15px] sm:leading-[25px] sm:text-xl font-medium flex flex-col gap-4 lg:text-2xl lg:gap-9 lg:max-w-[475px]'>
					<p>Цена зависит от площади и толщины слоя</p>
					<p>Бесплатный замер толщины</p>
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