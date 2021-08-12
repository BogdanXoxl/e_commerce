import styled from "styled-components";
import {NavLink, Link} from "react-router-dom"

export const Container = styled.div`
  width: 100%;
  height: 80px;
  z-index: 20;
  background: var(--white);
  position: fixed;
`;


export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: var(--maxWidth);
  z-index: 20;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
`;


export const Logo = styled.img`
  width: 180px;
  cursor: pointer;
  
  @media screen and (max-width: 1000px){
    width: 150px;
  }
`;


export const Nav = styled.nav`
  flex:1;
  position: center;
  padding-left: 30px;
`;


export const NavLinkStyled = styled(NavLink)`
  color: var(--darkBlue);
  padding: 0 5px;
  font-size: var(--fontMed);
  text-decoration: none;
  border: 1px solid transparent;
  
  &.active{
    //color: red;
    box-shadow: 0 2px 1px var(--green);
  }
  
  :hover{
    //text-decoration: underline;
    border-right: 1px solid black;
    border-left: 1px solid black;
  }

  @media screen and (max-width: 1000px){
    font-size: var(--fontSmall);
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

  @media screen and (max-width: 1000px){
    font-size: var(--fontSmall);
    border-radius: 20px;
  }
`;


