import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  height: 300px;
  min-width: 500px;
  padding: 2rem;

  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  .user-names {
    text-align: center;
    margin-top: -10px;
  }

  > div {
    width: 100%;
  }

  @media screen and (max-width: 480px) {
    & {
      min-width: 320px;
      margin: 0 20px;
    }
  }
`;

export const ButtonNewUser = styled.button`
  border: 0;
  font-size: 22px;
  padding: 10px;
  border-radius: 5px;
  width: 100%;

  background-color: #b49d7e;
  color: white;

  transition: all 0.5s;

  &:hover {
    background-color: #2b5059;
  }
`;
