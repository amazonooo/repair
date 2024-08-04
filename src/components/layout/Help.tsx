'use client'

import Link from 'next/link'
import { FC } from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { IoMdCall } from 'react-icons/io'

const Help: FC = () => {

  return (
		<section className='pt-16 md:pt-24 flex flex-col items-center justify-center'>
			<h1
				style={{
					fontFamily: 'Gunterz',
				}}
				className='uppercase text-center text-black font-medium text-xl lg:mb-10 mb-4 md:text-3xl md:leading-[48px] lg:text-[3rem] lg:leading-[64px]'
			>
				Нужна помощь
				<br /> с расчётом?
			</h1>
			<div
				style={{
					backgroundImage: 'url(./help.png)',
				}}
				className='bg-no-repeat bg-cover bg-center w-full h-[217px]'
			>
				<div className='flex flex-col items-center justify-center h-full'>
					<h1 className='text-xl text-center lg:text-3xl text-white font-medium md:text-2xl'>
						Можно позвонить или написать
						<br /> в WhatsApp!
					</h1>
					<div className='flex pt-5 gap-5'>
						<Link
							className='cursor-pointer hover:brightness-105 hover:shadow-md transition-all duration-300 bg-primary px-5 py-3 md:px-9 md:py-4 rounded-[3px] text-white'
							href='https://wa.me/+7(919)-951-71-76'
						>
							<div className='flex items-center gap-2'>
								<FaWhatsapp className='md:text-xl text-[.875rem]' />
								<span className='md:text-xl text-[.875rem]'>Написать</span>
							</div>
						</Link>
						<Link
							className='cursor-pointer hover:brightness-105 hover:shadow-md transition-all duration-300 bg-white px-5 py-3 md:px-9 md:py-4 rounded-[3px] text-primary'
							href='tel:+7 919 951-71-76'
						>
							<div className='flex items-center gap-2'>
								<IoMdCall className='md:text-xl text-[.875rem]' />
								<span className='md:text-xl text-[.875rem]'>Позвонить</span>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Help