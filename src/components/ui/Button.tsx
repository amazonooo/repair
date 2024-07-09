import Link from 'next/link'
import { FC } from 'react'

interface IButton {
	title: string
	icon?: any
}

const Button: FC<IButton> = ({title, icon}) => {
  return (
		<Link href='mailto:garikogannisyan.9@gmail.com' className='mt-5 bg-primary max-w-[164px] py-2.5 px-4 rounded-sm hover:brightness-105 hover:shadow-md transition-all duration-300 text-white text-center'>
			{icon}
			{title}
		</Link>
	)
}

export default Button