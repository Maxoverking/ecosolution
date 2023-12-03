import styled, { css } from "styled-components";
import { HiArrowUpRight } from "react-icons/hi2";
import { PiArrowLeftLight, PiArrowRightLight } from "react-icons/pi";
const baseButtonStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 66px;
  height: 66px;
  background-color: transparent;
  border-radius: 100%;
  border: 1px solid var(--main-text-color);
  transition: color 250ms ease-in-out;

`;
const baseArrowStyles = css`
color:var(--main-text-color);
  font-size: 36px;
`;
export const Section = styled.section`
  position: relative;
  overflow: hidden;
`;

export const UL = styled.ul`
  display: flex;
  transition: transform 0.5s ease-in-out;
  /* align-items: stretch;  */
  /* padding:0px 4px; */

`;

export const LI = styled.li`
/* padding:6px; */
  flex: 0 0 100%;
    min-height: 318px;
    
    /* flex: 1; */
`;

export const SlideContent = styled.div`
  text-align: center;
      
`;

export const H2 = styled.h2`
 /* margin-bottom:4px; */
   `;

export const DIV_SLIDER_NAV = styled.div`
display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom:20px;
    align-items: flex-end;
  `;
export const DIV_NAV_BUTTON = styled.div`
display:flex;
gap:12px;
  `;
export const ICON_ARROW_NAV_LEFT = styled(PiArrowLeftLight)`
${baseArrowStyles}
`;
export const ICON_ARROW_NAV_RIGHT = styled(PiArrowRightLight)`
${baseArrowStyles}
`;
export const NAV_BUTTON_L = styled.button`
${baseButtonStyles}
&:hover{
     ${ICON_ARROW_NAV_LEFT} {
       color: var(--green);
    }
  }
  `;
export const NAV_BUTTON_R = styled.button`
${baseButtonStyles};
&:hover{
     ${ICON_ARROW_NAV_RIGHT} {
       color: var(--green);
    }
  }
  `;

export const DIV_TITLE = styled.div`
display: flex;
    flex-direction: column;
    justify-content: flex-end;
padding:24px 12px 12px 12px;
background:var(--gray);
min-height: 166px;
 @media (min-width: 511px) {
    min-height: 0px;
  }
  `;
export const HR = styled.hr`
   border: none;
   height: 1px;
   margin: 0px;
   background-color: var(--green);
 `;
export const DIV_BTN = styled.div`

       display: flex;
    justify-content: space-between;
    align-items: center;
   gap:50px;
   margin-bottom:20px;
 `;
export const DIV = styled.div`
 
   max-width:57%;
   @media (min-width: 350px) {
    max-width:61%;
  }
   @media (min-width: 450px) {
    max-width:70%;
  }
 `;
export const P = styled.p`
 text-align: start;
   font-size:18px;
   
 `;

export const ICON_ARROW = styled(HiArrowUpRight)`
color: var(--green);
  font-size: 28px;
  
`;
export const SPAN_ARROW = styled.button`
 display: flex;
     align-items: center;
     justify-content: center;

 border-radius:100%;
 width: 60px;
 height: 60px;
 background-color:var(--main-text-color);
 transition:background-color 250ms ease-in-out,color 250ms ease-in-out;
 &:hover{
       background-color:var(--green);
   }
   &:hover ${ICON_ARROW} {
     color: var(--main-text-color);
   }
 
 `;

export const P_TITLE = styled.p`
 display: flex;
     justify-content: space-between;
     margin-top:12px;
   font-size:12px;
 `;

export const SPAN = styled.span`
   font-size:12px;
 `;



export const SPAN_CURRENT = styled.span`
 font-size:28px;
 font-weight:300;
 color: var(--main-text-color);
   `;
export const SPAN_TOTAL_IMG = styled.span`
 font-size:28px;
 font-weight:300;
 color:rgba(23, 59, 49, 0.25);
   `;