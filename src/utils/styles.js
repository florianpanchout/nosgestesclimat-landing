import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

export const themes = {
  default: {
    name: 'Clair',
    colors: {
      main: '#32337B',
      mainLight: '#3696E0',
      mainDark: '#1D625E',
      second: '#EFF4F9',
      secondDark: '#B1D4F6',
      background: '#ffffff',
      text: '#32337B',
      textLight: '#FBFBFC',
      error: '#ce0500',
      errorLight: '#ffdddd',
      warning: '#fc5d00',
    },
    fonts: {
      body: '"Marianne", Arial, sans-serif',
      title: '"Marianne", Arial, sans-serif',
    },
    mq: {
      never: `@media screen and (max-width: ${0}em)`, // HACK
      xsmall: `@media screen and (max-width: ${30}em)`,
      small: `@media screen and (max-width: ${36}em)`,
      iframemedium: `@media screen and (max-width: ${42}em)`,
      medium: `@media screen and (max-width: ${48}em)`,
      large: `@media screen and (max-width: ${60}em)`,
      xlarge: `@media screen and (max-width: ${72}em)`,
    },
  },
  night: {
    name: 'Sombre',
    colors: {
      main: '#E8F8F7',
      mainLight: '#17635E',
      mainDark: '#1D625E',
      second: '#383838',
      background: '#000',
      footer: '#383838',
      footerLight: '#1e1e1e',
      text: '#ffffff',
      textLight: '#939699',
      error: '#ff5655',
      warning: '#fc5d00',
    },
    fonts: {
      body: '"Marianne", Arial, sans-serif',
      title: '"Marianne", Arial, sans-serif',
    },
    mq: {
      never: `@media screen and (max-width: ${0}em)`, // HACK
      xsmall: `@media screen and (max-width: ${30}em)`,
      small: `@media screen and (max-width: ${36}em)`,
      iframemedium: `@media screen and (max-width: ${42}em)`,
      medium: `@media screen and (max-width: ${48}em)`,
      large: `@media screen and (max-width: ${60}em)`,
      xlarge: `@media screen and (max-width: ${72}em)`,
    },
  },
}

export const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  html {
    box-sizing: border-box;
    font-family: ${(props) => props.theme.fonts.body};
    line-height: 1.4;
  }

  body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    -webkit-font-smoothing: antialiased;
  } 

  *, *:before, *:after {
    margin-top: 0;
    box-sizing: inherit;
  }

  #__next {
    overflow: hidden;
    width: 100%;
    position: relative;
  }

  a {
    color: ${(props) => props.theme.colors.main};
  }

  option {
    color: #383838;
  }
`
