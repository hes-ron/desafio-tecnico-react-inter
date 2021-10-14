import styled from "styled-components";
import backgroundImg from "./assets/hokusai.jpg";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${backgroundImg});
`;
