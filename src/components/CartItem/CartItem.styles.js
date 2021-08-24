import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  box-shadow: 0 5px 10px 2px rgba(34, 60, 80, 0.2);
  border-radius: 10px;
  padding: 0 1rem 0 0;
  margin: 3px;
`;


export const IMGContainer = styled.div`
  position: relative;
  overflow:hidden;
  width: 100%;
  height:40vh;
  margin: 0 auto;
  border-radius: 7px;

  @media screen and (max-width: 720px){
    height:30vh;
  }

  @media screen and (max-width: 420px){
    display: none;
  }
`;


export const Image = styled.img`
  position: absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  width:100%;
  height:100%;
  object-fit:cover;
`;

export const InfoContainer = styled.div`
  display: grid;
  justify-content: space-between;
  align-content: space-around;
  width: 100%;
`;

export const Title = styled.h3`
  grid-column: 1/3;
  grid-row: 1;
  font-size: var(--fontBig);
  margin: 1rem;
  
  a{
    text-decoration: none;
    color: var(--dark);
  }
`;

export const Description = styled.div`
  grid-column: 1/4;
  grid-row: 2;

  @media screen and (max-width: 420px){
    font-size: var(--fontMSmall);
    margin: 0 1rem;
  }
`;

export const Price = styled.span`
  grid-column: 3;
  grid-row: 1;
  white-space: nowrap;
  
  @media screen and (max-width: 720px){
    font-size: var(--fontSmall);
  }
`;


export const Qty = styled.div`
  width: 150px;
  grid-column: 1;
  grid-row: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem auto;
  
  input{
    width: 50px;
    border: 0;
    line-height: 30px;
    font-size: 20px;
    text-align: center;
    background: var(--green);
    color: var(--white);
    appearance: none;
    outline: 0;
  }
  
  span{
    display: block;
    font-size: 25px;
    padding: 0 10px;
    cursor: pointer;
    color: var(--green);
    user-select: none;
    
    :hover{
      color: var(--darkgreen);
    }
  }
`;

export const DeleteBtn = styled.button`
  grid-column: 2/3;
  grid-row: 3;
  font-weight: var(--fontWMed);
  white-space: nowrap;
  color: var(--lightGrey);
  
  :hover{
    color: var(--orange);
  }
  margin: 1rem auto;
`;