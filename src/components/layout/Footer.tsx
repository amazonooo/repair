import { FC, Suspense } from 'react'
import Title from '../ui/Title'
import { IoMdCall } from 'react-icons/io'
import { FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'

const Footer: FC = () => {
  return (
		<footer id='contact' className='overflow-x-hidden pt-16 md:pt-24 flex flex-col items-center justify-center '>
			<Title title='Контакты' />
			<div>
				<div
					style={{
						backgroundImage: 'url(./footer.png)',
					}}
					className='bg-no-repeat bg-cover bg-top w-full lg:h-[440px] h-[302px]'
				>
					<div className='flex flex-col items-center w-screen justify-center h-full'>
						<h2 className='mb-4 md:mb-10 md:text-[2.5rem] sm:text-[2rem] lg:text-[3.5rem] text-2xl font-medium text-white leading-8'>
							Полусухой мастер:{' '}
						</h2>
						<div className='mb-5 md:mb-8'>
							<Link
								className='flex items-center gap-3 pb-2'
								href='tel:+7 346 269-50-00'
							>
								<IoMdCall className='w-[20px] h-[20px] md:w-[32px] md:h-[32px] text-primary' />
								<span className='text-white font-semibold text-xl leading-7'>
									+7 346 269-50-00
								</span>
							</Link>
							<Link
								className='flex items-center gap-3'
								href='tel:+7 919 951-71-76'
							>
								<IoMdCall className='w-[20px] h-[20px] md:w-[32px] md:h-[32px] text-primary' />
								<span className='text-white font-semibold text-xl leading-7'>
									+7 919 951-71-76
								</span>
							</Link>
						</div>
						<div className='flex gap-5'>
							<Link
								href='https://wa.me/+7(919)-951-71-76'
								className='cursor-pointer hover:brightness-105 hover:shadow-md transition-all duration-300 bg-primary px-5 py-3 md:px-9 md:py-4 rounded-[3px] text-white'
							>
								<div className='flex items-center gap-2 bg-primary'>
									<FaWhatsapp className='w-[16px] h-[16px] md:w-[24px] md:h-[24px]' />
									<span className='md:text-xl text-[.875rem] font-extrabold'>
										Написать
									</span>
								</div>
							</Link>
							<Link
								href='https://www.avito.ru/user/46b9bdc3967570f20b1ef3b695127d9f/profile?src=sharing'
								target='_blank'
								className='cursor-pointer hover:brightness-105 hover:shadow-md transition-all duration-300 bg-white px-5 py-3 md:px-9 md:py-4 rounded-[3px] text-black'
							>
								<div className='flex items-center gap-2 justify-center bg-white md:w-[128px] w-[90px]'>
									<Suspense>
										<Image
											src='/avito.svg'
											className='w-[16px] h-[16px] md:w-[24px] md:h-[24px]'
											alt='avito'
											width={30}
											height={30}
										/>
									</Suspense>
									<span className='md:text-xl text-[.875rem] font-extrabold'>
										Авито
									</span>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer