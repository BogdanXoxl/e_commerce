import styled from "styled-components";


export const Container = styled.div`
  margin: 0 auto;
  padding-top: 10vh;
  max-width: var(--maxWidth);
  min-height: 70vh;

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


export const Wrapper = styled.div`
  background: var(--dark);
  border-radius: 16px 0 0 16px;
  margin-top: 30px;
  margin-bottom: 3rem;

  box-shadow: 0 0 30px 1px grey;

  display: grid;
  grid-template-columns: 8fr 4fr;
  grid-template-rows: minmax(1fr, 2fr) 4fr;
  gap: 0 0;
  grid-template-areas: 
    "Image Info"
    "Image Description";
  
  @media screen and (max-width: 720px){
    margin-top: 0;
    border-radius: 0;

    grid-template-columns: 1fr;
    grid-template-rows: minmax(3fr, 480px) 1fr 2fr;
    gap: 0 0;
    grid-template-areas: 
    "Image"
    "Info"
    "Description";
  }
  
  h1{
    grid-area: Title;
    margin: 1rem;
  }
`;

export const Info = styled.div`
  grid-area: Info;
  padding: 0;
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin: 1rem;
  
  span{
    margin-right: 5px;
  }
`;

export const Sort = styled.span`
  max-height: 3rem;
  margin-left: 1rem;
`;

export const IMGContainer = styled.div`
  grid-area: Image;
  
  position: relative;
  overflow:hidden;
  border-radius: 16px 0 0 16px;
  min-height: 420px;
  background: var(--white);
  animation: animatePic 1s;

  @keyframes animatePic {
    from{
      opacity: 0;
    }
    to{
      opacity: 1;
    }
  }
  
  @media screen and (max-width: 720px){
    border-radius: 0;
    margin: 0;
    padding: 0;
  }
`;



export const Description = styled.div`
  grid-area: Description;
  margin: 10px;
  font-size: var(--fontMed);
  
  *{
    color: var(--white) !important;
  }
  
  @media screen and (max-width: 720px){
    margin: 0 auto;
    padding-left: 1rem;
  }
`;


export const BtnWrapper = styled.div`
  margin: 2rem 1rem;
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