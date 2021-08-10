import styled from "styled-components";

export const FooterStyles = styled.footer`
  background: var(--darkBlue);
  color: #fff;
  padding: 60px 0;
  
  
  

  .end{
    text-align: center;
    padding: 20px 0 0 0;
  }
  
  li{
    list-style: none;
    line-height: 2;
  }
  
  a{
    color: #ccc;
    text-decoration: none;
    
    :hover{
      text-decoration: underline;
    }
  }
  
  h3{
    font-size: var(--fontBig);
    margin: 20px 0;
  }

`;

export const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  padding: 0 20px;
  margin: 0 auto;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;

export const Items = styled.div`
  flex-basis: 20%;

  .logo{
    text-transform: capitalize;
    font-size: 1.4em;
    color: #b6b6b6;
  }

  a{
    text-decoration: none;
    color: #ccc;
  }

  p{
    margin: 1.2em 0;
  }

  @media (max-width:640px){
    flex-basis: 80%;
    margin: auto;
  }

  h3{
    position: relative;
    font-size: 1.3em;
    margin-bottom: 1rem;
    color: aliceblue;
  }

  h3::after{
    content:"";
    position: absolute;
    width: 40px;
    height: 3px;
    background: #fff;
    bottom: -4px;
    left: 0;
  }
`;




export const Social = styled.div`
  display: flex;

  a{
    height: 30px;
    width: 30px;
    background: #383535;
    border-radius: 5px;
    margin:10px 5px;
    text-align: center;
  }

  a i{
    font-size: 1.3em;
    line-height: 30px;
  }
`;

