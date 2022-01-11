import styled from "styled-components";
import Button from "/src/button/button";

export const Wrapper = styled.div`
  border: 1px solid black;
  padding: 15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fffccc;
  min-width: 500px;
  border-radius: 5px;
  box-shadow: 0 5px 5px 3px lightblue;
  z-index: 7;
`;

export const Header = styled.header`
  position: relative;
  display: flex;
  border-bottom: 1px solid black;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 18px;
`;

export const Close = styled(Button)`
  position: absolute;
  top: 0;
  right: 5px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  padding: 3px;
  line-height: 1;
  /* padding: 0; */
`;
