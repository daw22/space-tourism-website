import styled from 'styled-components'
import { useRouter } from 'next/router'
const Button = styled.div`
    align-self: end;
    height: 11em;
    width: 11em;
    border-radius: 50%;
    background: #FFF;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    `
const ButtonText = styled.span`
    font-size: 2em;
    font-family: "Bellefair";
    text-transform: uppercase;
    color: black;
`
const Bubble = styled.div`
    position: absolute;
    background: rgba( 255, 255, 255, .3);
    width: 11em;
    height: 11em;
    border-radius: 50%;
    z-index: 1;
    transition: transform .5s ease-out;
    &:hover{
        transform: scale(1.5);
    }
`
const ExploreButton = () => {
    const router = useRouter();
    const handdleClick = ()=>{
        router.push("/destination");
    }
    return (
        <div> 
            <Button onClick={handdleClick}>
                <ButtonText>Explore</ButtonText>
                <Bubble></Bubble>
            </Button>
        </div>
    )
}

export default ExploreButton
