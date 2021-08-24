import styled from "styled-components";

export const Container  = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 10px;
  padding: 1rem;
  background: var(--white);
  box-shadow: 0 5px 10px 2px rgba(34, 60, 80, 0.2);
  max-width: var(--maxWidth);
  margin: 1rem;

  animation: animateThumb .5s;

  @keyframes animateThumb {
    from{
      opacity: 0;
    }
    to{
      opacity: 1;
    }
  }
 

  a{
    text-decoration: none;
    color: var(--dark);
  }

  button{
    margin: 1rem auto;
  }
  
  @media screen and (max-width: 720px){
    flex-direction: column;
  }
`;

export const Title  = styled.h3`
  font-size: var(--fontMed);
  font-weight: var(--fontWBold);
  text-transform: uppercase;
  margin: 3rem 0 1rem;
`;

export const Description  = styled.div`
    text-align: left;
`;

export const IMGContainer  = styled.div`
  position: relative;
  overflow:hidden;
  min-height: 35vh;
  width: 30vw;
  border-radius: 7px;

  @media screen and (max-width: 720px){
    height:50vh;
    width: 100%;
    order: -1;
  }
`;

export const Image  = styled.img`
  position: absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  width:100%;
  height:100%;
  object-fit:cover;
`;

export const Content = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  
  @media screen and (max-width: 720px){
    width: 100%;
  }
  padding: 0 10vw;
`;