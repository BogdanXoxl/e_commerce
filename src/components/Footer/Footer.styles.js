import styled from "styled-components";


export const Container = styled.div`
  width: 100%;
  max-width: 720px;
  padding: 1rem 20px;
  margin: 10rem auto 1rem;
  border-top: 1px solid var(--grey);
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  gap: 1rem;
  
  @media screen and (max-width: 720px){
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fill, 1fr);
  }
`;

export const Text = styled.div`
  padding-left: 3rem;
  background: var(--white) url(${prop => prop.image}) left no-repeat;
  display: flex;
  flex-direction: column;
  
  a{
    display: block;
    margin: 1px;
    text-decoration: none;
    color: var(--dark);
    
    :hover{
      text-decoration: none;
      color: var(--darkgreen);
    }
  }

  span{
    margin-left: 3px;
    padding-left: 1rem;
    white-space: nowrap;
    background: var(--white) url(${prop => prop.imgE}) left no-repeat;
  }
`;

export const ImageBlock = styled.div`
  grid-row: 1/ span 2;
  grid-column: 3;
  

  @media screen and (max-width: 720px){
    margin-top: 1rem;
    grid-row: 4;
    grid-column: 1;
  }
  
  div{
    max-width: 300px;
    margin: 0 auto;
    
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-around;

    @media screen and (max-width: 720px){
      flex-direction: row;
      gap: .7rem;
    }
    a{
      i{
        background: var(--white);
        font-size: var(--fontSuperBig);
        color: var(--dark);
        
        width: 3rem;
        height: 3rem;
        text-align: center;
        line-height: 2.9rem;
        border: 2px solid var(--white);
        box-sizing: border-box;
        filter: drop-shadow(0px 0px 9px rgba(0, 0, 0, 0.45));
        border-radius: 10px;
        
        :hover{
          text-decoration: none;
          color: var(--green);
        }
      }
      
      :visited{
        color: var(--dark);
      }
    }
  }
`;


