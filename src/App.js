import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";

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
                <Button success />
                <Button danger />
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
`;
const Anchor = styled(Button.withComponent("a"))`
    text-decoration: none;
`;

export default App;
