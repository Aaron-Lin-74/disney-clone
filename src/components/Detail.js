import React from 'react'
import styled from 'styled-components'

function Detail() {
  return (
    <Container>
      <Background>
        <img src='/images/bao-background.jpg' />
      </Background>
      <ImageTitle>
        <img src='/images/viewers-starwars.png' />
      </ImageTitle>
      <Controller>
        <PlayButton>
          <img src='/images/play-icon-black.png' />
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src='/images/play-icon-white.png' />
          <span>Trailer</span>
        </TrailerButton>
        <PlusButton>
          <span>+</span>
        </PlusButton>
        <GroupWatchButton>
          <img src='/images/group-icon.png' />
        </GroupWatchButton>
      </Controller>
      <Subtitle>fdsdfsdfsd</Subtitle>
      <Description>sfsdgsggherhdhdgfdsgsfd</Description>
    </Container>
  )
}

export default Detail

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 80px);
  padding: 0 calc(3.5vw + 5px);
`
const Background = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;
  margin-top: 60px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`
const Controller = styled.div`
  display: flex;
  align-items: center;
`

const PlayButton = styled.button`
  display: flex;
  align-items: center;
  padding: 5px 24px;
  margin-right: 22px;
  font-size: 18px;
  letter-spacing: 1.5px;
  background: rgb(249, 249, 249);
  height: 56px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: rgb(198, 198, 198);
  }
`

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  color: rgb(249, 249, 249);
  border: 3px solid white;
  text-transform: uppercase;
`

const PlusButton = styled.button`
  height: 40px;
  width: 40px;
  margin-right: 16px;
  border-radius: 50%;
  border: 2px solid white;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  span {
    font-size: 30px;
    color: white;
  }
`

const GroupWatchButton = styled(PlusButton)``

const Subtitle = styled.div`
  line-height: 1.4px;
  font-size: 20px;
  margin-top: 16px;
  color: white;
`

const Description = styled.div`
  margin-top: 30px;
  max-width: 760px;
  line-height: 1.4px;
  font-size: 20px;
`
