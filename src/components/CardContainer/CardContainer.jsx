import styled from "styled-components";

const CardContainer = styled.ul`
    padding: 32px;
    text-align: center;
    display: grid;
    gap: 16px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));

    li {
        list-style: none;
    }
`;

export default CardContainer;