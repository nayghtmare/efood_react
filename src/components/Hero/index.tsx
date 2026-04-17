const logo =
  'https://raw.githubusercontent.com/nayghtmare/efood_react/refs/heads/projeto6-parte1/public/logoefood.png'
const background =
  'https://raw.githubusercontent.com/nayghtmare/efood_react/refs/heads/projeto6-parte1/public/background.png'
import { Container } from '../../global/globalStyle'

import {
  HeroContainer,
  HeroHeader,
  Text,
  TextContainer,
  Title,
  TitleLink
} from './styles'

type HeroProps = {
  title?: string
  textContent?: string
}

const Hero = ({ textContent, title }: HeroProps) => {
  function renderHeaderContent(item: string | undefined) {
    if (item === undefined) {
      return (
        <a href="/" title="Logo efood">
          <img src={logo} alt="Logo efood" />
        </a>
      )
    }

    return (
      <HeroHeader>
        <TitleLink to="/">{item}</TitleLink>
        <a href="/" title="Logo efood">
          <img src={logo} alt="Logo efood" />
        </a>
        <Title>{}</Title>
      </HeroHeader>
    )
  }

  return (
    <HeroContainer style={{ backgroundImage: `url(${background})` }}>
      <Container>
        {renderHeaderContent(title)}

        {textContent && (
          <TextContainer>
            <Text>{textContent}</Text>
          </TextContainer>
        )}
      </Container>
    </HeroContainer>
  )
}

export default Hero
