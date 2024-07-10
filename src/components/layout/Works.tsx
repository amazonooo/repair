import { FC } from 'react'
import Title from '../ui/Title'

const Works: FC = () => {
  return (
		<section className='pt-16 md:pt-24 md:mx-6 2xl:mx-24 xl:mx-8'>
			<Title title='Наши работы' />
			<div className='flex h-screen w-full items-center justify-center'>
				<div className='grid h-full w-full grid-cols-10 grid-rows-6 gap-4 px-4'>
					<div
						className='col-span-5 row-span-3 lg:col-span-2 lg:row-span-4 rounded-xl flex justify-center items-center bg-no-repeat bg-cover bg-center'
						style={{
							backgroundImage: 'url(./bento-1.png)',
						}}
					></div>

					<div
						className='col-span-5 row-span-1 lg:col-span-4 lg:row-span-2 rounded-xl flex justify-center items-center bg-no-repeat bg-cover bg-center'
						style={{
							backgroundImage: 'url(./bento-2.png)',
						}}
					></div>

					<div
						className='col-span-5 row-span-3 lg:col-span-4 lg:row-span-3 rounded-xl flex justify-center items-center bg-no-repeat bg-cover bg-center'
						style={{
							backgroundImage: 'url(./bento-3.png)',
						}}
					></div>

					<div
						className='col-span-5 row-span-2 lg:col-span-4 lg:row-span-3 rounded-xl flex justify-center items-center bg-no-repeat bg-cover bg-center'
						style={{
							backgroundImage: 'url(./bento-4.png)',
						}}
					></div>

					<div
						className='col-span-5 row-span-2 lg:col-span-4 lg:row-span-3 rounded-xl flex justify-center items-center bg-no-repeat bg-cover bg-center'
						style={{
							backgroundImage: 'url(./bento-5.png)',
						}}
					></div>

					<div
						className='col-span-5 row-span-1 lg:col-span-2 lg:row-span-2 rounded-xl flex justify-center items-center bg-no-repeat bg-cover bg-center'
						style={{
							backgroundImage: 'url(./bento-6.png)',
						}}
					></div>

					<div
						className='hidden col-span-6 row-span-1 lg:col-span-4 rounded-xl lg:flex justify-center bg-no-repeat bg-cover bg-center items-center'
						style={{
							backgroundImage: 'url(./bento-7.png)',
						}}
					></div>
				</div>
			</div>
		</section>
	)
}

export default Works