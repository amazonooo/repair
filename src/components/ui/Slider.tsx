import React from 'react'
import Slider from 'react-slick'

const ResponsiveSlider: React.FC = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024, // Large devices
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 768, // Medium devices
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 480, // Small devices
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	}

	return (
		<Slider {...settings}>
			<div className='p-4'>
				<div className='bg-gray-200 p-6'>1</div>
			</div>
			<div className='p-4'>
				<div className='bg-gray-200 p-6'>2</div>
			</div>
			<div className='p-4'>
				<div className='bg-gray-200 p-6'>3</div>
			</div>
			<div className='p-4'>
				<div className='bg-gray-200 p-6'>4</div>
			</div>
			<div className='p-4'>
				<div className='bg-gray-200 p-6'>5</div>
			</div>
		</Slider>
	)
}

export default ResponsiveSlider
