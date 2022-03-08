import Button from 'react-bootstrap/Button'
import React from 'react'

const PreSignUp = (props) => {
console.log('props',props)
  
function Icon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="122.877"
        height="101.052"
        x="0"
        y="0"
        version="1.1"
        viewBox="0 0 122.877 101.052"
        xmlSpace="preserve"
      >
        <path d="M4.43 63.63A14.383 14.383 0 01.003 53.52a14.393 14.393 0 014.015-10.281 14.372 14.372 0 0110.106-4.425 14.373 14.373 0 0110.283 4.012l24.787 23.851L98.543 3.989l1.768 1.349-1.77-1.355a2.27 2.27 0 01.479-.466A14.383 14.383 0 01109.243.022V.018l.176.016c3.623.24 7.162 1.85 9.775 4.766a14.383 14.383 0 013.662 10.412h.004l-.016.176a14.362 14.362 0 01-4.609 9.632L59.011 97.11l.004.004a2.157 2.157 0 01-.372.368 14.392 14.392 0 01-9.757 3.569 14.381 14.381 0 01-9.741-4.016L4.43 63.63z"></path>
      </svg>
    );
  }

  return (
    <div className='signup-content'>
      <h1>How Stuart Increased customer loyalty in 2021</h1>
      <h5 className='text-secondary'>It’s no surprise that consumers love fast and free shipping. Amazon has gotten shoppers used to the idea that pretty much everything should be delivered in two days or less, likely to the chagrin of independent retailers struggling to meet that expectation. </h5>
      <h5 className='text-secondary'>In This Article You will Get:</h5>
      <ul className='benefits'>
        <li>{Icon()}<span className='text-black-50'>Data 1, tilte of first important note</span></li>
        <li>{Icon()}<span className='text-black-50'>Data 2, tilte of first important note</span></li>
        <li>{Icon()}<span className='text-black-50'>Data 3, tilte of first important note</span></li>
      </ul>
      <Button variant="primary" className='rounded-pill' size="lg" onClick={ (event)=>{ event.preventDefault(); props.onClick(false)}}>Grab The Guid</Button>
    </div>

  )
}

export default PreSignUp