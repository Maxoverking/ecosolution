import styled from "styled-components";

import { GoArrowRight } from "react-icons/go";

export const DIV_FORM = styled.div`
background-color: #EAEDF1;

`;
export const FORM = styled.form`
display: flex;
    flex-direction: column;
padding:36px 12px;

`;
export const LABEL = styled.label`
font-size:16px;
margin-bottom:8px;

`;
export const INPUT = styled.input`
font-size:18px;
margin-bottom:28px;
padding-bottom:8px;
border:1px solid var(--green);
border-top: none;
border-left: none;
border-right: none;
background:transparent;

`;
export const TEXTAREA = styled.textarea`
font-size:18px;

border:1px solid var(--green);
border-top: none;
border-left: none;
border-right: none;
background:transparent;
resize:none;

`;
export const BUTTON = styled.button`
width: 96px;
display: flex;
    align-items: center;
    justify-content:center;
    font-size:16px;
    padding:4px 16px;
border:1px solid var(--green);


border-radius:50px;


`;

export const ICON_SPAN = styled.span`
display: flex;
justify-content:center;
align-items:center;
width: 32px;
height: 32px;
background-color:var(--green);
border-radius:100%;
margin-left:12px;
`;
export const ICON = styled(GoArrowRight)`
width: 36px;
height: 20px;
`;

export const DIV_SEND = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top:16px;

`;