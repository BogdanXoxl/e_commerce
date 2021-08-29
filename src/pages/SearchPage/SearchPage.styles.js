import styled from "styled-components";

export const Container = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto 3rem;
  padding-top: 15vh;
  min-height: 70vh;

  display: grid;
  grid-template-columns: repeat(auto-fit, 15rem);
  grid-gap: 10px;
  justify-content: stretch;
  animation: animateThumb .5s;

  @keyframes animateThumb {
    from{
      opacity: 0;
    }
    to{
      opacity: 1;
    }
  }
  
  h1{
    padding-top: 21vh;
    grid-column: 1/-1;
    text-align: center;
    color: var(--orange);
  }
  h3{
    grid-column: 1/-1;
    font-size: var(--fontMed);
  }

  @media screen and (max-width: 940px){
    justify-content: center;
    width: 100vw;
    overflow: hidden;
    grid-template-columns: repeat(auto-fit, 21rem);
  }
`;