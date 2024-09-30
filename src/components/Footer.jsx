

import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { SiIfood } from "react-icons/si";


const Footer = () => {
  return (
    <div className='redes-sociais'>
        <FaInstagram />
        <FaFacebook />
        <SiIfood />
        <div>
            <p>© Hamburgueria Dev </p>
        </div>
    </div>
  )
}

export default Footer
