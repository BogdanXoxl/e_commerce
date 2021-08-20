import styled from "styled-components";

export const Container = styled.div`
  padding-top: 15vh;
  margin: 0 auto 30px;
  max-width: var(--maxWidth);
  min-height: 100vh;

  h1{
    color: var(--dark);
    text-align: center;
    padding-bottom: 3rem;
  }
`;

export const Wrapper = styled.div`
  width: 80vw;
  margin-left: 1rem;
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

  @media screen and (max-width: 940px){
    justify-content: center;
    width: 100vw;
    margin-left: 0;
    grid-template-columns: repeat(auto-fit, 21rem);
  }
  
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .hidden-el{
    display: none;
  }
  
  .active{
    background: var(--green);
    color: var(--white);
  }
  
  @media screen and (max-width: 720px){
    flex-direction: column;
    .hidden-el{
      display: inline-block;
      width: 100vw;
      line-height: 3rem;
      text-align: center;
      font-size: var(--fontMed);
      color: var(white);
    }
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
    
    :first-child{padding-top: 1rem;}
    :last-child{padding-bottom: 1rem;}
    :not(.active):hover{
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
