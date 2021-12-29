import styled from 'styled-components';
import Navbar from './navbar';

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 1em 0;
`
const Logo = styled.img`
    margin-right: 1em;
    height: 3em;
    width: 3em;
    content: url('/pictures/shared/logo.svg')
`
const Line = styled.div`
    background: rgba(255,255,255,.3);
    width: 40%;
    height: 1px;
`
const Header = () => {
    return (
        <HeaderContainer>
            <Logo/>
            <Line />
            <Navbar />
        </HeaderContainer>
    )
}

export default Header;
