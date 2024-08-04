import { FC } from 'react'

const Top: FC = () => {
  return (
		<section className='md:pt-24 pt-16 px-4 flex items-center justify-center flex-col'>
			<h1
				style={{
					fontFamily: 'Gunterz',
				}}
				className='uppercase text-center font-medium text-black text-xl md:text-3xl md:leading-[48px] lg:text-[3rem] lg:leading-[64px] mb-2'
			>
				Механизированная Стяжка
			</h1>
			<p className='text-center lg:max-w-[800px] text-[14px] font-normal leading-4 md:text-xl lg:text-[18px] md:leading-6 lg:leading-5'>
				Механизированная (полусухая) стяжка - это выравнивание полов с помощью
				жесткого цементно-песчаного раствора. После нанесения и шлифовки
				материала ему не нужны дополнительные увлажнение и выравнивание.
				Получившееся покрытие - ровное и прочное, ему не страшны растрескивание
				и усадка.
			</p>
		</section>
	)
}

export default Top