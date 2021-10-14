import axios from "axios";
import { useEffect, useState } from "react";
import { CardText } from "../../atoms/CardText";
import { Thumbnail } from "../../atoms/CardThumbnail";
import { ButtonNewUser, Container } from "./styles";

export function CardUser() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    handleGetNewUser();
  }, []);

  function handleGetNewUser() {
    axios.get("https://randomuser.me/api/").then((response) => {
      setUser(response.data.results[0]);
    });
  }

  return (
    <>
      <Container>
        <Thumbnail imageSource={user?.picture?.thumbnail ?? ""} />
        <div className="user-names">
          <CardText
            primaryText={user?.name?.first ?? ""}
            secondaryText={user?.name?.last ?? ""}
          />
          <div className="whole-row">
            <CardText primaryText={user?.email ?? ""} />
          </div>
        </div>
        <ButtonNewUser onClick={handleGetNewUser}>Random user</ButtonNewUser>
      </Container>
    </>
  );
}
