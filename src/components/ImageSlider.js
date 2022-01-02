import React from 'react'
import styled from 'styled-components'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
    <Carousel {...settings}>
      <Wrap>
        <img src='/images/slider-badging.jpg' />
      </Wrap>
      <Wrap>
        <img src='/images/slider-badag.jpg' />
      </Wrap>
    </Carousel>
  )
}

export default ImageSlider

const Carousel = styled(Slider)`
  margin-top: 20px;

  ul li button::before {
    font-size: 10px;
    color: rgb(150, 158, 170);
  }

  li.slick-active button::before {
    color: white;
  }

  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }
`

const Wrap = styled.div`
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    border: 4px solid transparent;
    transition-duration: 300ms;
    box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);

    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`
