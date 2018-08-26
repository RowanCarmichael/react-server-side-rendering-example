import styled from 'styled-components';
import { injectGlobal } from 'styled-components';

injectGlobal`
  body, p, h1 {
    margin: 0;
    font-family: sans-serif;
  }
`;

const Title = styled.h1`
  color: dodgerblue;
`;

const Index = () => (
  <div>
    <Title>Hello World!</Title>
  </div>
);

export default Index