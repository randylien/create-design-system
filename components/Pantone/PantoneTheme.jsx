import styled from 'styled-components';

/* declare a styled-component named Pantone, its HTML tag would be div.
 * styled-component supports tag template literals. Put your css rules inside the pair of back-tick.
 * It can support template's placeholder to embed JavaScript like ${props => props.color || "#fff"};
*/
const PantoneTheme = styled.button`
    padding: 1em;
    display: inline-block;
    vertical-align: middle;
    margin: 0.5em;
    color: ${props => props.theme.color || "#fff"};
    background: ${props => props.theme.backgroundColor || "#00b3e3"};
    border: ${props => props.theme.border || "1px solid black"};
    text-transform: uppercase;
    border-radius: 3px;
    min-width: 136px;
    text-align: center;
    cursor: pointer;
    &:hover {
        background-color: ${props => props.theme.hover.backgroundColor || "#fff"};
        color: ${props => props.theme.hover.color || "#000"};
    }
`;

export { PantoneTheme };