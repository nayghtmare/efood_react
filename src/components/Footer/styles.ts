import styled from 'styled-components'
import theme from '../../global/theme'

export const FooterBar = styled.footer`
  background-color: #fff;
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.05);
`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
`

export const FooterText = styled.p`
  color: #a3a3a3;
  font-size: 14px;
  margin-top: 8px;
  text-align: center;
`

export const SocialIcons = styled.div`
  display: flex;
  gap: 8px;
  margin: 32px auto 80px;

  img {
    width: 24px;
    height: 24px;
  }
`

export const Text = styled.p`
  color: ${theme.Colors.text};
  font-size: ${theme.fontSizes.body};
  text-align: center;
  font-weight: 400;
  line-height: normal;
`
