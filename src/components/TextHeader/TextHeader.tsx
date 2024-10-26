import React from "react";
import { VideoVertical } from 'iconsax-react';

interface TextHeaderProps {
  text: string;
  isDesktop: boolean;
}

function NavbarComponent ({
  text,
  isDesktop
} : TextHeaderProps) {
  return (
    <h2 className="flex items-center mb-8">
      <VideoVertical
        size={isDesktop ? '32' : '28'}
        color="#292D32"
        variant='Outline'
      />
      <div className="ml-2 lg:text-[24px] text-[18px] font-[700] text-black leading">
        {text}
      </div>
    </h2>
  )
}

export default NavbarComponent;