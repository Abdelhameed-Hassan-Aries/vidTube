import React, { useEffect } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
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

  return (
    <Container>
      {staticVideosData.length ? (
        staticVideosData.map((item, idx) => {
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
