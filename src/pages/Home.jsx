import HeroPage from '../components/hero-page';
import EventStruct from '../components/event-struct';
import PricePerk from '../components/price-perks';

function Page() {
  return (
    <div className='min-h-screen w-full flex flex-col items-center'>
      <HeroPage />
      <EventStruct />
      <PricePerk />
    </div>
  );
}

export default Page;
