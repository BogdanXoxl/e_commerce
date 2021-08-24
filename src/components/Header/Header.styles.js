import styled from "styled-components";
import {NavLink, Link} from "react-router-dom"

export const Container = styled.div`
  width: 100%;
  height: 10vh;
  min-height: 5rem;
  z-index: 20;
  background: var(--white);
  position: fixed;
  box-shadow: 0 5px 10px 2px rgba(34, 60, 80, 0.2);
`;


export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: var(--maxWidth);
  z-index: 20;
  
  display: grid;
  grid-template-columns: 1fr 9fr auto auto;
  align-items: center;
  justify-items: start;
  
  @media (max-width: 900px){
    width: 100%;
    height: 100%;
    margin: 0 auto;
    max-width: var(--maxWidth);
    z-index: 20;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }
`;


export const ToggleBtn = styled.label`
  display: none;
  color: var(--green);
  font-size: var(--fontSuperBig);
  cursor: pointer;

  @media (max-width: 900px){
    display: block;
    grid-column: 11;
  }
`;


export const Logo = styled.img`
  width: 120px;
  cursor: pointer;
  
  @media screen and (max-width: 1000px){
    width: 100px;
  }
`;


export const Nav = styled.nav`
    @media(max-width: 900px){
      position: fixed;
      width: 100%;
      height: 100vh;
      top:10vh;
      left: -100%;
      background: var(--white);
      text-align: center;
      transition: all .5s;
      @media(max-height: 650px){
        top:5rem;
      }
      &.active{
        left: 0;
      }
    }
    
`;

export const SearchContainer = styled.div`
  @media (max-width: 900px){
    grid-column: 9;
  }
  @media (max-width: 345px){
    display: none;
  }
`;


export const NavLinkStyled = styled(NavLink)`
  color: var(--darkBlue);
  padding: 0 5px;
  font-size: var(--fontMed);
  text-decoration: none;
  border: 1px solid transparent;
  
  &.active{
    box-shadow: 0 2px 1px var(--green);
  }
  
  :hover{
    border-right: 1px solid black;
    border-left: 1px solid black;
  }

  @media screen and (max-width: 900px){
    display: block;
    color: var(--dark);
    line-height: 5rem;
    
    &.active{
      box-shadow: none;
      background: var(--green);
      color: var(--white);
      border: none;
    }
    
    &:hover{
      border: none;
    }
  }
`;



export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  
  span{
    background: red;
    min-width: 23px;
    min-height: 23px;
    font-size: var(--fontSmall);
    line-height: 23px;
    border-radius: 50%;
    text-align: center;
    color: var(--white);
    margin-left: -18px;
    margin-top: -21px;
    padding: 1px;
  }
  
  @media (max-width: 900px){
    grid-column: 10;
  }
`;

export const Button = styled(Link)`
  color: var(--white);
  text-decoration: none;
  cursor: pointer;
  height: 42px;
  font-size: var(--fontMed);
  box-sizing: border-box;
  background: var(${props => props.bg? "--"+ props.bg: "--blue"});
  text-align: center;
  line-height: 42px;
  border-radius: 30px;
  margin: 0 5px;
  padding: 0 10px;
  
  :hover{
    background: var(${props => props.bg? "--dark"+ props.bg: "--darkSkyBlue"});
  }
`;


