import React from "react";
import styled from "styled-components";
// import PropTypes from 'prop-types';

const DIV = styled.div`
    text-align:center;
    margin:auto;
`;
class TugasComponent extends React.Component {
    state = {
        value: 0
    }
    handlePlus = () => {
        this.setState({ value: this.state.value + 1 })
    }
    handleMinus = () => {
        if (this.state.value > 0) {
            this.setState({ value: this.state.value - 1 })
        }
    }
    render() {
        return (
            <DIV>
                <h1>Tugas Membuat Komponen</h1>
                <h3>Fitur Button Plus dan Minus</h3>
                <button onClick = {this.handleMinus}>-</button>
                <span>{` `}{this.state.value}{` `}</span>
                <button onClick={this.handlePlus}>+</button>
            </DIV>
        )
    }
}

export default TugasComponent;