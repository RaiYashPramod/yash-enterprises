"use client";

import styled from "styled-components";

export const Hero = styled.div`
  box-sizing: border-box;
  flex-shrink: 0;
  width: 100%;
  height: 48.75rem; /* Converted from 780px to rem */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6.25rem 1.25rem;
  background-color: #333333;
  overflow: hidden;
  position: relative;
  align-content: center;
  flex-wrap: nowrap;
  gap: 3.125%; /* Converted from 50px to % */
  border-radius: 0;

  @media (max-width: 768px) {
    height: 25rem; /* Converted from 400px to rem */
    padding: 6.25rem 1.25rem;
    gap: 3.125%;
  }
`;

export const Yash = styled.text`
  flex-shrink: 0;
  width: 100%;
  height: auto;
  white-space: pre;
  position: relative;
  font-weight: 400;
  font-style: normal;
  font-family: Gloock;
  color: #ffffff;
  font-size: 30.5rem; /* Converted from 25rem to rem */
  letter-spacing: 0em;
  text-transform: uppercase;
  line-height: 0.8;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 8rem; /* Converted from 113.038px to rem */
  }
`;

export const Enterprises = styled.text`
  flex-shrink: 0;
  width: 100%;
  height: auto;
  white-space: pre;
  position: relative;
  font-weight: 400;
  font-style: normal;
  font-family: Elsie;
  color: #8b949e;
  font-size: 12.75rem; /* Converted from 15rem to rem */
  letter-spacing: 0em;
  text-transform: uppercase;
  line-height: 0.9;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 3rem; /* Converted from 3.2rem to rem */
  }
`;

export const Info = styled.div`
  box-sizing: border-box;
  flex-shrink: 0;
  width: 100%;
  height: 30rem; /* Converted from 505px to % */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 6.25rem; /* Converted from 100px to rem */
  background-color: #ffffff;
  overflow: hidden;
  position: relative;
  align-content: center;
  flex-wrap: nowrap;
  gap: 0; /* Use unitless value */
  border-radius: 0;

  @media (max-width: 768px) {
    padding: 3.25rem;
    padding-bottom: 0.25rem;
    height: 50rem;
  }
`;

export const InfoTitle = styled.text`
  flex-shrink: 0;
  width: 100%;
  height: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: break-word;
  overflow: visible;
  font-weight: 900;
  font-style: normal;
  font-family: "Syne", sans-serif; /* Match the font family name */
  color: #000000;
  font-size: 3rem; /* Converted from 48px to rem */
  letter-spacing: 0em;
  line-height: 1.2; /* Use unitless value */
  text-align: left;

  @media (max-width: 768px) {
    width: auto;
    font-size: 1.7rem;
  }
`;

export const InfoDetail = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: min-content; /* Converted from 150px to % */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  flex: 1 0 0; /* Use unitless value */
  /* position: relative; */
  padding-top: 3rem;
  align-content: flex-start;
  flex-wrap: nowrap;
  gap: 4rem; /* Use unitless value */
  border-radius: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    width: auto;
    height: max-content;
    padding-top: 2rem;
    gap: 0rem;
  }
`;

export const InfoDetailText = styled.text`
  flex-shrink: 0;
  flex: 1 0 0;
  width: 15rem;
  height: auto; /* Converted from 120px to % */
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: break-word;
  overflow: visible;
  position: relative;
  font-weight: 400;
  font-style: normal;
  font-family: "Figtree", sans-serif; /* Match the font family name */
  color: #000000;
  font-size: 1.25rem; /* Converted from 20px to rem */
  letter-spacing: -0.025em;
  line-height: 1.5; /* Use unitless value */
  text-align: left;

  @media (max-width: 768px) {
    width: auto;
  }
