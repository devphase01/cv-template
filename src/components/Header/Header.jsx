import './Header.scss';

import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin, BsTelegram } from 'react-icons/bs';


const Header = () => {
  return (
    <div className="cv__header">
      <div className="cv__header-name">Ihor Voznyi</div>
      <div className="cv__header-position">Junior Full-Stack Developer</div>
      <div className="cv__header-contacts">
        <a href="mailto:ihor.voznyi01@gmail.com" className="cv__header-contact email">ihor.voznyi01@gmail.com</a>
        <div className="dash" />
        <a href="tel:0996348751" className="cv__header-contact phone">+380-99-634-8-751</a>
        <div className="dash" />
        <a href="http://maps.google.com/maps?q=Ukraine, Lviv, Zaliznychnyi district" className="cv__header-contact location" target="blank">Lviv, Ukraine</a>
      </div>
      <div className="cv__header-social">
        <a href="https://www.linkedin.com/in/ihor-voznyi-769744231/" className="cv__header-social-link" target="blank">
          <BsLinkedin />
        </a>
        <div className="dash" />
        <a href="https://github.com/devphase01" className="cv__header-social-link" target="blank">
          <AiFillGithub />
        </a>
        <div className="dash" />
        <a href="hee" className="cv__header-social-link"><BsTelegram /></a>
      </div>
    </div>
  )
}

export default Header