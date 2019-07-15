import React from 'react';
import styled from 'styled-components'
import { Button, TomatoButton } from './styledButton'
import { Title } from './styledTitle'
import { Input } from './styledInput';

function App() {
  return (
    <Container>
      <Title>Sample Title</Title>
      <Button>Normal button</Button>
      <Button primary>Primary button</Button>
      <TomatoButton>Tomato Button</TomatoButton>
      <Button as="a" href="https://www.styled-components.com/docs/basics#extending-styles">Link with Button styles</Button>
      <Input defaultValue="Please input!" type="text" inputColor="black" />
    </Container>
  );
}

const Container = styled.div`
  background: papayawhip;
  padding: 4em;
  text-align: center;
`

export default App;
