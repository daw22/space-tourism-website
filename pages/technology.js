import Wrapper from "../components/wrapper"
import Header from "../components/header"
import styled from 'styled-components'
import { useState } from "react"
import Head from 'next/head'

const BodyContainer = styled.div`
    flex-grow: 1;
    display: flex;
`
const BodyLeft = styled.div`
    width: 50%;
    color: white;

`
const Title = styled.h2`
    color: white;
    font-family: "Barlow Condensed";
    font-size: 2em;
    font-weight: 300;
    text-transform: uppercase;
    padding: 1em 0;
`
const TitleNum = styled.span`
    color: rgba( 255, 255, 255, .5);
    margin-right: .5em;
    letter-spacing: 2px;
`
const DetailsContainer = styled.div`
    padding-left: 2em;
    display: flex;
    align-items: center;
`
const CircleNav = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const CircleNavItem = styled.div`
    padding: 1em 1.3em;
    border-radius: 50%;
    border: 2px solid rgba( 255, 255, 255, .5);
    margin-bottom: 1em;
    font-size: 1.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    ${props=> props.activeNav == props.thisNav ? "background:white;color:black;": ""}
    &:hover{
        border-color: white;
    }
`
const DetailsTextContainer = styled.div`
    width: 80%;
    margin-left: 2em;
`
const Terminologies = styled.h3`
    font-family: "Barlow Condensed";
    font-weight: 300;
    font-size: 1em;
    letter-spacing: 2px;
    text-transform: uppercase;
`
const DetailsTitle = styled.h2`
    font-family: "Bellefair";
    font-size: 3em;
    text-transform: uppercase;
    margin: -.5em 0;
    padding: .5em 0;
`
const DetailsDescription = styled.p`
    color: white;
    font-family: "Barlow", sans-serif;
    font-size: 18px;
    line-height: 1.6em;
`
const BodyRight = styled.div`
    width: 40%;
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: end;
    overflow: hidden;
`
const Image = styled.img`
    content: url(${props=> props.imageSrc});
    height: 70vh;
`

const Technology = ({ data }) => {
    const technologyData = data.technology;
    const [ pickedTechnology, setPickedTechnology] = useState(0);
    return (
        <Wrapper backgroundImage="pictures/technology/background-technology-desktop.jpg">
            <Head>
                <title>Space Tourism | Technology</title>
                <meta name="description" content="Space tourism website" />
                <link rel="icon" href="/pictures/favicon-32x32.png" />
            </Head>
            <Header />
            <BodyContainer>
                <BodyLeft>
                    <Title>
                        <TitleNum>03</TitleNum> 
                        space launch 101
                        </Title>
                    <DetailsContainer>
                        <CircleNav>
                            {
                                technologyData.map((technology, index)=>{
                                    return(
                                        <CircleNavItem key={technology.name}
                                         onClick={()=>setPickedTechnology(index)}
                                         thisNav={index}
                                         activeNav={pickedTechnology}
                                         >
                                            {index + 1}
                                        </CircleNavItem>
                                    )                             
                                })
                            }
                        </CircleNav>
                        <DetailsTextContainer>
                            <Terminologies>the terminologies...</Terminologies>
                            <DetailsTitle>{ technologyData[pickedTechnology].name}</DetailsTitle>
                            <DetailsDescription>{ technologyData[pickedTechnology].description}</DetailsDescription>
                        </DetailsTextContainer>
                    </DetailsContainer>
                </BodyLeft>
                <BodyRight>
                    <Image 
                    imageSrc={technologyData[pickedTechnology].images.portrait}
                    alt={technologyData[pickedTechnology].name}
                    />
                </BodyRight>
            </BodyContainer>
        </Wrapper>
        )
}

export default Technology

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