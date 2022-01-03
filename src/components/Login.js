import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
      <Content>
        <ContentLogo src='/images/cta-logo-one.svg'></ContentLogo>
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </Description>
        <ContentLogo src='/images/cta-logo-two.png'></ContentLogo>
      </Content>
    </Container>
  )
}

export default Login

const Container = styled.div`
  position: relative;
  height: calc(100vh - var(--header-height));
  display: flex;
  justify-content: center;
  align-items: flex-start;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url('/images/login-background.jpg') top no-repeat fixed;
    z-index: -1;
  }
`
const Content = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 120px;
`
const ContentLogo = styled.img`
  width: 90%;
`
const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  font-size: 18px;
  padding: 17px 0;
  text-align: center;
  cursor: pointer;
  border-radius: 4px;
  transition: all 250ms ease-in;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover {
    background: #0483ee;
  }
`
const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`
