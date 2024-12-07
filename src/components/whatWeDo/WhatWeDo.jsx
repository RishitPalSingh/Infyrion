import React from 'react';
import { SectionTitle } from './SectionTitle';
import { Button } from '../Button';

export const WhatWeDoSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="WHAT WE DO"
          highlightedWords={["WE", "DO"]}
        />
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              At INFYRION, we specialize in providing exceptional IT solutions tailored to drive your business success. Our expertise lies in crafting dynamic, user-centric websites that elevate your online presence, ensuring your brand stands out in today's competitive digital landscape.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Beyond web development, we excel in streamlining recruitment processes by integrating advanced technological solutions that simplify hiring, enhance candidate experiences, and align top talent with your business needs. With INFYRION, you gain a trusted partner dedicated to empowering your growth through cutting-edge web services and strategic talent acquisition.
            </p>
            <div className="pt-4">
              <Button text="Get A Quote" className="px-8 py-3" />
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
                alt="Team collaboration"
                className="w-full h-48 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80"
                alt="Web development"
                className="w-full h-48 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -z-10 w-72 h-72 bg-teal-500/10 rounded-full -top-10 -right-10" />
            <div className="absolute -z-10 w-48 h-48 bg-blue-500/10 rounded-full -bottom-10 -left-10" />
          </div>
        </div>
      </div>
    </section>
  );
};