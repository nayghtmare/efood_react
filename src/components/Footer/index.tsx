import { FooterBar, FooterText } from './styles'
import { SocialLinks } from '../../utils/list'
import { LogoContainer, SocialIcons } from './styles'

const logo =
  'https://raw.githubusercontent.com/nayghtmare/efood_react/refs/heads/projeto6-parte1/public/logoefood.png'

const Footer = () => (
  <FooterBar>
    <LogoContainer>
      <img src={logo} alt="efood" />
    </LogoContainer>
    <SocialIcons>
      {SocialLinks.map((item) => (
        <img src={item.icon} alt={item.title} key={item.id} />
      ))}
    </SocialIcons>
    <FooterText>2026 - by Nayghtmare</FooterText>
  </FooterBar>
)

export default Footer
