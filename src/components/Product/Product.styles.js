import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: var(--white);
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 5px 10px 2px rgba(34, 60, 80, 0.2);
  text-align: center;
  }
  
  a{
    text-decoration: none;
    color: var(--dark);
  }
  
  button{
    margin: 1rem auto;
  }
  
  @media (max-height: 720px) and (min-width: 720px){
    height: 52vh;
  }
`;


export const Title = styled.h3`
  font-size: var(--fontMed);
  text-transform: capitalize;
  font-weight: var(--fontWBold);
  margin-top: 1rem;
`;

export const Image = styled.img`
  position: absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  width:100%;
  height:100%;
  object-fit:cover;

  :hover {
    opacity: 0.7;
  }

  animation: animatePic 1.6s;

  @keyframes animatePic {
    0%{
      opacity: 0;
    }
    50%{
      opacity: 0.1;
    }
    100%{
      opacity: 1;
    }
  }
`;

export const IMGContainer = styled.div`
  position: relative;
  overflow:hidden;
  width:100%;
  height: 280px;
  max-height:30vh;
  margin: 0 auto;
  border-radius: 7px;
  
  @media screen and (max-width: 720px){
    height:50vh;
  }
`;



