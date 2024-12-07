import React from 'react';
import { Navbar } from '../components/Navbar';
import { Button } from '../components/Button';
import { BackgroundImage } from '../components/BackgroundImage';
import infyrion from '../assets/infyrion.jpeg'
function Hero() {
    return (
        <BackgroundImage
            imageUrl = {infyrion}
            overlayColor="rgba(0, 0, 0, 0.5)"
        >
            <div className="min-h-screen">
                <Navbar />
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-white mb-4">
                            INNOVATIVE SOLUTIONS FOR<br />MODERN CHALLENGES
                        </h1>
                        <p className="text-gray-300 mb-8">
                            From Web Services to Talent Acquisition, We've Got You Covered
                        </p>
                        <Button text="Get Started" className="text-lg" />
                    </div>
                </main>
            </div>
        </BackgroundImage>
    );
}

export default Hero;