`;

export const Grid = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: auto;
  display: grid;
  overflow: hidden;
  position: relative;
  grid-template-columns: repeat(2, minmax(1rem, 1fr)); /* Adjusted minmax values */
  justify-content: center;
  grid-auto-rows: auto; /* Changed to auto */
  grid-template-rows: repeat(2, auto); /* Changed to auto */
  padding: 0;
  gap: 1rem; /* Adjusted gap */
  border-radius: 0; /* Removed border-radius */

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(1rem, 1fr)); /* Single column on mobile */
    grid-template-rows: repeat(1, auto); /* Single row on mobile */
  }
`;

export const Card = styled.div`
  flex-shrink: 0;
  width: 100%; /* Full width on mobile */
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  position: relative;
  justify-self: center; /* Center on mobile */
  align-self: center; /* Center on mobile */
  padding: 0;
  align-content: flex-start;
  flex-wrap: nowrap;
  gap: 0;
  border-radius: 1rem; /* Adjusted border-radius for a more rounded look */

  @media (min-width: 768px) {
    width: 41.25rem; /* Adjust as needed */
    height: 20rem; /* Adjust as needed */
  }
`;

export const CardText = styled.text`
  flex-shrink: 0;
  width: 100%;
  height: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: break-word;
  overflow: visible;
  position: relative;
  font-weight: 400;
  font-style: normal;
  font-family: "Gloock", "Gloock Placeholder", serif;
  color: #333333;
  font-size: 5rem; /* Adjusted font-size to 32px */
  letter-spacing: 0;
  line-height: 1.2;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 5rem; 
    padding: .5rem;
  }
`;

export const CardSubText = styled.text`
  flex-shrink: 0;
  width: 100%;
  height: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: break-word;
  max-width: 20rem; /* Adjusted max-width for better readability */
  overflow: visible;
  position: relative;
  font-weight: 400;
  font-style: normal;
  font-family: "Work Sans", "Work Sans Placeholder", sans-serif;
  color: #333333;
  font-size: 2.5rem; /* Adjusted font-size to 24px */
  letter-spacing: -0.025em;
  line-height: 1.2;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 1.75rem; /* Adjusted font-size for larger screens */
    max-width: none; /* Remove max-width on larger screens */
    padding: .5rem;
  }
`;

export const QuoteDiv = styled.div`
  box-sizing: border-box;
  flex-shrink: 0;
  width: 100%;
  height: 50rem;
  display: flex;
  flex-direction: column; /* Changed from row for better responsiveness */
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  overflow: hidden;
  position: relative;
  align-content: center;
  flex-wrap: nowrap;
  gap: 1rem; /* Adjusted gap */
  border-radius: 0; /* Removed border-radius */

  @media (max-width: 768px) {
    height: 25rem;
  }
`;

export const Content = styled.div`
  flex-shrink: 0;
  flex: 1 0 0;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%; /* Adjusted max-width for better responsiveness */
  overflow: visible;
  z-index: 5;
  position: relative;
  padding: 0;
  align-content: center;
  flex-wrap: nowrap;
  gap: 2rem; /* Adjusted gap for better spacing */
  border-radius: 0; /* Removed border-radius */
`;

export const BackgroundImg = styled.div`
  box-sizing: border-box;
  flex-shrink: 0;
  width: 100%;
  height: auto;
  display: block;
  overflow: hidden;
  opacity: 0.5;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  border-radius: 0; /* Removed border-radius */
  object-fit: cover;
`;

export const Quote = styled.text`
  flex-shrink: 0;
  width: 100%;
  height: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: break-word;
  position: relative;
  font-weight: 400;
  font-style: normal;
  font-family: "Gloock", "Gloock Placeholder", serif;
  color: #000000;
  font-size: 8rem; /* Adjusted font-size to 32px */
  letter-spacing: 0;
  text-transform: uppercase;
  line-height: 1.1;
  text-align: center;
  padding: 2rem;

  @media (max-width: 768px) {
    font-size: 2rem; 
    width: 20rem; 
    padding: 0rem;
  }
`;

