import styled from 'styled-components'

const Par = styled.div`
  font-weight: bold;
  color: ${props => props.color ? props.color : 'white'};
`

export default Par
