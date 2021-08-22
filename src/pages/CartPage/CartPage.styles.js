import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  max-width: var(--maxWidth);
  padding-top: 15vh;
  margin: 0 auto 3rem;

  @media screen and (max-width: 720px){
    flex-direction: column;
    align-items: stretch;
  }
`;

export const Wrapper = styled.div`
  flex: 0.7;
  display: flex;
  flex-direction: column;
  gap: 1rem;
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

export const Button = styled.button`
  background: var(--orange);
  color: var(--white);
  width: 100%;
  height: 3rem;
  :hover{
    background: var(--darkOrange);
    color: var(--lightGrey);
  }
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


export const Bullet = styled.ul`
  list-style-type: none;
  padding: 0;
`;
