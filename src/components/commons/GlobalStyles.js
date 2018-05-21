import styled,{ injectGlobal }  from 'styled-components'
import BigNoodle from '../../fonts/big_noodle_titling_oblique.ttf'

let ThemePrimaryColor = '#fff'

injectGlobal`
  @font-face {
    font-family: 'BigNoodle';
    src: url(${BigNoodle});
  }

  body {
    margin: 0;
    font-family: 'BigNoodle';
    color: white;
  }
  p {
    margin: 0;
    color: ${ThemePrimaryColor};
    font-weight: bold;
  }
  .sketch-picker {
    position: absolute;
  }
`

const Wrapper = styled.div`
`
const Par = styled.p`
  color: ${props => props.color ? props.color : ThemePrimaryColor};
`
const SpanUppercase = styled.span`
  text-transform: uppercase;
`

export {Wrapper, Par, SpanUppercase}
