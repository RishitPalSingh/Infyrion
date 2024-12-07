import React from 'react';
import { Button } from './Button';
import { NavLinks } from './NavbarLinks';
import { MobileMenu } from './MobileMenu';

export const Navbar = () => {
  return (
    <nav className="text-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="font-bold text-xl">
            INFYRION
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <Button text='Contact Us'/>
          </div>

          {/* Mobile Menu Button */}
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};