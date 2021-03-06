import styled from "styled-components";

export const Container = styled.div`
  max-width: var(--maxWidth);
  padding-top: 14vh;
  min-height: 50vh;
  margin: 0 auto 1rem;

  h2{
    font-size: var(--fontSuperBig);
    margin: 0 auto 3rem;
    text-align: center;
    border-bottom: 1px solid var(--grey);
  }
  
  .title{
    background: var(--green);
    color: var(--white);
  }
`;


export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  animation: animatePic .7s;

  @keyframes animatePic {
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }
  
  a{
    text-decoration: none;
    color: var(--lightGrey);
    
    :hover{
      color: var(--white);
    }
  }
  
  @media screen and (max-width: 720px){
    flex-direction: column;
  }
`;



export const SideBar = styled.div`

  color: var(--lightGrey);
  width: 18vw;
  li{
    list-style: none;
    background: var(--dark);
    padding: .5rem 2rem;
    border-bottom: 1px solid var(--white);

    :last-child{padding-bottom: 1rem;}
    :not(.title):hover{
      background: var(--darkBlue);
      color: var(--white);
    }
  }

  @media screen and (max-width: 720px){
    width: 100vw;
    line-height: 2rem;
    li{
      padding-left: 2rem;
    }
  }

`;


export const Prices = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 50vw;
  margin: 0 auto;

  @media screen and (max-width: 720px){
    width: 100vw;
    max-width: 100vw;
    overflow: hidden;
    margin: 1px;
  }
`;
