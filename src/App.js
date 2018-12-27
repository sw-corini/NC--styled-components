import React, { Component } from "react";
import styled, { css, createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        padding:0;
        margin:0;
    }
`;

const awesomeCard = css`
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
`;

const Input = styled.input.attrs({
    required: true
})`
    border: none;
    border-radius: 5px;
    ${awesomeCard}
`;

class App extends Component {
    render() {
        return (
            <Container>
                <Input placeholder="hello" />
            </Container>
        );
    }
}

const Container = styled.div`
    height: 100vh;
    width: 100%;
    background-color: #00838f;
`;

export default App;
