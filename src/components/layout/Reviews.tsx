import { FC } from 'react'
import ReviewsComment from '../ui/ReviewsComment'
import Title from '../ui/Title'

const Reviews: FC = () => {
  return (
		<section className='pt-16 md:pt-24 px-4'>
			<Title title='Отзывы' />
			<ReviewsComment />
		</section>
	)
}

export default Reviews