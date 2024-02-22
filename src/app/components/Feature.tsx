import React from 'react';
import { BiChevronUp } from 'react-icons/bi';

function Feature() {
  return (
    <section className="feature" id="feature">
      <div className="feature-container">
        <div className="feature-left">
          <h2>Powerful Payment Approvals.</h2>
          <button>
            Learn More{' '}
            <div>
              <BiChevronUp />
            </div>
          </button>
        </div>
        <div className="feature-right">
          <div className="feature-right-content" style={{ borderTop: '1px solid #000' }}>
            <span>01</span>
            <p>Create simple, yet powerful teammate approval workflows by user or role.</p>
          </div>
          <div className="feature-right-content">
            <span>02</span>
            <p>Set payment approval rules by supplier company, invoice amounts, or one-off payments. Have more complex approval workflows? No problem, just pick the approval order.</p>
          </div>
          <div className="feature-right-content">
            <span>03</span>
            <p>Select invoices to pay –add your teammate or teammates that need to approve the payment, and set the approver order.</p>
          </div>
          <div className="feature-right-content">
            <span>04</span>
            <p>Your payment approvals can now be in auto-pilot!</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;