export const List = styled.div`
  box-sizing: border-box;
  flex-shrink: 0;
  width: 100%;
  height: min-content; /* 611px */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 20px 20px 20px;
  background-color: #ffffff;
  overflow: hidden;
  position: relative;
  align-content: center;
  flex-wrap: nowrap;
  gap: 20;
  border-radius: 0px 0px 0px 0px;
`

export const ServicesOffers = styled.div`
  box-sizing: border-box;
  flex-shrink: 0;
  width: 100%;
  height: min-content; /* 177px */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 3.125rem 3.125rem 3.125rem 3.125rem;
  background-color: #000000;
  overflow: hidden;
  position: relative;
  align-content: center;
  flex-wrap: nowrap;
  gap: 50;
  border-radius: 31.25rem;
  cursor: pointer;

  @media (max-width: 768px) {
    border-radius: 15.625rem;
    padding: 1.25rem;
  }
`

export const ServiceText = styled.text`
  flex-shrink: 0;
  flex: 1 0 0px;
  width: 0.063rem;
  height: auto; /* 77px */
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: break-word;
  position: relative;
  font-weight: 400;
  font-style: normal;
  font-family: "Work Sans", "Work Sans Placeholder", sans-serif;
  color: #ffffff;
  font-size: 4rem;
  letter-spacing: -0.05em;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-weight: 200;
    font-size: 1.5rem;
  }
`

export const Logo = styled.div`
  flex-shrink: 0;
  width: 60px;
  height: auto; /* 60px */
  white-space: pre;
  position: relative;
  font-weight: 400;
  font-style: normal;
  font-family: "Material Icons", monospace;
  color: #ffffff;
  font-size: 30px;
  letter-spacing: 0em;
  line-height: 1;
  text-align: center;
`

export const ServiceTitle = styled.text`
  flex-shrink: 0;
  width: 100%;
  height: auto;
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: break-word;
  overflow: visible;
  font-weight: 900;
  flex: auto;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  font-style: normal;
  font-family: "Work Sans", "Work Sans Placeholder", sans-serif; /* Match the font family name */
  color: #000000;
  font-size: 8rem; /* Converted from 48px to rem */
  letter-spacing: 0em;
  line-height: 1.2; /* Use unitless value */
  text-align: left;

  @media (max-width: 768px) {
    width: auto;
    font-size: 2.5rem;
    padding: 1rem;
  }
`

export const Dropdown = styled.div`
  height: 100%;
  padding: .9rem;
  padding-left: 2rem;
  padding-right: 2rem;
  overflow: hidden;
  transition: height 0.5s ease-in-out;
  /* max-height: ${(props) => (props.isOpen ? "100%" : "0")};
  overflow: hidden;
  transition: max-height 0.5s ease-in-out; */
  transform-origin: top;

  @media (max-width: 768px) {
    padding: .5rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const DropdownContent = styled.div`
  background-color: #D8D9DA;
  box-sizing: border-box;
  flex-shrink: 0;
  width: 100%;
  height: min-content; /* 177px */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3.125rem;
  overflow: hidden;
  position: relative;
  align-content: center;
  flex-wrap: nowrap;
  font-size: 1.25rem;
  gap: 50;
  border-radius: 5rem;
  font-family: 'Times New Roman', Times, serif;

  @media (max-width: 768px) {
    padding: 1.75rem;
    border-radius: 1.5rem;
  }
`;


// export const ProjectDiv = styled.div`
//   box-sizing: border-box;
//   flex-shrink: 0;
//   width: 100%;
//   height: min-content; /* 700px */
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: center;
//   padding: 6.25rem;
//   background-color: #000000;
//   overflow: hidden;
//   position: relative;
//   align-content: center;
//   flex-wrap: nowrap;
//   gap: 0;
//   border-radius: 0px 0px 0px 0px;
// `

