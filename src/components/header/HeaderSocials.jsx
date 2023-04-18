import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/chia-jung-emily/" target="_blank" rel="noreferrer" ><BsLinkedin size={50}/></a>
      <a href="https://github.com/Laucherooo" target="_blank" rel="noreferrer" ><FaGithub size={50}/></a>
    </div>
  )
}

export default HeaderSocials