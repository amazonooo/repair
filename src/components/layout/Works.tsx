import { FC } from 'react'
import Title from '../ui/Title'

const Works: FC = () => {
  return (
		<section className='pt-24 md:mx-6 2xl:mx-24 xl:mx-8'>
			<Title title='Наши работы' /> 
			<div className='flex h-[914px] w-full items-center justify-center'>
				<div className='grid h-full w-full gap-4 grid-cols-4 grid-rows-3 rounded-lg shadow-md'>
					<div className='col-span-1 row-span-1 rounded-lg shadow-md flex items-center justify-center'>
						<img className='w-full h-full' src='/bento-1.png' alt='' />
					</div>

					<div className='col-span-1 row-span-1 rounded-lg shadow-md flex items-center justify-center'>
						<img className='w-full h-full' src='/bento-3.png' alt='' />
					</div>

					<div className='col-span-2 row-span-2 rounded-lg shadow-md flex items-center justify-center'>
						<img className='w-full h-full' src='/bento-6.png' alt='' />
					</div>

					<div className='col-span-1 row-span-3 rounded-lg shadow-md flex items-center justify-center'>
						<img className='w-full h-full' src='/bento-2.png' alt='' />
					</div>

					<div className='col-span-1 row-span-1 rounded-lg shadow-md flex items-center justify-center'>
						<img className='w-full h-full' src='/bento-4.png' alt='' />
					</div>

					<div className='col-span-1 row-span-2 rounded-lg shadow-md flex items-center justify-center'>
						<img className='w-full h-full' src='/bento-5.png' alt='' />
					</div>

					<div className='col-span-2 row-span-2 rounded-lg shadow-md flex items-center justify-center'>
						<img className='w-full h-full' src='/bento-7.png' alt='' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Works