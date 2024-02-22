'use client';
import React from 'react';
import Image from 'next/image';
import logo1 from '../assets/company1.svg';
import logo2 from '../assets/company2.svg';
import logo3 from '../assets/company3.svg';
import logo4 from '../assets/company4.svg';
import logo5 from '../assets/company5.svg';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Company() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="company">
      <div className="company-container">
        <h4 data-aos="zoom-in" data-aos-offset="0">
          Trusted by many companies.
        </h4>
        <div className="first-child right">
          <Image src={logo1} alt="logo-company-1" />
          <Image src={logo2} alt="logo-company-2" />
          <Image src={logo3} alt="logo-company-3" />
          <Image src={logo4} alt="logo-company-4" />
          <Image src={logo5} alt="logo-company-5" />
          <Image src={logo1} alt="logo-company-1" />
          <Image src={logo2} alt="logo-company-2" />
          <Image src={logo3} alt="logo-company-3" />
          <Image src={logo4} alt="logo-company-4" />
          <Image src={logo5} alt="logo-company-5" />
          <Image src={logo1} alt="logo-company-1" />
          <Image src={logo2} alt="logo-company-2" />
          <Image src={logo3} alt="logo-company-3" />
          <Image src={logo4} alt="logo-company-4" />
          <Image src={logo5} alt="logo-company-5" />
          <Image src={logo1} alt="logo-company-1" />
          <Image src={logo2} alt="logo-company-2" />
          <Image src={logo3} alt="logo-company-3" />
          <Image src={logo4} alt="logo-company-4" />
          <Image src={logo5} alt="logo-company-5" />
          <Image src={logo1} alt="logo-company-1" />
          <Image src={logo2} alt="logo-company-2" />
          <Image src={logo3} alt="logo-company-3" />
          <Image src={logo4} alt="logo-company-4" />
          <Image src={logo5} alt="logo-company-5" />
          <Image src={logo1} alt="logo-company-1" />
          <Image src={logo2} alt="logo-company-2" />
          <Image src={logo3} alt="logo-company-3" />
          <Image src={logo4} alt="logo-company-4" />
          <Image src={logo5} alt="logo-company-5" />
        </div>
        <div className="left">
          <Image src={logo1} alt="logo-company-1" />
          <Image src={logo2} alt="logo-company-2" />
          <Image src={logo3} alt="logo-company-3" />
          <Image src={logo4} alt="logo-company-4" />
          <Image src={logo5} alt="logo-company-5" />
          <Image src={logo1} alt="logo-company-1" />
          <Image src={logo2} alt="logo-company-2" />
          <Image src={logo3} alt="logo-company-3" />
          <Image src={logo4} alt="logo-company-4" />
          <Image src={logo5} alt="logo-company-5" />
          <Image src={logo1} alt="logo-company-1" />
          <Image src={logo2} alt="logo-company-2" />
          <Image src={logo3} alt="logo-company-3" />
          <Image src={logo4} alt="logo-company-4" />
          <Image src={logo5} alt="logo-company-5" />
          <Image src={logo1} alt="logo-company-1" />
          <Image src={logo2} alt="logo-company-2" />
          <Image src={logo3} alt="logo-company-3" />
          <Image src={logo4} alt="logo-company-4" />
          <Image src={logo5} alt="logo-company-5" />
          <Image src={logo1} alt="logo-company-1" />
          <Image src={logo2} alt="logo-company-2" />
          <Image src={logo3} alt="logo-company-3" />
          <Image src={logo4} alt="logo-company-4" />
          <Image src={logo5} alt="logo-company-5" />
          <Image src={logo1} alt="logo-company-1" />
          <Image src={logo2} alt="logo-company-2" />
          <Image src={logo3} alt="logo-company-3" />
          <Image src={logo4} alt="logo-company-4" />
          <Image src={logo5} alt="logo-company-5" />
        </div>
      </div>
    </section>
  );
}

export default Company;
