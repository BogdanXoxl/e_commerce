import styled from "styled-components";
import {Link} from "react-router-dom";

export const Input = styled.input`
  border: none;
  outline: none;
  background: none;
  padding: 0;
  color: var(--lightGrey);
  font-size: var(--fontSmall);
  
  transition: .4s;
  width: 0;
  
`;

export const Wrapper = styled.form`
  display: flex;
  //position: absolute;
  box-sizing: content-box;
  background-color: var(--darkBlue);
  height: 27px;
  border-radius: 20px;
  padding: 7px;
  
  &:hover ${Input}{
    width: 180px;
    padding: 0 6px;
  }

  @media screen and (max-width: 1000px){
    font-size: var(--fontSmall);
    height: 25px;

    ${Input}{
      position: relative;
      width: 100px;
    }
    &:hover ${Input}{
      width: 100px;
    }
  }
`;




export const Button = styled.button`
  border: none;
  font: inherit;
  
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f0f0f0;
  cursor: pointer;
  width: 27px;
  height: 27px;
  border-radius: 50%;
  
  :hover{
    background: var(--dark);
  }

  @media screen and (max-width: 1000px){
    font-size: var(--fontSmall);
    height: 25px;
  }
`;