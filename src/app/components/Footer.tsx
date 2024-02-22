'use client';
import Image from 'next/image';
import React from 'react';
import logo from '../assets/chexks_logo.svg';
import Link from 'next/link';
import fb from '../assets/facebook.svg';
import twt from '../assets/twitter.svg';
import linkedin from '../assets/linkedin.svg';
import yt from '../assets/youtube.svg';
import ig from '../assets/instagram.svg';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Footer() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-top-left">
            <h2 data-aos="fade-up" data-aos-offset="0">
              Choose invoices to pay, <span style={{ color: '#00D1CC' }}>we do the rest.</span>
            </h2>
            <p data-aos="fade-up" data-aos-offset="0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>
          <div className="footer-top-right" data-aos="fade-up" data-aos-offset="0">
            <input type="text" placeholder="Enter your email" />
            <button>Try For Free</button>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <Link href={'#'} data-aos="fade-up" data-aos-offset="0">
              <Image src={logo} alt="footer-logo" className="footer-logo" />
            </Link>
            <p data-aos="fade-up" data-aos-offset="0">
              Transform the way companies manage payments electronically without the high payment fees.
            </p>
          </div>
          <div className="footer-bottom-right">
            <div>
              <Link href={'#feature'} data-aos="fade-up" data-aos-offset="0">
                Features
              </Link>
              <Link href={'#'} data-aos="fade-up" data-aos-offset="0">
                Industries
              </Link>
              <Link href={'#'} data-aos="fade-up" data-aos-offset="0">
                Integrations
              </Link>
              <Link href={'#'} data-aos="fade-up" data-aos-offset="0">
                Solutions
              </Link>
            </div>
            <div>
              <Link href={'#'} data-aos="fade-up" data-aos-offset="0">
                Roles
              </Link>
              <Link href={'#'} data-aos="fade-up" data-aos-offset="0">
                Pricing
              </Link>
              <Link href={'#'} data-aos="fade-up" data-aos-offset="0">
                Company
              </Link>
              <Link href={'#'} data-aos="fade-up" data-aos-offset="0">
                Customers
              </Link>
            </div>
            <div>
              <Link href={'#'} data-aos="fade-up" data-aos-offset="0">
                About Us
              </Link>
              <Link href={'#'} data-aos="fade-up" data-aos-offset="0">
                Terms of Service
              </Link>
              <Link href={'#'} data-aos="fade-up" data-aos-offset="0">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom-bottom">
          <div className="socmed-container" data-aos="fade-up" data-aos-offset="0">
            <Link href={'#'}>
              <Image src={fb} alt="facebook" />
            </Link>
            <Link href={'#'}>
              <Image src={twt} alt="twitter" />
            </Link>
            <Link href={'#'}>
              <Image src={linkedin} alt="linkedin" />
            </Link>
            <Link href={'#'}>
              <Image src={yt} alt="youtube" />
            </Link>
            <Link href={'#'}>
              <Image src={ig} alt="instagram" />
            </Link>
          </div>
          <p data-aos="fade-up" data-aos-offset="0">
            Copyright Chexks 2022 © All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
