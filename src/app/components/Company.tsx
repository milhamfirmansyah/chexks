import React from 'react';
import Image from 'next/image';
import logo1 from '../assets/company1.svg';

function Company() {
  return (
    <section className="company">
      <div className="company-container">
        <h4>Trusted by many companies.</h4>
        <div className='first-child right'>
          <Image src={logo1} alt="logo-company-1" />
          <Image src={logo1} alt="logo-company-1" />
          <Image src={logo1} alt="logo-company-1" />
          <Image src={logo1} alt="logo-company-1" />
          <Image src={logo1} alt="logo-company-1" />
        </div>
        <div className='left'>
          <Image src={logo1} alt="logo-company-1" />
          <Image src={logo1} alt="logo-company-1" />
          <Image src={logo1} alt="logo-company-1" />
          <Image src={logo1} alt="logo-company-1" />
          <Image src={logo1} alt="logo-company-1" />
        </div>
      </div>
    </section>
  );
}

export default Company;
