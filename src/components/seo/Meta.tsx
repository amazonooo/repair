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
						<script
							type='application/ld+json'
							dangerouslySetInnerHTML={{
								__html: JSON.stringify({
									'@context': 'https://schema.org',
									'@type': 'Organization',
									name: 'ProfPol',
									url: 'https://profpol.online',
									logo: 'https://profpol.online/images/logo.png',
									sameAs: [
										'https://www.facebook.com/profpol',
										'https://www.twitter.com/profpol',
										'https://www.instagram.com/profpol',
									],
								}),
							}}
						/>
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