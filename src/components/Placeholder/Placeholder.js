import React from 'react'
import { Container, Header, Segment } from 'semantic-ui-react'
import './Placeholder.css'

const PlaceholderView = () => (
  <Container className='placeholder-container'>
    <Segment>
      <Header as='h1'>React-Redux Development Scaffold</Header>
    </Segment>
  </Container>
)

export default PlaceholderView