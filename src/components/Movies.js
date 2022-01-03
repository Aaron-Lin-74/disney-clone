import React from 'react'
import styled from 'styled-components'

function Movies() {
  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        <Wrap>
          <img src='/images/viewers-disney.png' />
        </Wrap>
        <Wrap>
          <img src='/images/viewers-disney.png' />
        </Wrap>
        <Wrap>
          <img src='/images/viewers-disney.png' />
        </Wrap>
        <Wrap>
          <img src='/images/viewers-disney.png' />
        </Wrap>
      </Content>
    </Container>
  )
}

export default Movies

const Container = styled.div``
const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`
const Wrap = styled.div`
  cursor: pointer;
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  transition: all 250ms ease-in;

  img {
    width: 100%;
    height: 100%;
  }

  &:hover {
    border: 3px solid rgba(249, 249, 249, 0.8);
    transform: scale(1.05);
  }
`
