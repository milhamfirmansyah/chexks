'use client';
import React from 'react';
import image from '../assets/Illustration.svg';
import Image from 'next/image';
import vector from '../assets/Vector 8.svg';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <section className="hero">
        <div className="hero-container">
          <p className="hero-p1" data-aos="zoom-in">
            The easiest & modern way to send checks
          </p>
          <h1 data-aos="fade-up" data-aos-delay="400">Seamlessly pay a bunch of vendors online.</h1>
          <p className="hero-p2" data-aos="fade-up" data-aos-offset="0" data-aos-delay="800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
          </p>
          <button data-aos="fade-up" data-aos-offset="0">Send Checks for Free</button>
          <Image src={image} alt="hero-image" data-aos="fade-up" data-aos-offset="0"/>
        </div>
      </section>
      <Image src={vector} alt="vector" style={{ position: 'absolute', top: '-114px', right: '0', zIndex: '0' }} />
    </div>
  );
}

export default Hero;
