import React from 'react'
import styled from 'styled-components'
import ImageSlider from './ImageSlider'
import Viewers from './Viwers'
import Movies from './Movies'

function Home() {
  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Movies />
    </Container>
  )
}

export default Home

const Container = styled.main`
  min-height: calc(100vh - var(--header-height));
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('/images/home-background.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachement: fixed;
    z-index: -1;
  }
`
