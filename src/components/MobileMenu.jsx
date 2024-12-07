import React from 'react';
import { Menu } from 'lucide-react';

export const MobileMenu = () => {
  return (
    <div className="md:hidden">
      <button className="p-2 rounded-md hover:bg-[#012089] transition-colors">
        <Menu size={24} />
      </button>
    </div>
  );
};