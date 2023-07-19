import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import Section from './components/Section'

const Title = styled.h1`
  color: #b19cd9;
`

class Main extends React.Component {
  render() {
    return (
      <>
        <Title>Progress Tracker</Title>
        <div>
          <Section text='M'/>
          <Section text='T'/>
          <Section text='W'/>
          <Section text='T'/>
          <Section text='F'/>
          <Section text='S'/>
          <Section text='S'/>
        </div>
      </>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'))


//TO DO:
// move Section to its own file
// make sure the WeekdayTitle is moved with it
// export Section so we can use it in our index.js file
// pass through text as a prop