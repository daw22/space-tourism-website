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
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around; 
`
const Title = styled.h2`
    font-family: "Barlow Condensed", sans-serif;
    font-size: 2em;
    font-weight: 300;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: ${props => props.color};
`
const TitleNum = styled.span`
    color: rgba( 255, 255, 255, .5);
    margin-right: .5em;
`
const Name = styled.h1`
    color: white;
    font-family: "Bellefair";
    font-size: 3em;
    text-transform: uppercase;
    margin: -.5em 0;
    padding: 0;
`
const Description = styled.p`
    width: 80%;
    color: white;
    font-family: "Barlow", sans-serif;
    font-size: 18px;
    line-height: 1.6em;
`
const PaginationContainer = styled.div`
    display: flex;
    align-items: center;
    pading: .5em 0;
    margin-top: -1em;
    margin-bottom: 2em;
`
const Pagiantion = styled.div`
    width: 1em;
    height: 1em;
    margin-right: 1.5em;
    background: ${props => props.activePag == props.thisPag ? 'white' : 'rgba( 255, 255, 255, .5)'};
    border-radius: 50%;
    &:hover{
        background: white;
    }
`
const BodyRight = styled.div`
    display: flex;
    justify-content: center;
    flex-flow: column;
    width: 50%;
    padding: 0 10%;
`
const ImageContainer = styled.div`
    height: 70vh;
    flex-grow: 1;
    display: flex;
    align-items: end;
`
const Image = styled.img`
    content: url(${props=> props.imageSrc});
    height: 90%;
`
const Crew = ({ data }) => {
    const crewData = data.crew;
    const [pickedCrewMember, setPickedCrewMember] = useState(0);
    return (
        <Wrapper backgroundImage="pictures/crew/background-crew-desktop.jpg">
            <Head>
                <title>Space Tourism | Crew</title>
                <meta name="description" content="Space tourism website" />
                <link rel="icon" href="/pictures/favicon-32x32.png" />
            </Head>
            <Header />
            <BodyContainer>
                <BodyLeft>
                    <Title color='white'>
                        <TitleNum>02</TitleNum>
                        meet your crew
                        </Title>
                    <>
                        <Title color='rgba( 255, 255, 255, .5)'> { crewData[pickedCrewMember].role } </Title>
                        <Name>{ crewData[pickedCrewMember].name }</Name>
                        <Description>{ crewData[pickedCrewMember].bio}</Description>
                        <PaginationContainer>
                            {
                                crewData.map((crew, index)=>{
                                    return(
                                        <Pagiantion 
                                            key={crew.name}
                                            onClick={()=> setPickedCrewMember(index)}
                                            activePag = {pickedCrewMember}
                                            thisPag = {index}
                                        />
                                    )
                                })
                            }
                        </PaginationContainer>    
                    </>
                </BodyLeft>
                <BodyRight>
                    <ImageContainer>
                        <Image 
                        imageSrc={crewData[pickedCrewMember].images.png}
                        alt={crewData[pickedCrewMember].name} />
                    </ImageContainer>
                </BodyRight>
            </BodyContainer>  
        </Wrapper>
    )
}

export default Crew

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