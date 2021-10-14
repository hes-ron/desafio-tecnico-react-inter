import { Container } from "./styles";

export function Thumbnail({ imageSource }) {
  return (
    <Container>
      <img src={imageSource} />
    </Container>
  );
}
