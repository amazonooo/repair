import { technologies } from '@/data/technologies'
import { FC } from 'react'

const Technologies: FC = () => {
  return (
		<section className='pt-16 md:pt-24 px-4'>
			<h1
				style={{
					fontFamily: 'Gunterz',
				}}
				className='uppercase text-center font-medium text-black text-xl md:text-3xl md:leading-[48px] lg:text-[3rem] lg:leading-[64px] mb-2'
			>
				Технология подходит для:
			</h1>
			<div className='flex pt-4 md:mx-6 2xl:mx-24 xl:mx-8 justify-center gap-5 items-center flex-col lg:flex-row'>
				<div className='grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16'>
					{technologies.map(tech => (
						<div className='flex flex-col gap-y-1 md:gap-y-2 items-center justify-center'>
							<h2 className='text-xs sm:text-base md:text-xl'>{tech.title}</h2>
							<div
								key={tech.id}
								className='relative bg-cover bg-center bg-no-repeat w-[160px] sm:w-[200px] h-[200px] md:w-[250px] lg:w-[300px] xl:w-[350px] md:h-[250px] lg:h-[350px] flex items-center justify-center group'
								style={{
									backgroundImage: `url(${tech.image})`,
								}}
							>
								<div className='absolute inset-0 bg-[rgba(0,0,0,.3)] group-hover:bg-[rgba(0,0,0,0)] transition-all duration-500'></div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Technologies