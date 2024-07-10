import { advantages, IAdvantages } from '@/data/advantages'
import { FC } from 'react'
import Title from '../ui/Title'

const Advantages: FC = () => {
  return (
		<section className='md:pt-24 pt-16 px-4'>
			<Title title='Наши преимущества' />
			<div className='flex pt-4 md:mx-6 2xl:mx-24 xl:mx-8 justify-center gap-5 items-center flex-col lg:flex-row'>
				<div className='flex lg:flex-row flex-col gap-12'>
					{advantages.map(advantage => (
						<div className=''>
							<div
								key={advantage.id}
								className='flex flex-col lg:flex-row lg:items-start lg:justify-start gap-2.5 md:gap-4 lg:gap-5 items-center justify-center'
							>
								<div className='min-w-12 min-h-12 md:min-w-14 md:min-h-14 lg:min-h-16 lg:min-w-16 bg-primary flex items-center justify-center rounded-full md:text-4xl text-3xl text-white'>
									{advantage.id}
								</div>
								<div className='text-center lg:text-start space-y-3 flex flex-col items-center justify-center lg:items-start lg:justify-center lg:max-w-[520px]'>
									<h2 className='font-bold text-xl leading-6 lg:text-2xl'>
										{advantage.title}
									</h2>
									<p className='text-[14px] font-normal leading-4 md:text-xl lg:text-[18px] md:leading-6 lg:leading-5'>
										{advantage.desc}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
				{/* <div className='lg:max-w-[680px] flex items-center justify-center'>
					<img
						className='lg:w-[680px] lg:pt-0 pt-9 rounded-lg'
						src='/advantages.png'
						alt='header'
					/>
				</div> */}
			</div>
		</section>
	)
}

export default Advantages