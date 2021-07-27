import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
    --font-primary: 'Montserrat', sans-serif;
    --purple: #502A64;
    --yellow: #f8c304;
    --black: #231F20;
    --white: #ffffff;
  }

  body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}
`;
