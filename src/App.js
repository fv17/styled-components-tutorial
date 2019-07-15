import React from 'react';
import { Button, TomatoButton } from './styledButton'
import { Title } from './styledTitle'
import styled from 'styled-components'

function App() {
  return (
    <Container>
      <Title>Sample Title</Title>
      <Button>Normal button</Button>
      <Button primary>Primary button</Button>
      <TomatoButton>Tomato Button</TomatoButton>
    </Container>
  );
}

const Container = styled.div`
  background: papayawhip;
  padding: 4em;
  text-align: center;
`

export default App;
