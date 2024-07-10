import { FC } from 'react'

interface ITitle {
	title: string
}

const Title: FC<ITitle> = ({ title }) => {
	return (
		<h1 className='uppercase text-center text-black font-extrabold text-2xl md:text-3xl md:leading-[48px] lg:text-[3rem] lg:leading-[64px] lg:mb-14 mb-9'>
			{title}
		</h1>
	)
}

export default Title