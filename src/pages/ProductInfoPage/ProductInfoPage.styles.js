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

  animation: animateThumb 0.5s;
  
  @keyframes animateThumb {
    from{
      opacity: 0;
    }
    to{
      opacity: 1;
    }
  }
  
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
  max-height: 420px;

  box-shadow: 0 0 30px 1px grey;

  @media screen and (max-width: 720px){
    padding: 10px;
    margin-top: 0;
    border-radius: 0;
  }
`;



export const Info = styled.div`
  width: 80%;
  margin: 20px;

  @media screen and (max-width: 720px){
    margin: 10px;
  }
  
`;

export const Description = styled.p`
  width: 80%;
  margin: 10px;
  font-size: var(--fontMed);
`;

export const SizeButton = styled.div`
  position: relative;
  padding: 0 5px;
  margin: 3px;
  outline: 1px solid var(--darkgreen);
  border-radius: 3px;
  cursor: pointer;
  
  
  :hover{
    outline-color: var(--green);
  }
`;

export const BtnWrapper = styled.div`
  margin: 1rem;
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1rem;
  
  span{
    margin-right: 5px;
  }
`;