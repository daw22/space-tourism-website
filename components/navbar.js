import styled from "styled-components"
import Link from 'next/link'
import { useRouter} from 'next/router'

const NavContainer = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
    padding: .3em 3em;
    color: white;
    background: rgba(255,255,255,0.1);
    backdrop-filter: blur(5px);
`
const NavList = styled.ul`
    display: flex;
    list-style: none;
`
const NavListItem = styled.a`
    border-bottom: ${props => props.href === props.pathname ? '2px solid white' : 'none'};
    text-decoration: none;
    text-transform: uppercase;
    padding: 1em 0;
    margin-right: 1.5em;
    letter-spacing: 2px;
    font-family: 'Barlow Condensed', sans-serif;
    cursor: pointer;
    &:hover{
        border-bottom: 2px solid rgba( 255, 255, 255, .5);
    }
`

const NavListItemNumber = styled.span`
    font-family: 'Barlow Condensed', sans-serif;    
    font-weight: 900;
    font-size: 1.2em; 
    letter-spacing: 2px;
    margin-right: .4em;
`
const Navbar = () => {
    const router = useRouter();
    return (
        <NavContainer>
            <NavList>
                <Link href="/" passHref>
                    <NavListItem pathname={router.pathname}>
                        <NavListItemNumber>00</NavListItemNumber>
                        home
                    </NavListItem>
                </Link>
                <Link href="/destination" passHref>
                    <NavListItem pathname={router.pathname}>
                        <NavListItemNumber>01</NavListItemNumber>
                        destination
                    </NavListItem>    
                </Link>
                <Link href="/crew" passHref>
                    <NavListItem pathname={router.pathname}>
                        <NavListItemNumber>02</NavListItemNumber>
                        crew
                    </NavListItem>    
                </Link>
                <Link href="/technology" passHref>
                    <NavListItem pathname={router.pathname}>
                        <NavListItemNumber>03</NavListItemNumber>
                        technology
                    </NavListItem>    
                </Link>
            </NavList>
        </NavContainer>
    )
}

export default Navbar
