import { FC } from 'react'
import Slider from '../ui/Slider'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Reviews: FC = () => {
  return (
		<section className='pt-16 md:pt-20 px-4'>
			<Slider />
		</section>
	)
}

export default Reviews