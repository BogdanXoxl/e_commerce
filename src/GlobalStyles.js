import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url(https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css);

  :root {
    --white: #fff;
    --lightGrey: #d1d8de;
    --grey: rgba(179, 191, 201, 0.15);
    --blue: #007cff;
    --darkSkyBlue: #0055ff;
    --green: #6cb73a;
    --darkgreen: #538530;
    --darkBlue: #2f3640;
    --dark: #1c1c1c;
    --black: #000;

    --maxWidth: 1240px;

    --fontSuperBig: 2rem;
    --fontBig: 1.5rem;
    --fontMed: 1.3rem;
    --fontSmall: 1rem;

    --fontWBold: 700;
    --fontWMed: 500;
    --fontWStand: 300;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }
  
  h1{
    color: var(--white);
    font-size: var(--fontSuperBig);
  }

  hr{
    opacity: .3;
  }

  button{
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    /* отображаем курсор в виде руки при наведении; некоторые
    считают, что необходимо оставлять стрелочный вид для кнопок */
    cursor: pointer;
  }
`;