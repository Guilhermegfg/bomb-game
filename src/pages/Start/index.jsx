import React from "react";
import { Container, Logo, Title, SubTitle, Rules } from "./styles";
import ButtonComponent from "../../components/Buttons";

export default function Start() {

  const handleNavToPlayAlone = () => {
    console.log("Botão clicado 1");
  }

  const handleNavToPlayTogether = () => {
    console.log("Botão clicado 2");
  }

  const handleNavToRules = () => {
    console.log("Regras do jogo")
  }

    return (
        <Container>
          <Logo
            source={require("../../assets/logoDark.png")}
            style={{ resizeMode: "contain" }}
          />
        <Title>Bem-vindo ao {"\n"} Bomb game</Title>
        <SubTitle>Escolha um modo de jogo.</SubTitle>
        <ButtonComponent
          buttonText={"Jogar Solo"}
          handlePress={handleNavToPlayAlone}
        />
        <ButtonComponent
          buttonText={"Jogar Em Dupla"}
          handlePress={handleNavToPlayTogether}
        />
        <Rules onPress={handleNavToRules}>Ver as regras do jogo</Rules>
        </Container>
      );
}