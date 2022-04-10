import React, { useState } from 'react';
import '../styles/Footer.scss'
import FooterAbout from './Footer/FooterAbout';
import FooterShop from './Footer/FooterShop';
import FooterSites from './Footer/FooterSites';

const Footer = () => {

  const [about, setAbout] = useState(false)
  const [sites, setSites] = useState(false)
  const [shop, setShop] = useState(false)

  return (
    <footer>
      <div className="help flex flex-col p-5 bg-[#f5f5f5]">
        <span className='pb-8 text-sm text-[#666] font-black tracking-wide'>How can we help?</span>
        <div className="button-wrapper flex gap-3 flex-wrap">
          <button>Customer Order Status</button>
          <button>Start a Return</button>
          <button>Shipping</button>
          <button>FAQ</button>
          <button>Contact Us</button>
        </div>
      </div>
      <div className="footer-links">
        <FooterAbout isShown={about} onClick={() => { setAbout(prev => !prev) }} />
        <FooterSites isShown={sites} onClick={() => { setSites(prev => !prev) }} />
        <FooterShop isShown={shop} onClick={() => { setShop(prev => !prev)}}/>
      </div>
    </footer>
  )
}

export default Footer