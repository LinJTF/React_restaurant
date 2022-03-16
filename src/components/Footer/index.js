import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink} from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>Top restaurant</SocialLogo>
                    <SocialIcons>
                        <SocialIconLink href='https://github.com/LinJTF' target='_blank' aria-label='Github' rel="noopener noreferrer">
                            <FaGithub />
                        </SocialIconLink>
                        <SocialIconLink href='https://www.instagram.com/felipejtlin/' target='_blank' aria-label='Instagram' rel="noopener noreferrer">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href='https://www.linkedin.com/in/felipe-lin-1b1708197/' target='_blank' aria-label='Linkedin' rel="noopener noreferrer">
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer