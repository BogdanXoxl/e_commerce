import styled from "styled-components";

export const LoadingStyled = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  border: 3px dashed var(--green);
  margin: 0 auto;
  animation: loading 0.7s infinite alternate linear;
   
  
  @keyframes loading{
    0%{
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(360deg) scale(1.5);
    }
  }
`;

export const LoadingContainer = styled.div`
  height: 70vh;
  padding-top: 25vh;
`;