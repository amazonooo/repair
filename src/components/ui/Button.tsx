import Link from 'next/link'
import { FC } from 'react'

interface IButton {
	title: string
	icon?: any
}

const Button: FC<IButton> = ({title, icon}) => {
  return (
		<Link href='#contact' className='mt-6 lg:mt-8 bg-primary lg:text-xl lg:py-3.5 md:px-8 max-w-[164px] py-2.5 px-4 rounded-[3px] hover:brightness-105 hover:shadow-md transition-all duration-300 text-white text-center'>
			{icon}
			{title}
		</Link>
	)
}

export default Button