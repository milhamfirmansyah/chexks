import Image from 'next/image';
import React from 'react';
import logo from '../assets/chexks_logo.svg';
import Link from 'next/link';
import fb from '../assets/facebook.svg';
import twt from '../assets/twitter.svg';
import linkedin from '../assets/linkedin.svg';
import yt from '../assets/youtube.svg';
import ig from '../assets/instagram.svg';

function Footer() {
  return (
    <section className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-top-left">
            <h2>
              Choose invoices to pay, <span style={{ color: '#00D1CC' }}>we do the rest.</span>
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          </div>
          <div className="footer-top-right">
            <input type="text" placeholder="Enter your email" />
            <button>Try For Free</button>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <Link href={'#'}>
              <Image src={logo} alt="footer-logo" className="footer-logo" />
            </Link>
            <p>Transform the way companies manage payments electronically without the high payment fees.</p>
            <div className="socmed-container">
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
          </div>
          <div className="footer-bottom-right">
            <div>
              <Link href={'#feature'}>Features</Link>
              <Link href={'#'}>Industries</Link>
              <Link href={'#'}>Integrations</Link>
              <Link href={'#'}>Solutions</Link>
            </div>
            <div>
              <Link href={'#'}>Roles</Link>
              <Link href={'#'}>Pricing</Link>
              <Link href={'#'}>Company</Link>
              <Link href={'#'}>Customers</Link>
            </div>
            <div>
              <Link href={'#'}>About Us</Link>
              <Link href={'#'}>Terms of Service</Link>
              <Link href={'#'}>Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
