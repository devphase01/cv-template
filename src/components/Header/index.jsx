import './index.scss';

import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin, BsTelegram } from 'react-icons/bs';

const Header = () => {
  return (
    <div className="cv__header">
      <div className="cv__header-name">Ihor Voznyi</div>
      <div className="cv__header-position">Junior Full-Stack Developer</div>
      <div className="cv__header-contacts">
        <a href="mailto:example@gmail.com" className="cv__header-contact email">example@gmail.com</a>
        <div className="dash" />
        <a href="tel:00000000" className="cv__header-contact phone">+380-00-00-0-00</a>
        <div className="dash" />
        <a href="http://maps.google.com/maps?q=England, London" className="cv__header-contact location" target="blank">London, England</a>
      </div>
      <div className="cv__header-social">
        <a href="https://www.linkedin.com/" className="cv__header-social-link" target="blank">
          <BsLinkedin />
        </a>
        <div className="dash" />
        <a href="https://github.com/devphase01" className="cv__header-social-link" target="blank">
          <AiFillGithub />
        </a>
        <div className="dash" />
        <a href="somebody" className="cv__header-social-link"><BsTelegram /></a>
      </div>
    </div>
  )
}

export default Header