import Advantages from '@/components/layout/Advantages';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Help from '@/components/layout/Help';
import Price from '@/components/layout/Price';
import Reviews from '@/components/layout/Reviews';
import Works from '@/components/layout/Works';
import ScrollButton from '@/components/ui/ScrollButton';

export default function Home() {
  return (
		<>
			<Header />
			<main className='relative flex flex-col mx-auto md:py-0 md:px-0 overflow-clip'>
				<ScrollButton />
				<Advantages />
				<Price />
				<Help />
				<Works />
				<Reviews />
				<Footer />
			</main>
		</>
	)
}
