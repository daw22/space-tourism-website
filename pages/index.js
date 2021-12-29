import Head from 'next/head'
import ExploreButton from '../components/expolreButton'
import styled from 'styled-components'
import Header from '../components/header'
import Wrapper from '../components/wrapper'

const BodyContainer = styled.div`
  color: white;
  flex-grow: 1;
  display: flex;
`

const BodyLeft = styled.div`
  width: 85%;
  align-self: center;
  display: flex;
  justify-content: space-between;
  align-items: end;
` 
const TextContainer = styled.div`

`
const Title = styled.h3`
  font-size: 2em;
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 300;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin: 0;
`

const MainTitle = styled.h1`
  font-family: "Bellefair", sans-serif;
  font-size: 9em;
  font-weight: 100;
  letter-spacing; 15px;
  text-transform: uppercase;
  margin: 0;
`
const Description = styled.p`
  width: 60%;
  font-family: "Barlow", sans-serif;
  font-size: 1.2em;
  line-height: 1.5;
`

export default function Home() {
  return (
    <div>
      <Head>
        <title>Space Tourism | Home</title>
        <meta name="description" content="Space tourism website" />
        <link rel="icon" href="/pictures/favicon-32x32.png" />
      </Head>
        <Wrapper backgroundImage='pictures/home/background-home-desktop.jpg'>
          <Header />      
          <BodyContainer>
            <BodyLeft>
              <TextContainer>
                <Title>so, you want to travle to</Title>
                <MainTitle>SPACE</MainTitle>
                <Description>
                  Let{"'"}s face it; if you want to go to space, you might as well genuinely go to outer space and not 
                  hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of 
                  this world experience!
                </Description>
              </TextContainer>
              <ExploreButton />
            </BodyLeft>  
          </BodyContainer>
        </Wrapper>  
      </div>
  )
}
