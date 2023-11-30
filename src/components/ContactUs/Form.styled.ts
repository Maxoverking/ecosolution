import styled from "styled-components";


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
border:1px solid var(--green);
border-top: none;
border-left: none;
border-right: none;
background:transparent;

`;
export const TEXTAREA = styled.textarea`
font-size:18px;
margin-bottom:16px;
border:1px solid var(--green);
border-top: none;
border-left: none;
border-right: none;
background:transparent;
resize:none;

`;
export const BUTTON = styled.button`
border:1px solid var(--green);


`;