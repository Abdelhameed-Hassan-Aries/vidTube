import React, { useEffect } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = ({ setUserSignedIn }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const username = JSON.parse(localStorage.getItem("username"));
    const password = JSON.parse(localStorage.getItem("password"));

    if (username && password) {
      setUserSignedIn(true);
    } else {
      navigate("/");
    }
  }, []);

  return (
    <Container>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Container>
  );
};

export default Home;
