import { FC, PropsWithChildren } from 'react';
import { IMeta } from './meta.interface';
import Head from 'next/head';
import { getTitle } from '@/utils/getTitle';

const Meta: FC<PropsWithChildren<IMeta>> = ({title, description, children}) => {
  return (
		<>
			<Head>
				<title>{getTitle(title)}</title>
				{description ? (
					<>
						<meta name='desciption' content={description} />
						<meta name='og:title' content={getTitle(title)} />
						<meta name='og:desciption' content={description} />
					</>
				) : (
					<>
						<meta name='robots' content='noindex, nofollow' />
					</>
				)}
			</Head>
      {children}
		</>
	)
}

export default Meta