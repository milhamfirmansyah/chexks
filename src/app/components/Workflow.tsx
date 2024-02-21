import React from 'react'
import workflow from '../assets/chexks_workflow.svg'
import Image from 'next/image'

function Workflow() {
  return (
    <section className="workflow">
        <div className="workflow-container">
            <Image src={workflow} alt='workflow-image'/>
            <div className="workflow-right">
                <h2>Workflow Automation.</h2>
                <p className='workflow-p1'>We do the heavy-lifting on posting payments to your accounting system so you dona&#769;t need to worry about that painful step, one thing less to worry.</p>
                <p>Through our workflow automation, Chexks accurately closes the open invoices in your cloud accounting by matching them to your issued check payment effectively closing out on the payables you choose to pay.</p>
                <button>Learn More</button>
            </div>
        </div>
    </section>
  )
}

export default Workflow