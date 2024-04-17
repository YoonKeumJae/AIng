import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
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

const SignInButton = styled.button`
  width: 200px;
  height: 30px;
  border: none;
  border-radius: 5px;
  background-color: var(--color-green);
  margin-bottom: 10px;
  font-weight: bold;
`;

const GoogleButton = styled.button`
  width: 200px;
  height: 30px;
  border: none;
  border-radius: 5px;
  background-color: white;
  margin-bottom: 10px;
`;

const SignUpLink = styled.a`
  cursor: pointer;
  font-weight: bold;
  font-style: italic;
  color: var(--color-red);
`;

const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("이메일과 비밀번호를 입력해주세요.");
      return;
    }
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/URP");
    } catch (e) {
      console.log("로그인에 실패했습니다: ", e);
    }
  };

  const onClickSignUp = () => {
    navigate("/sign-up");
  };

  return (
    <Wrapper>
      <FormWrapper>
        <Title>SignIn</Title>
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
          <SignInButton type="submit">Sign In</SignInButton>
          <GoogleButton type="button">Google</GoogleButton>
        </Form>
        <span>
          계정이 없으신가요?{" "}
          <SignUpLink onClick={onClickSignUp}>회원가입</SignUpLink>
        </span>
      </FormWrapper>
    </Wrapper>
  );
};

export default SignIn;
