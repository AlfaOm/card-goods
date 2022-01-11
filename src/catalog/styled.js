import styled from "styled-components";
import { Ul, Li } from "/src/elements";
import { Link } from "react-router-dom";

export const List = styled(Ul)`
  margin-top: ${(props) => props.theme.indent};
  text-align: center;
  /* font-size: 0; */
`;

export const ListItem = styled(Li)`
  display: inline-block;
  width: 200px;
  margin-bottom: ${(props) => props.theme.indent};
  margin-left: ${(props) => props.theme.indent};
  font-size: 16px;
  padding: 5px;
  text-align: center;
  border: 1px solid ${(props) => props.theme.textColorMuted};
  box-shadow: 4px 4px 4px 1px lightblue;
`;

export const StyledLink = styled(Link)`
  color: ${(props) => props.theme.textColor};
`;
