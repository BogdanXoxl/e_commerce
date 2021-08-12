import styled from "styled-components";

export const Container = styled.div`
  padding-top: 15vh;
  margin: 0 auto 30px;
  max-width: var(--maxWidth);

  h1{
    color: var(--dark);
    text-align: center;
    padding-bottom: 3rem;
  }
`;

export const Wrapper = styled.div`
  width: 80vw;
  display: grid;
  grid-template-columns: repeat(auto-fit, 15rem);
  grid-gap: 10px;
  justify-content: center;
  animation: animateThumb .5s;

  @keyframes animateThumb {
    from{
      opacity: 0;
    }
    to{
      opacity: 1;
    }
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
    :hover{
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