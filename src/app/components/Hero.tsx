import React from 'react';
import image from '../assets/Illustration.svg';
import Image from 'next/image';
import vector from '../assets/Vector 8.svg';
import logo from '../assets/chexks_logo.svg';

function Hero() {
  return (
    <div style={{ position: 'relative'}}>
      <section className="hero">
        <div className="hero-container">
          <p className="hero-p1">The easiest & modern way to send checks</p>
          <h1>Seamlessly pay a bunch of vendors online.</h1>
          <p className="hero-p2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
          <button>Send Checks for Free</button>
          <Image src={image} alt="hero-image" />
        </div>
      </section>
      <Image src={vector} alt="vector" style={{ position: 'absolute', top: '-114px', right: '0', zIndex: '0' }} />
    </div>
  );
}

export default Hero;
