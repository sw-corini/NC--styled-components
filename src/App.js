import React, { Component, Fragment } from "react";
import styled from "styled-components";

class App extends Component {
    render() {
        return (
            <Container>
                <Button success />
                <Button danger />
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

export default App;
