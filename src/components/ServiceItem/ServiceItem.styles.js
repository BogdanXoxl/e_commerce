import styled from "styled-components";

export const Content = styled.div`
  position: relative;
  text-align: left;
  overflow: hidden;
  padding: 30px;
  height: 100%;
  float: left;
  width: 50%;

`;

export const Container  = styled.div`
  box-shadow: 0 15px 30px 1px grey;
  background: var(--grey);
  text-align: center;
  border-radius: 5px;
  overflow: hidden;
  margin: 5em auto;
  height: 350px;
  width: var(--maxWidth);

  img {width: 100%;height: 100%;}

  ${Content} h1 {
    
    position: relative;
    font-size: var(--fontSuperBig);
    color: var(--dark);
    margin: 0;

      :before {
          position: absolute;
          content: '';
          right: 0%;
          top: 0%;
          transform: translate(25px, -15px);
          display: inline-block;
          background: var(--lightGrey);
          border-radius: 5px;
          font-size: 14px;
          padding: 5px;
          color: var(--white);
          margin: 0;
          animation: chan-sh 6s ease infinite;
      }
    }

  ${Content} > p {
    margin-top: 20px;
    font-size: var(--fontMed);
    color: var(--darkBlue);
    
  }
`;

export const Stars = styled.span`
  display: inline-block;
  margin-left: 0.5em;
  color: gold;
  width: 50%;
`;

export const Control = styled.div`
  position: absolute;
  bottom: 20%;
  left: 5%;
`;

export const Button = styled.button`
  transform: translateY(0px);
  transition: 0.3s linear;
  background: var(--blue);
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  outline: none;
  border: none;
  color: var(--lightGrey);
  padding: 0;
  margin: 0;

  :hover {
    transform: translateY(-6px);
    background: var(--darkSkyBlue);
  }

  :hover .price {transform: translateX(-110%);}
  :hover .shopping-cart {transform: translateX(0%);}

  span {
    transition: transform 0.3s;
    display: inline-block;
    padding: 10px 20px;
    font-size: var(--fontMed);
    margin: 0;
  }

  .price {
    transform: translateX(-10%);
    padding-right: 15px;
  }

  .shopping-cart {
    transform: translateX(-100%);
    position: absolute;
    background: var(--green);
    z-index: 1;
    left: 0;
    top: 0;
  }

  .buy {z-index: 3; }
  
`;




export const Info = styled.div`
  background: rgba(27, 26, 26, 0.9);
  transition: all 0.3s ease-out;
  transform: translateX(-100%);
  position: absolute;
  line-height: 1.8;
  text-align: left;
  font-size: var(--fontBig);
  cursor: none;
  color: var(--white);
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  
  h2 {text-align: center}
  
  ul{
    position: absolute;
    left: 30px;
  }

  ul li{transition: 0.3s ease;}
`;

export const ProductImage  = styled.div`
  transition: all 0.3s ease-out;
  display: inline-block;
  position: relative;
  overflow: hidden;
  height: 100%;
  float: right;
  width: 30%;

  :hover img {transition: all 0.3s ease-out;}
  :hover img {transform: scale(1.2, 1.2);}
  :hover ${Info}{transform: translateX(0);}
`;