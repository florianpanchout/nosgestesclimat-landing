import Head from 'next/head'
import Image from 'next/image'

import styled from 'styled-components'
import AnimatedNumber from 'animated-number-react'

import useNumClick from '@/hooks/useNumClick'

const Wrapper = styled.div`
  max-width: 44rem;
  margin: 2rem auto;
  padding: 0 1rem;
`
const Header = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem auto;
  text-decoration: none;
`
const Logo = styled.div`
  font-weight: 900;
  line-height: 1;
  text-transform: uppercase;
  font-size: 1.75rem;
  margin-left: 0.2rem;
`
const Title = styled.h1`
  margin-top: 0;
  margin-top: 1.25rem;
  font-size: 2.25rem;
  font-weight: bold;
  font-family: ${(props) => props.theme.fonts.title};
  line-height: 1.2;
  color: ${(props) => props.theme.colors.main};
`
const Separator = styled.div`
  width: 3rem;
  height: 3px;
  margin-bottom: 1rem;
  background-color: ${(props) => props.theme.colors.mainLight};
`
const BigText = styled.p`
  font-size: 1.5rem;
`
const Color = styled.span`
  color: ${(props) => props.theme.colors.main};
`
export default function Home() {
  const kgCo2ePerClick = 14
  const { data: numClick } = useNumClick()

  return (
    <>
      <Head>
        <title>Troque ton steak 🥩 pour une pastèque 🍉</title>
        <meta
          name='description'
          content='On vous met au défi ce mois-ci de changer vos projets viande grillée en projets légumes marinés… Prêt.e.s à relever le défi de transformer a minima 3 barbecues de l’été en repas végétariens ?'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Wrapper>
        <Header href='https://nosgestesclimat.fr/'>
          <Image
            src='/logo.png'
            width={100}
            height={100}
            alt='Picture of the author'
          />
          <Logo>
            Nos
            <br />
            Gestes
            <br />
            Climat
          </Logo>
        </Header>
        <Title>Félicitation !</Title>
        <Separator />
        <BigText>
          <Color>
            Vous êtes maintenant {numClick} à participer au challenge !
          </Color>
          <br />
          Soit{' '}
          <AnimatedNumber
            value={numClick * kgCo2ePerClick}
            formatValue={(value) => Math.round(value)}
          />{' '}
          kg CO2e évités cet été !
        </BigText>
      </Wrapper>
    </>
  )
}
