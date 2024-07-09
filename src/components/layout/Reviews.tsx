import { FC } from 'react'
import Slider from '../ui/Slider'
import ReviewsComment from '../ui/ReviewsComment'

const Reviews: FC = () => {
  return (
		<section className='pt-16 md:pt-20 px-4'>
			<h1 className='uppercase text-center text-black font-extrabold text-2xl pb-9 md:text-3xl md:leading-[48px] lg:text-[3.5rem] lg:leading-[94px]'>
				Отзывы
			</h1>
			<ReviewsComment />
		</section>
	)
}

export default Reviews