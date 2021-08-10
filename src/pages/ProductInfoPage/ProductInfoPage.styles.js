import styled from "styled-components";


export const Container = styled.div`
  margin: 0 auto;
  padding-top: 10vh;
  max-width: var(--maxWidth);
  min-height: 500px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  color: var(--lightGrey);
  
  
  
  .category{
    color: var(--white);
    margin-left: 10px;
  }

  @media screen and (max-width: 720px){
    flex-direction: column-reverse;
  }
`;


export const Image = styled.img`
  height: 480px;
  border-radius: 16px;
  margin: 3px;
  
  @media screen and (max-width: 720px){
    width: 100%;
    margin: 0;
    border-radius: 0;
  }
`;


export const Wrapper = styled.div`
  background: var(--dark);
  border-radius: 30px 0 0 30px;
  padding: 30px;
  margin-top: 30px;

  box-shadow: 0 0 30px 1px grey;

  @media screen and (max-width: 720px){
    padding: 10px;
    margin-top: 0;
    border-radius: 0;
  }
`;

export const Body = styled.div`

`;

export const Info = styled.div`
  width: 80%;
  margin: 30px;

  @media screen and (max-width: 720px){
    margin: 10px;
  }
  
`;


export const BtnWrapper = styled.div`
  margin: 1rem;
`;




export const SizeButton = styled.div`
  
`;

export const Description = styled.p`
  width: 80%;
  margin: 10px;
  font-size: var(--fontMed);
`;