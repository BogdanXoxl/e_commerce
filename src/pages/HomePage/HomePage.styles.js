import styled from "styled-components";


export const Container = styled.div`
  background: var(--white);
`;


export const CategoryContainer = styled.div`
  max-width: var(--maxWidth);
  margin: 3rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
  justify-content: center;
  grid-gap: 1rem;
  
  @media screen and (max-width: 720px){
    grid-gap: 0.1rem;
  }
`;
export const Category = styled.span`
  background: var(--dark);
  text-align: center;
  padding: 1rem;
  color: var(--white);
  font-size: var(--fontMed);
  cursor: pointer;

  @media screen and (max-width: 720px){
    padding: .3rem;
  }
  
  :hover{
    background: var(--green);
  }
  :active{
    background: var(--darkgreen);
  }
`;

export const InfoContainer = styled.div`
  max-width: var(--maxWidth);
  margin: 7rem auto;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3rem;

  @media screen and (max-width: 720px){
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
`;

export const Info = styled.div`
  h3{
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 1rem;
    font-size: var(--fontBig);
    color: var(--orange);
  }
  
  p{
    font-size: var(--fontMed);
    text-align: center;
  }
`;


export const ServiceContainer = styled.div`
  max-width: var(--maxWidth);
  margin: 3rem auto;
  padding: 3rem;
  background: linear-gradient(0deg, rgba(38, 38, 38, 0.9), rgba(38, 38, 38, 0.9)),
  url(${({ image }) => image}), var(--darkBlue);
  border-radius: 35px;
  background-size: 100%, cover;
  background-position: center;
  color: var(--white);
  
  h3{
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 3rem;
    font-size: var(--fontBig);
  }
  
  p{
    text-align: right;
    font-size: var(--fontMed);

    @media screen and (max-width: 720px){
      font-size: var(--fontSmall);
      text-align: center;
    }
  }
  
  span{
    white-space: nowrap;
  }
`;

export const BtnContainer = styled.div`
  margin: 3rem 0 1rem;
  width: 100%;
  @media screen and (max-width: 720px){
    text-align: center;
  }
`;

export const Btn = styled.button`
  text-transform: uppercase;
  padding: 1rem;
  border: 3px solid var(--green);
  color: var(--green);

  :hover{
    border-color: var(--darkgreen);
    color: var(--darkgreen);
  }
`;
