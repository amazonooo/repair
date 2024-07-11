import Link from 'next/link'
import { FC } from 'react'

interface IButton {
	title: string
	icon?: any
}

const Button: FC<IButton> = ({title, icon}) => {
  return (
		<Link
			href='#contact'
			className='mt-6 lg:mt-8 bg-primary lg:text-xl lg:py-3.5 px-5 py-3 sm:px-9 md:py-4 rounded-[3px] hover:brightness-105 hover:shadow-md transition-all duration-300 text-white text-center'
		>
			{icon}
			{title}
		</Link>
	)
}

export default Button