import React from 'react';
import '../styles/navbar.css';
import logo from '../assets/chexks_logo.svg';
import Image from 'next/image';
import Link from 'next/link';

function Navbar() {
  return (
    <section className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <Link href={'#'}>
            <Image src={logo} alt="logo" />
          </Link>
        </div>
        <div className="navbar-right">
          <button>Send Checks For Free</button>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
