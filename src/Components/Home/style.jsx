import styled from "styled-components "

export const MainStyle = styled.main `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: #F5F5F5;
    gap: 20px;
    padding: 20px;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    @media (max-width: 768px) {
        height: auto;
        padding: 20px 0;
    }
`	