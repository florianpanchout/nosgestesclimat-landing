import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import copy from 'copy-to-clipboard'
import styled from 'styled-components'
import AnimatedNumber from 'animated-number-react'

import useNumClick from '@/hooks/useNumClick'
import Button from '@/components/Button'

const Wrapper = styled.div`
  max-width: 45rem;
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
const Subtitle = styled.h2`
  font-size: 1.25rem;
  line-height: 1.75rem;
`
const Separator = styled.div`
  width: 3rem;
  height: 3px;
  margin-bottom: 1rem;
  background-color: ${(props) => props.theme.colors.mainLight};
`
const Text = styled.p`
  font-size: 1.5rem;
`
const Center = styled.p`
  display: block;
  margin-bottom: 3rem;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;

  span {
    display: inline-block;
    min-width: 6rem;
    text-align: right;
  }
`
const GifWrapper = styled.div`
  margin-bottom: 3rem;
  border-radius: 0.375rem;
`
const Share = styled.div`
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.textLight};
  border-radius: 0.375rem;
`
export default function Home() {
  const kgCo2ePerClick = 20
  const { data: numClick } = useNumClick()

  const [copied, setCopied] = useState(false)

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
            alt='Nos Gestes Climat'
          />
          <Logo>
            Nos
            <br />
            Gestes
            <br />
            Climat
          </Logo>
        </Header>
        <Title>Merci et bravo pour votre engagement&#8239;!</Title>
        <Separator />
        <Text>
          Vous êtes maintenant <strong>{numClick}</strong> à participer à notre{' '}
          <strong>Défi Climat de l&apos;automne</strong>, ce qui fait grimper le
          compteur&#8239;:
          <br />
        </Text>
        <Center>
          <AnimatedNumber
            value={numClick * kgCo2ePerClick}
            formatValue={(value) => Math.round(value)}
          />
          &nbsp;kg&nbsp;CO<sub>2</sub>e évités grâce à vous&#8239;!
        </Center>
        <GifWrapper>
          <Image
            src={'/bike.gif'}
            layout={'responsive'}
            height={175}
            width={175}
            alt={`Vélo`}
            unoptimized={true}
          />
        </GifWrapper>
        <Share>
          <Subtitle>
            Pour aller plus loin partage Nos Gestes Climat à tes amis
          </Subtitle>
          <Button
            onClick={() => {
              window?._paq?.push([
                'trackEvent',
                'Interaction',
                'Lien landing newsletter copié',
              ])
              if (
                copy('https://nosgestesclimat.fr/?mtm_campaign=steack-pasteque')
              ) {
                setCopied(true)
              }
            }}
          >
            {copied ? <>Copié !</> : <>Copier le lien</>}
          </Button>
        </Share>
      </Wrapper>
    </>
  )
}
