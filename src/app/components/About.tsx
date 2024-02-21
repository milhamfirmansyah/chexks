import React from 'react';
import aboutImage from '../assets/Frame 1399.svg';
import Image from 'next/image';

function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-top">
          <h2>Painless Payments for You and Your Suppliers.</h2>
          <button>Learn More</button>
        </div>
        <div className="about-middle">
          <p>Chexks doesn’t require your suppliers to join our system or pay any fees, we neither require them to enter their banking information like routing and account numbers.</p>
          <p>
            Chexks are printed and mailed directly to your suppliers —we love to do that boring stuff to keep you happy. <br /> The best of all —checks are not posted to your bank until the supplier cashes the check.
          </p>
        </div>
        <Image src={aboutImage} alt='about-image'/>
      </div>
    </section>
  );
}

export default About;
