import styled from 'styled-components'

export const Input = styled.input`
  padding: 0.5em;
  margin: 1.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: white;
  border-color: orange;
  border-radius: 3px;
`