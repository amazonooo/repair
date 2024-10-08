'use client'

import { reviews } from '@/data/reviews'
import Image from 'next/image'
import Link from 'next/link'
import { FC, Suspense } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import 'swiper/css/scrollbar'
import { Scrollbar } from 'swiper/modules'


const ReviewsComment: FC = () => {
  return (
		<Swiper
			className='flex items-center justify-center'
			loop={true}
			spaceBetween={40}
			scrollbar={{
				hide: false,
			}}
			modules={[Scrollbar]}
			breakpoints={{
				1280: {
					slidesPerView: 4,
					slidesPerGroup: 4,
				},
				1024: {
					slidesPerView: 3,
					slidesPerGroup: 3,
				},
				768: {
					slidesPerView: 2,
					slidesPerGroup: 2,
				},
				535: {
					slidesPerView: 2,
					slidesPerGroup: 2,
				},
				0: {
					slidesPerView: 1,
					slidesPerGroup: 1,
				},
			}}
			touchRatio={1}
		>
			<div className=''>
				{reviews.map(review => (
					<SwiperSlide key={review.id}>
						<div className='relative rounded-[3px] p-7 flex flex-col bg-gray w-full sm:min-h-[290px] h-[259px]'>
							<div className='flex justify-between mb-1'>
								<h2 className='font-extrabold'>{review.name}</h2>
								<span className='text-gray-200'>{review.date}</span>
							</div>
							<div className='md:mb-6 mb-4'>
								<Suspense>
									<Image
										width={100}
										height={100}
										src={review.stars}
										alt='stars'
									/>
								</Suspense>
							</div>
							<p className='leading-5 text-[.875rem] md:text-base font-medium'>
								{review.comment}
							</p>
							<Link
								className='text-gray-200 underline underline-offset-4 absolute bottom-6 hover:text-blue-500 transition-colors duration-300'
								href={
									'https://www.avito.ru/user/46b9bdc3967570f20b1ef3b695127d9f/profile?src=sharing'
								}
								target='_blank'
							>
								{review.link}
							</Link>
						</div>
					</SwiperSlide>
				))}
			</div>
		</Swiper>
	)
}

export default ReviewsComment