import StudentVoice from '@/Data/StudentVoice.js'
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
const Quotes = () => {

  return (
    <div className='dark:bg-grid-white/[0.2] bg-grid-black/[0.2] h-[40rem] relative flex flex-col'>
    <div className="text-center justify-center uppercase mt-20 font-bold text-teal-600 text-3xl  ">
      Voice of Students
    </div>
    <InfiniteMovingCards items={StudentVoice}
        direction="right"
        speed="slow"
        className='mt-10' />
    </div>
  );
};

export default Quotes;
