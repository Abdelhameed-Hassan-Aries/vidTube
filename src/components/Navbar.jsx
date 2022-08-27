import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Typography, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  padding: 0px 20px;
  position: relative;
`;

const Search = styled.div`
  width: 40%;
  position: absolute;
  left: 0px;
  right: 0px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  color: ${({ theme }) => theme.text};
`;

const UserData = styled.button`
  position: relative;
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text};
  width: 178px;
  color: white;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const SignoutMenu = styled.button`
  position: absolute;
  bottom: -55px;
  left: 0;
  border: 1px solid ${({ theme }) => theme.text};
  color: white;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 10px 56px;
  background-color: ${({ theme }) => theme.bgLighter};
`;

const Navbar = ({ darkMode }) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [showSignOutMenu, setShowSignOutMenu] = useState(false);

  useEffect(() => {
    const username = JSON.parse(localStorage.getItem("username"));
    setUsername(username);
  }, []);

  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder="Search" style={{ width: "100%" }} />
          <SearchOutlinedIcon sx={{ color: darkMode ? "white" : "black" }} />
        </Search>

        <UserData onClick={() => setShowSignOutMenu(!showSignOutMenu)}>
          <Avatar alt="user-avatar" sx={{ width: 32, height: 32 }} />
          <Typography
            variant="body2"
            style={{ color: darkMode ? "white" : "black" }}
            marginX={1}
            noWrap
          >
            {username}
          </Typography>

          {showSignOutMenu && (
            <SignoutMenu onClick={() => navigate("/")}>
              <Typography
                variant="body2"
                style={{ color: darkMode ? "white" : "black" }}
                marginX={1}
              >
                Signout
              </Typography>
            </SignoutMenu>
          )}
        </UserData>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
