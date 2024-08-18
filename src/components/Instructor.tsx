"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import InstructorsData from '@/Data/InstructorsData.js'
import { WavyBackground } from "./ui/wavy-background";

export function AnimatedTooltipPreview() {
  return (
    <div className=" relative -mt-10">
     <WavyBackground className="justify-center">
        <h2 className="justify-center text-center text-4xl font-bold mb-5 -mt-5">Meet Our Instructors</h2>    
        <p className="justify-center text-center">Discover the talented and skilled individuals who have helped shape the future of coding.</p>  
        <div className="justify-center align-center flex flex-row mt-4">
            <AnimatedTooltip items={InstructorsData} />
        </div>
     </WavyBackground>
    </div>
  );
}
