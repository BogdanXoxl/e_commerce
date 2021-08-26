import styled from "styled-components";


export const Container = styled.div`
  padding-top: 15vh;
  min-height: 50vh;
  max-width: var(--maxWidth);
  margin: 0 auto;
`;

export const NotFound = styled.div`
  color: var(--dark);
  font-size: var(--fontSuperBig);
  text-align: center;
  width: 100%;
  margin-top: 10vh;
  font-weight: var(--fontWBold);
  text-transform: capitalize;
`;
export const Content = styled.div`
  p{
    max-width: 720px;
    margin: 0 auto;
    padding: 1rem;
  }

  pre {
    width: 100%;
    padding: 3rem;
    margin: 0;
    overflow: auto;
    overflow-y: hidden;
    font-size: 12px;
    line-height: 20px;
    border: 3px solid var(--green);
    border-radius: 1px;
  }
  
  img{
    margin: 0 auto;
  }
`;

export const Item = styled.div`

`;