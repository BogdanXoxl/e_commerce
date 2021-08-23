import styled from "styled-components";

export const Bullet = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const Form = styled.form`
  width: 100%;
  border-top: 1px solid var(--grey);
`;

export const Input = styled.input`
  margin: 1rem 0;
  font-size: var(--fontSmall);
  padding: 0.7rem;
  width: 70%;
  border: none;
  border-bottom: 1px solid var(--green);
  color: var(--dark);
  outline: none;
`;

export const Button = styled.button`
  margin-top: 1rem;
  background: var(--orange);
  color: var(--white);
  width: 100%;
  height: 3rem;
  :hover{
    background: var(--darkOrange);
    color: var(--lightGrey);
  }
`;

export const Summary = styled.div`
  flex: 0.3;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.6rem;
  padding: 1rem 0 0 0;
  box-shadow: 0 5px 10px 2px rgba(34, 60, 80, 0.2);
  border-radius: 10px;
  margin: 0 1rem;
`;

export const Price = styled.span`
  font-size: var(--fontMed);
  font-weight: var(--fontWBold);

  @media screen and (max-width: 1000px){
    font-size: var(--fontMSmall);
  }

  @media screen and (max-width: 720px){
    font-size: var(--fontMed);
  }
`;

export const Error = styled.p`
  color: var(--orange);
  font-size: var(--fontMSmall);
  font-weight: var(--fontWBold);
`;