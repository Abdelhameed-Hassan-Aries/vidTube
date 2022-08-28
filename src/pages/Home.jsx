import React, { useEffect } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Home = ({ darkMode, staticVideosData, setUserSignedIn }) => {
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

  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  return (
    <Container>
      {staticVideosData.length ? (
        shuffle(staticVideosData).map((item, idx) => {
          return <Card key={idx} item={item} />;
        })
      ) : (
        <Typography
          variant="body2"
          style={{ color: darkMode ? "white" : "black" }}
          marginX={1}
        >
          No Search Results Found
        </Typography>
      )}
    </Container>
  );
};

export default Home;
