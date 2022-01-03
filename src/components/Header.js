import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <Nav>
      <Logo src='/images/logo.svg' />
      <NavMenu>
        <a>
          <img src='/images/home-icon.svg' alt='' />
          <span>Home</span>
        </a>
        <a>
          <img src='/images/search-icon.svg' alt='' />
          <span>Search</span>
        </a>
        <a>
          <img src='/images/watchlist-icon.svg' alt='' />
          <span>WatchList</span>
        </a>
        <a>
          <img src='/images/original-icon.svg' alt='' />
          <span>Originals</span>
        </a>
        <a>
          <img src='/images/movie-icon.svg' alt='' />
          <span>Movies</span>
        </a>
        <a>
          <img src='/images/series-icon.svg' alt='' />
          <span>Series</span>
        </a>
      </NavMenu>
      <UserImg src='/images/viewers-marvel.png' />
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  height: var(--header-height);
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
`
const Logo = styled.img`
  width: 80px;
`

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  margin-left: 25px;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      position: relative;
      &:after {
        content: '';
        background: #fff;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        height: 2px;
        opacity: 0;
        transform: scale(0);
        transform-origin: left center;
        transition: transform 250ms ease-in;
      }
    }

    &:hover {
      span:after {
        opacity: 1;
        transform: scale(1);
      }
    }
  }
`
const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`
