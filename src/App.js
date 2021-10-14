import { GlobalStyle } from "./styles/global";
import { CardUser } from "./components/molecules/CardUser";
import { Container } from "./styles";

export default function App() {
  return (
    <>
      <Container>
        <CardUser />
      </Container>
      <GlobalStyle />
    </>
  );
}
