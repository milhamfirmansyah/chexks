'use client';
import React from 'react';
import workflow from '../assets/chexks_workflow.svg';
import Image from 'next/image';
import { BiChevronUp } from 'react-icons/bi';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Workflow() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="workflow">
      <div className="workflow-container">
        <Image src={workflow} alt="workflow-image" data-aos="fade-up" data-aos-offset="0" />
        <div className="workflow-right">
          <h2 data-aos="fade-up" data-aos-offset="0">
            Workflow Automation.
          </h2>
          <p className="workflow-p1" data-aos="fade-up" data-aos-offset="0">
            We do the heavy-lifting on posting payments to your accounting system so you dona&#769;t need to worry about that painful step, one thing less to worry.
          </p>
          <p data-aos="fade-up" data-aos-offset="0">
            Through our workflow automation, Chexks accurately closes the open invoices in your cloud accounting by matching them to your issued check payment effectively closing out on the payables you choose to pay.
          </p>
          <button data-aos="fade-up" data-aos-offset="0">
            Learn More{' '}
            <div>
              <BiChevronUp />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Workflow;
