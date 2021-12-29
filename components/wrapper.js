import styled from 'styled-components'

const WrapperContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding-left: 10%;
  display: flex;
  flex-flow: column;
  background: url(${props=> props.backg});
`
const Wrapper = (props) => {
    return (
        <WrapperContainer backg={props.backgroundImage}>
            { props.children}
        </WrapperContainer>
    )
}

export default Wrapper
