import styled from "styled-components";

export const Container = styled.div`
  & + div {
    margin-top: 5px;
  }

  > span {
    font-size: 18px;
  }
`;
