import React from 'react';
import styled from 'styled-components';

const Pantone = styled.div`
    padding: 1em;
    display: inline-block;
    margin: 0.5em;
    color: ${props => props.color || "#fff"};
    background: ${props => props.bgColor || "#00b3e3"};
    border: none;
    text-transform: uppercase;
`;

export { Pantone };