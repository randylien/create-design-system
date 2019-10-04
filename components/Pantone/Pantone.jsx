import styled from 'styled-components';
import { space, color, layout } from 'styled-system'


const Pantone = styled.div`
    padding: 1em;
    display: inline-block;
    margin: 0.5em;
    color: ${props => props.color || "#fff"};
    background: ${props => props.bgColor || "#00b3e3"};
    border: 1px solid black;
    text-transform: uppercase;
`;

export { Pantone };