import styled from "styled-components";


export const Container = styled.div`
  margin: 0 auto;
  padding-top: 10vh;
  max-width: var(--maxWidth);
  min-height: 500px;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  color: var(--lightGrey);

  animation: animateThumb 0.5s;
  
  @keyframes animateThumb {
    from{
      opacity: 0;
    }
    to{
      opacity: 1;
    }
  }
  
  .category{
    color: var(--white);
    margin-left: 10px;
  }

  @media screen and (max-width: 720px){
    flex-direction: column-reverse;
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


  @media screen and (max-width: 720px){
    width: 100%;
    margin: 0;
    border-radius: 0;
  }
`;

export const IMGContainer = styled.div`
  position: relative;
  overflow:hidden;
  width:100%;
  border-radius: 16px;
  margin: 3px;
  min-height: 420px;
  
  @media screen and (max-width: 720px){
    height:90vh;
    border-radius: 0;
    margin: 0;
    padding: 0;
  }
`;


export const Wrapper = styled.div`
  background: var(--dark);
  border-radius: 30px 0 0 30px;
  padding: 30px;
  margin-top: 30px;
  width: 100vw;
  margin-bottom: 3rem;

  box-shadow: 0 0 30px 1px grey;

  @media screen and (max-width: 720px){
    padding: 10px;
    margin-top: 0;
    border-radius: 0;
    width: 100vw;
  }
`;



export const Info = styled.div`
  width: 80%;
  margin: 20px;

  @media screen and (max-width: 720px){
    margin: 10px;
  }
  
`;

export const Description = styled.p`
  margin: 10px;
  font-size: var(--fontMed);
  
  @media screen and (max-width: 720px){
    margin: 0 auto;
  }
`;

export const SizeButton = styled.div`
  position: relative;
  padding: 0 5px;
  margin: 3px;
  outline: 1px solid var(--darkgreen);
  border-radius: 3px;
  cursor: pointer;
  
  
  :hover{
    outline-color: var(--green);
  }
`;

export const BtnWrapper = styled.div`
  margin: 1rem;
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1rem;
  
  span{
    margin-right: 5px;
  }
`;