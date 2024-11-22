import { ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '../Navbar/Navbar';
import Button from './Buttons'
const StoryDetails = () => {  
  return (
    <div className="min-h-screen  bg-[#0B1123] text-white">
      <Navbar />
      <div className="text-3xl font-bold text-center mb-8">
      <span className='text-blue-500'>The Lost City of </span>Future City
      </div>    
       <Button/>
    </div> 
  );
};

export default StoryDetails;