import styled from "styled-components";

export const Container = styled.div`
  min-height: 50vh;
  padding-top: 15vh;
  max-width: var(--maxWidth);
  margin: 0 auto 5rem;
  
  h1{
    width: 100%;
    font-size: 5rem;
    color: var(--green);
    font-family: 'American Typewriter', sans-serif;
    margin: 10vh auto 0;
    text-align: center;
  }
  p{
    font-size: var(--fontBig);
    color: var(--orange);
    text-align: center;
  }
`;
