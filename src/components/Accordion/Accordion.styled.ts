import styled from "styled-components";
import { BsFillArrowDownCircleFill } from "react-icons/bs"

export const Accordion_Container = styled.section`
`;
export const H2 = styled.h2`

`;

export const BUTTON = styled.button`
display: flex;
align-items: center;
margin-top:12px;
 font-size:16px;
 border-radius:50px;
 padding: 10px 16px;
 background-color:var(--green);
 color:var(--main-text-color);
 transition:background-color 250ms ease-in-out, color 250ms ease-in-out;
  &:hover {
     background-color:var(--main-text-color);
     color:var(--green)

   
  }
`;

export const ICON = styled(BsFillArrowDownCircleFill)`
 margin-left:12px;
 background-color:var(--main-text-color);
 border-radius:100%;
`;

export const SPAN = styled.span`
 margin:36px 0px 0px 0px;

`;
export const DIV_QUESTION = styled.div`
margin-top: 36px;
    display: flex;
    flex-direction: column;
    align-items: center;




`;