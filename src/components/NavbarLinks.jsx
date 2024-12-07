import React from 'react';

export const NavLinks = () => {
  const links = [
    { text: 'Home', href: '#' },
    { text: 'About Us', href: '#' },
    { text: 'Services', href: '#' },
    { text: 'FAQs', href: '#' },
    { text: 'Our Works', href: '#' }
  ];

  return (
    <>
      {links.map((link) => (
        <a
          key={link.text}
          href={link.href}
          className="hover:text-gray-300 transition-colors"
        >
          {link.text}
        </a>
      ))}
    </>
  );
};