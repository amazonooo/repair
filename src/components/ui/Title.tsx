import { FC } from 'react'

interface ITitle {
	title: string
}

const Title: FC<ITitle> = ({ title }) => {
	return (
		<h1
			style={{
				fontFamily: 'Gunterz',
			}}
			className='uppercase text-center font-medium text-black text-2xl md:text-3xl md:leading-[48px] lg:text-[3rem] lg:leading-[64px] lg:mb-10 mb-4'
		>
			{title}
		</h1>
	)
}

export default Title