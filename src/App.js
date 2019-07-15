import React from 'react';
import { Button } from './styledButton'
import { Title } from './styledTitle'
import styled from 'styled-components'

function App() {
  return (
    <Container>
      <Title>Sample Title</Title>
      <Button>Normal button</Button>
      <Button primary>Primary button</Button>
    </Container>
  );
}

const Container = styled.div`
  background: papayawhip;
  padding: 4em;
  text-align: center;
`

export default App;
