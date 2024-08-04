import Advantages from '@/components/layout/Advantages';
import Help from '@/components/layout/Help';
import Price from '@/components/layout/Price';
import Reviews from '@/components/layout/Reviews';
import Technologies from '@/components/layout/Technologies'
import Top from '@/components/layout/Top'
import Works from '@/components/layout/Works';
import YandexMap from '@/components/layout/YandexMap'
import ScrollButton from '@/components/ui/ScrollButton';

export default function Home() {
  return (
		<main className='relative flex flex-col mx-auto md:py-0 md:px-0 overflow-clip'>
			<ScrollButton />
			<Top />
			<Advantages />
			<Technologies />
			<Price />
			<Help />
			<Works />
			<Reviews />
			<YandexMap />
		</main>
	)
}
