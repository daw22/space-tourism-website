import Wrapper from '../components/wrapper'
import Header from '../components/header'
import styled from 'styled-components'
import { useState } from 'react'
import Head from 'next/head'

const BodyContainer = styled.div`
    flex-grow: 1;
    display: flex;
` 
const BodyLeft = styled.div`
    width: 40%; 
    display: flex;
    align-items: start;
    flex-flow: column;
`
const Title = styled.h2`
    font-family: "Barlow Condensed", sans-serif;
    font-size: 2em;
    font-weight: 300;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: white;
`
const TitleNumber = styled.span`
    color: rgba( 255, 255, 255, .5);
    margin-right: .5em;
`
const Image = styled.img`
    flex-grow: 1;
    margin-top: 2em;
    content: url(${props => props.ImagePath});
    width: 80%;
`
const BodyRight = styled.div`
    width: 60%;
    display: flex;
    flex-flow: column;
`   
const DestinationsNav = styled.ul`
    display: flex;
    align-items: center;
    width: 70%;
    padding: 0;
` 
const DestinationsNavItem = styled.li`
    border-bottom: 2px solid rgba( 0, 0, 0, 0);
    border-color: ${props => props.ActiveMenu === props.thisMenu ? 'white' : "rgba( 0, 0, 0, 0)"};
    margin: 0;
    padding: 0;
    color: white;
    list-style: none;
    letter-spacing: 2px;
    padding: 2em 0;
    font-family: "Barlow Condensed", sans-serif;
    text-transform: uppercase;
    margin-right: 1.5em;
    cursor: pointer;
    &:hover{
        border-bottom: 2px solid rgba( 255, 255, 255, .5);
    }
    `
const DestinationsDetail = styled.div`
    flex-grow: 1;
`
const DestinationName = styled.h1`
    font-family: "Bellefair";
    color: white;
    font-size: 7em;
    margin: 0;
    font-weight: 100;
    text-transform: uppercase;
`
const DestiantionDesc = styled.p`
    font-family: "Barlow", sans-serif;
    font-size: 18px;
    line-height: 2em;
    color: white;
    width: 80%;
`
const Divider = styled.div`
    width: 80%;
    height: 1px;
    background: rgba( 255, 255, 255, .4);
    margin: 0.5em 0;
`
const TitleBar = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .5em 0;
`
const Variable = styled.span`
    color: white;
    font-family: "Barlow Condensed", sans-serif;
    text-transform: uppercase;
`

const Value = styled.span`
    color: white;
    font-family: "Barlow";
    text-transform: uppercase;
    padding: .5em 0;
`
const Destination = ({ data }) => {
    const destinationData = data.destinations;
    const [pickedDestiantion, setPickedDestiantion] = useState(0);
    return (
        <Wrapper backgroundImage="pictures/destination/background-destination-desktop.jpg">
            <Head>
                <title>Space Tourism | Destiantion</title>
                <meta name="description" content="Space tourism website" />
                <link rel="icon" href="/pictures/favicon-32x32.png" />
            </Head>
            <Header />
            <BodyContainer>
                <BodyLeft>
                    <Title>
                        <TitleNumber>01</TitleNumber>
                        pick your destiantion
                    </Title>
                    <Image 
                    ImagePath={destinationData[pickedDestiantion].images.png}
                    alt={destinationData[pickedDestiantion].name}
                    />
                </BodyLeft>
                <BodyRight>
                    <DestinationsNav>
                        {
                            destinationData.map((destination, index) =>{
                                return (
                                        <DestinationsNavItem 
                                            key={destination.name} 
                                            onClick={()=> setPickedDestiantion(index)}
                                            ActiveMenu = {pickedDestiantion}
                                            thisMenu = {index}
                                            > 
                                            { destination.name } 
                                        </DestinationsNavItem>
                                )
                            })
                        }
                    </DestinationsNav>
                    <DestinationsDetail>
                        <DestinationName> {destinationData[pickedDestiantion].name}</DestinationName>
                        <DestiantionDesc> {destinationData[pickedDestiantion].description }</DestiantionDesc>
                        <Divider/>
                        <TitleBar>
                            <Variable>avg. distance</Variable>
                            <Variable>est. tranvel time</Variable>
                        </TitleBar>
                        <TitleBar>
                            <Value> { destinationData[pickedDestiantion].distance } </Value>
                            <Value> { destinationData[pickedDestiantion].travel} </Value>
                        </TitleBar>
                    </DestinationsDetail>
                </BodyRight>
            </BodyContainer>
        </Wrapper>    
    )
}

export default Destination

export async function getServerSideProps(context){
    let httpProtocol; 

    if (context.req.headers.host.includes("localhost")){
      httpProtocol = 'http';
    }
    else{
      httpProtocol = 'https';
    }
    
    const res = await fetch(`${httpProtocol}://${context.req.headers.host}/api`);
    const data = await res.json();
    
    return {
        props:{
            data
        }
    }
}