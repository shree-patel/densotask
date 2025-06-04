import React from 'react'
import IconBrand from '../assets/favicon (1).ico';

const Footer = () => {
  return (
    <div className="text-end text-muted small pt-5 mt-5 ">
      Powered by Optimized Solutions Limited
      <img
            src={IconBrand}
            alt="Company Icon"
            width="20"
            height="20"
            className="ms-1"
          />
    </div>
  )
}

export default Footer