import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 15%;
  height: 100vh;
`;
const Title = styled.span`
  font-size: 2rem;
  font-weight: bold;
  color: var(--color-red);
  margin-bottom: 20px;
`;
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 300px;
  border: 4px solid var(--color-yellow);
  border-radius: 10px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Input = styled.input`
  width: 200px;
  height: 30px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  font-size: 100%;
`;

const SignUpButton = styled.button`
  width: 200px;
  height: 30px;
  border: none;
  border-radius: 5px;
  background-color: var(--color-green);
  margin-bottom: 10px;
  font-weight: bold;
`;

const SignInLink = styled.a`
  cursor: pointer;
  font-weight: bold;
  font-style: italic;
  color: var(--color-red);
`;

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else {
      setPasswordCheck(value);
    }
  };

  const onSubmit = async (e) => {
    console.log("onSubmit");
    e.preventDefault();
    if (password !== passwordCheck) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    if (email === "" || password === "" || passwordCheck === "") {
      alert("모든 항목을 입력해주세요.");
      return;
    }
    console.log("before try-catch");
    try {
      const credentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("success: ", credentials.user);
      await updateProfile(credentials.user, {
        displayName: email,
      });
      // navigate("/URP");
    } catch (e) {
      alert("error: ", e.message);
    }
  };

  const onClickSignIn = () => {
    navigate("/sign-in");
  };
  return (
    <Wrapper>
      <FormWrapper>
        <Title>회원가입</Title>
        <Form onSubmit={onSubmit}>
          <Input
            type="text"
            placeholder="email"
            name="email"
            onChange={onChange}
          />
          <Input
            type="password"
            placeholder="password"
            name="password"
            onChange={onChange}
          />
          <Input
            type="password"
            placeholder="password check"
            name="passwordCheck"
            onChange={onChange}
          />
          <SignUpButton type="submit">회원가입</SignUpButton>
        </Form>
        <span>
          계정이 있으신가요?
          <SignInLink onClick={onClickSignIn}>로그인</SignInLink>
        </span>
      </FormWrapper>
    </Wrapper>
  );
};

export default SignUp;
