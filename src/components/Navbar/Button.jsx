import React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react';
const Button = () => {
  return (
    <div className="flex justify-between items-center mt-8">
    <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300">
      <ChevronLeft size={20} />
      Previous
    </button>
    <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300">
      Next
      <ChevronRight size={20} />
    </button>
  </div>
  )
}

export default Button;
