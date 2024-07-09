import { FC } from 'react'
import Title from '../ui/Title'
import { IoMdCall } from 'react-icons/io'
import { FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link'

const Footer: FC = () => {
  return (
		<div className='overflow-x-hidden pt-16 md:pt-24 flex flex-col items-center justify-center lg:mx-6 2xl:mx-24 xl:mx-8'>
			<Title title='Контакты' />
			<footer id='contact' className=''>
				<div
					style={{
						backgroundImage: 'url(./footer.png)',
					}}
					className='bg-no-repeat bg-cover bg-top w-full h-[302px]'
				>
					<div className='flex flex-col items-center w-screen justify-center h-full'>
						<h2 className='mb-4 md:mb-9 md:text-3xl lg:text-[3.5rem] text-2xl font-extrabold text-white leading-8'>
							Полусухой мастер:{' '}
						</h2>
						<div className='mb-5 md:mb-8'>
							<Link className='flex items-center gap-3 pb-2' href={'/'}>
								<IoMdCall className='hover:animate-bounce ease-in-out transition-transform duration-300 w-[20px] h-[20px] md:w-[32px] md:h-[32px] text-primary' />
								<span className='text-white font-semibold text-xl leading-7'>
									+7 346 269-50-00
								</span>
							</Link>
							<Link className='flex items-center gap-3' href={'/'}>
								<IoMdCall className='hover:animate-bounce ease-in-out transition-transform duration-300 w-[20px] h-[20px] md:w-[32px] md:h-[32px] text-primary' />
								<span className='text-white font-semibold text-xl leading-7'>
									+7 919 951-71-76
								</span>
							</Link>
						</div>
						<div className='flex gap-5'>
							<Link
								href={'/'}
								className='cursor-pointer hover:brightness-105 hover:shadow-md transition-all duration-300 bg-primary px-8 py-3 md:px-9 md:py-4 rounded-lg text-white'
							>
								<div className='flex items-center gap-2 bg-primary'>
									<FaWhatsapp className='w-[16px] h-[16px] md:w-[24px] md:h-[24px]' />
									<span className='md:text-xl text-[.875rem] font-extrabold'>
										Написать
									</span>
								</div>
							</Link>
							<Link
								href={'/'}
								className='cursor-pointer hover:brightness-105 hover:shadow-md transition-all duration-300 bg-white px-8 py-3 md:px-9 md:py-4 rounded-lg text-black'
							>
								<div className='flex items-center gap-2 bg-white'>
									<img
										src='/avito.svg'
										className='w-[16px] h-[16px] md:w-[24px] md:h-[24px]'
									/>
									<span className='md:text-xl text-[.875rem] font-extrabold'>
										Авито
									</span>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default Footer