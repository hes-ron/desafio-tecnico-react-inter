import styled from "styled-components";

export const Container = styled.div`
  padding-right: 1rem;
  text-align: center;
  transition: all 0.5s;

  > img {
    border-radius: 50%;
  }

  &:hover {
    transform: scale(1.2);
  }
`;
