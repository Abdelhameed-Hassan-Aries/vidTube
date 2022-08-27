import React, { useState } from "react";
import styled from "styled-components";
import Comment from "./Comment";
import { Avatar } from "@mui/material";

const Container = styled.div``;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  background-color: transparent;
  outline: none;
  padding: 5px;
  width: 100%;
`;

const AddComment = styled.button`
  background-color: grey;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
  width: 13%;
`;

const ToggleComment = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
  width: 13%;
  margin-top: 20px;
`;

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [userComment, setUserComment] = useState("");
  const [showComment, setShowComment] = useState(false);

  const addComment = () => {
    setComments([...comments, userComment]);
    setUserComment("");
  };

  return (
    <Container>
      <NewComment>
        <Avatar alt="user-avatar" sx={{ width: 50, height: 50 }} />
        <Input
          placeholder="Add a comment..."
          value={userComment}
          onChange={(e) => setUserComment(e.target.value)}
        />
        <AddComment onClick={addComment}>Add Comment</AddComment>
      </NewComment>

      <ToggleComment onClick={() => setShowComment(!showComment)}>
        Toggle Comments
      </ToggleComment>

      {showComment &&
        comments.map((comment) => {
          return <Comment comment={comment} />;
        })}
    </Container>
  );
};

export default Comments;
