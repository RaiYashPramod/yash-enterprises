import React from 'react'
import { BackgroundImg, Content, Quote, QuoteDiv } from './StylingComponents'
import Image from 'next/image'
import unsplash from 'app/assets/unsplash.jpg'

const QuoteSection = () => {
  return (
    <>
      <QuoteDiv>
        <Content><Quote>Excellence in Service Delivery</Quote></Content>
        <BackgroundImg><Image src={unsplash} alt='Yash Enterprises'  width={'50rem'} height={'50rem'}></Image></BackgroundImg>
      </QuoteDiv> 
    </>
  )
}

export default QuoteSection
