import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Avatar } from "@mui/material";

const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;
const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
  margin-left: 5px;
`;

const Text = styled.span`
  font-size: 14px;
`;

const Comment = ({ comment }) => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const username = JSON.parse(localStorage.getItem("username"));
    setUsername(username);
  }, []);

  return (
    <Container>
      <Avatar alt="user-avatar" sx={{ width: 50, height: 50 }} />
      <Details>
        <Name>
          {username} <Date>a few seconds ago</Date>
        </Name>
        <Text>{comment}</Text>
      </Details>
    </Container>
  );
};

export default React.memo(Comment);
