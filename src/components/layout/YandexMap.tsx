'use client'

import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'
import React from 'react'

const YandexMap: React.FC = () => {
	const mapState = {
		center: [61.241778, 73.393032],
		zoom: 13,
	}

	return (
		<YMaps>
			<section className='w-full h-96 pt-8'>
				{' '}
				{/* Tailwind классы для адаптивности */}
				<Map state={mapState} width='100%' height='100%'>
					<Placemark geometry={[61.241778, 73.393032]} />
				</Map>
			</section>
		</YMaps>
	)
}

export default YandexMap
