import { Container } from "./styles";

export function CardText({ primaryText, secondaryText }) {
  return (
    <Container>
      <span>
        {secondaryText ? primaryText + " " + secondaryText : primaryText}
      </span>
    </Container>
  );
}
