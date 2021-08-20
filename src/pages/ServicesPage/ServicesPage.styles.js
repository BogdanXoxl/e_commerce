import styled from "styled-components";

export const Container = styled.div`
  padding-top: 15vh;
  min-height: 80vh;
  max-width: var(--maxWidth);
  margin: 0 auto;
  
  h2{
    font-size: var(--fontSuperBig);
    margin: 0 auto;
    text-align: center;
  }
`;


export const Error = styled.div`
  width: 100%;
  padding-top: 15vh;
  text-align: center;
  h1{
    font-size: var(--fontSuperBig);
    color: var(--orange);
    margin: 0 auto;
  }
`;