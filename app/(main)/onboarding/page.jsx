import { industries } from '@/data/industries';
import OnBoardingForm from './_components/OnBoardingForm';

const OnBoardingPage = () => {
  return (
    <main className='mt-40'>
     <OnBoardingForm industries={industries}/> 
    </main>
    
  );
}

export default OnBoardingPage;
