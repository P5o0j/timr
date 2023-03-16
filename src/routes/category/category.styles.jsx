import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
`;

export const CategoryTitle = styled(Link)`
  font-size: 30px;
  margin-bottom: 25px;
  text-align: center;
`;