// export const ProjectCardContainer = styled.div`
//   flex-shrink: 0;
//   width: 80rem;
//   height: min-content; /* 500px */
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   background-color: red;
//   overflow: hidden;
//   position: relative;
//   padding: 0px 0px 0px 0px;
//   flex-wrap: nowrap;
//   gap: 50;
//   border-radius: 0px 0px 0px 0px;
// `

// export const ProjectCard = styled.div`
//   box-sizing: border-box;
//   flex-shrink: 0;
//   flex: 1 0 0px;
//   width: 1px;
//   height: min-content; /* 500px */
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: center;
//   padding: 40px 40px 40px 40px;
//   background-color: #0d0d0d;
//   min-height: 500px;
//   overflow: hidden;
//   position: relative;
//   align-content: center;
//   flex-wrap: nowrap;
//   gap: 40;
//   border-radius: 20px;
// `

// export const ProjectImage = styled.div`
//   flex-shrink: 0;
//   width: 100%;
//   height: 50%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   background-color: #0d0d0d;
//   overflow: hidden;
//   position: relative;
//   align-content: center;
//   flex-wrap: nowrap;
//   gap: 0;
//   border-radius: 0.625rem;
// `

export const ProjectDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem; /* Adjust padding as needed */
  background-color: #000000;
  overflow: hidden;
`;

export const ProjectTitle = styled.text`
  flex-shrink: 0;
  width: auto; /* 136px */
  height: auto; /* 30px */
  white-space: pre;
  /* overflow: visible; */
  position: relative;
  font-weight: 700;
  font-style: normal;
  font-family: "Syne", "Syne Placeholder", sans-serif;
  color: #ffffff;
  font-size: 6rem;
  font-weight: 600;
  letter-spacing: 0em;
  text-transform: uppercase;
  line-height: 1.5;
  text-align: left;
  padding: 3rem;
  padding-left: 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`

export const ProjectCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem; /* Adjust the gap between cards */
  overflow: hidden;
  border-radius: 0.625rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ProjectCard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  padding: 2rem; /* Adjust padding as needed */
  background-color: #0d0d0d;
  overflow: hidden;
  border-radius: 0.625rem;
`;

export const ProjectImage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0d0d0d;
  overflow: hidden;
  border-radius: 0.625rem;
`;

export const ProjectName = styled.text`
  flex-shrink: 0;
  width: 100%;
  height: auto; /* 30px */
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: break-word;
  overflow: visible;
  position: relative;
  font-weight: 800;
  font-style: normal;
  font-family: "Wix Madefor Display", sans-serif;
  color: #ffffff;
  font-size: 3rem;
  letter-spacing: 0em;
  line-height: 1.5;
  text-align: left;
  padding-top: 2rem;
`

export const ProjectCompany = styled.text`
  flex-shrink: 0;
  width: 100%;
  height: auto; /* 30px */
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: break-word;
  overflow: visible;
  position: relative;
  font-weight: 400;
  font-style: normal;
  font-family: "Archivo", "Archivo Placeholder", sans-serif;
  color: #757575;
  font-size: 1.5rem;
  letter-spacing: 0em;
  line-height: 1.5;
  text-align: left;
`
export const ContactContainer = styled.div`
  box-sizing: border-box;
  flex-shrink: 0;
  width: 100%;
  height: min-content; /* 396px */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 100px 100px 100px 100px;
  background-color: #fff;
  overflow: visible;
  position: relative;
  align-content: flex-start;
  flex-wrap: nowrap;
  gap: 40;
  border-radius: 0px 0px 0px 0px;
`;

export const ContactTitle = styled.text`
  flex-shrink: 0;
  width: auto; /* 136px */
  height: auto; /* 30px */
  white-space: pre;
  /* overflow: visible; */
  position: relative;
  font-weight: 700;
  font-style: normal;
  font-family: "Syne", "Syne Placeholder", sans-serif;
  color: #333;
  font-size: 6rem;
  font-weight: 600;
  letter-spacing: 0em;
  text-transform: uppercase;
  line-height: 1.5;
  text-align: left;
  /* padding: 3rem; */

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`