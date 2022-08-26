import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 20px 50px;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  width: 100%;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
`;

const More = styled.div`
  display: flex;
  margin-top: 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

const Links = styled.div`
  margin-left: 50px;
`;

const Link = styled.span`
  margin-left: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SignIn = ({ setUserSignedIn }) => {
  const navigate = useNavigate();

  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpUserName, setSignUpUserName] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signInUserName, setSignInUserName] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  useEffect(() => {
    setUserSignedIn(false);
  }, []);

  const handleSignUp = (e) => {
    e.preventDefault();
    if (signUpEmail && signUpUserName && signUpPassword) {
      localStorage.setItem("email", JSON.stringify(signUpEmail));
      localStorage.setItem("username", JSON.stringify(signUpUserName));
      localStorage.setItem("password", JSON.stringify(signUpPassword));
      setUserSignedIn(true);
      resetValues();

      navigate("/home");
    }
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    const username = JSON.parse(localStorage.getItem("username"));
    const password = JSON.parse(localStorage.getItem("password"));

    if (signInUserName === username && signInPassword === password) {
      setUserSignedIn(true);
      resetValues();
      navigate("/home");
    }
  };

  const resetValues = () => {
    setSignUpEmail("");
    setSignUpUserName("");
    setSignUpPassword("");
    setSignInUserName("");
    setSignInPassword("");
  };

  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <SubTitle>to continue to vidTube</SubTitle>

        <Form id="form1">
          <Input
            placeholder="username"
            type="text"
            value={signInUserName}
            onChange={(e) => setSignInUserName(e.target.value)}
          />
          <Input
            type="password"
            placeholder="password"
            value={signInPassword}
            onChange={(e) => setSignInPassword(e.target.value)}
          />
          <Button form="form1" value="Submit" onClick={handleSignIn}>
            Sign in
          </Button>
        </Form>

        <Title>or</Title>
        <Form id="form2">
          <Input
            placeholder="email"
            type="email"
            value={signUpEmail}
            onChange={(e) => setSignUpEmail(e.target.value)}
          />
          <Input
            placeholder="username"
            type="text"
            value={signUpUserName}
            onChange={(e) => setSignUpUserName(e.target.value)}
          />
          <Input
            type="password"
            placeholder="password"
            value={signUpPassword}
            onChange={(e) => setSignUpPassword(e.target.value)}
          />
          <Button form="form2" value="Submit" onClick={handleSignUp}>
            Sign up
          </Button>
        </Form>
      </Wrapper>
      <More>
        English(USA)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  );
};

export default SignIn;
