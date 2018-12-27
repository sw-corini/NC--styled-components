import React, { Component } from "react";
import styled, { css, createGlobalStyle, keyframes } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        padding:0;
        margin:0;
    }
`;

class App extends Component {
    render() {
        return (
            <Container>
                <Button success>Hello</Button>
                <Button danger rotationTime={5}>
                    Hello
                </Button>
                <Anchor href="//google.com">Go to google</Anchor>
                <GlobalStyle />
            </Container>
        );
    }
}

const Container = styled.div`
    height: 100vh;
    width: 100%;
    background-color: #00838f;
`;
const Button = styled.button`
    border-radius: 50px;
    padding: 5px;
    min-width: 120px;
    color: #fff;
    font-weight: 600;
    -webkit-appearance: none;
    cursor: pointer;
    &:active,
    &:focus {
        outline: none;
    }
    background-color: ${props => (props.danger ? "#ec407a" : "#66bb6a")};
    ${props => rotationAnimation(props)}
`;
const Anchor = styled(Button.withComponent("a"))`
    text-decoration: none;
`;

const rotation = keyframes`
    from {
        transform:rotate(0deg)
    }
    to {
        transform:rotate(360deg)
    }
`;

const rotationAnimation = props => {
    console.log(props);
    if (props.danger) {
        return css`
            animation: ${rotation} ${props.rotationTime}s linear infinite;
        `;
    }
};

export default App;
