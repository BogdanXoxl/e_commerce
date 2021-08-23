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