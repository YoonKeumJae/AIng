import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const onClickSignIn = () => {
    navigate("/sign-in");
  };
  return (
    <div>
      회원가입
      <form>
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" />
        <input type="password" placeholder="password check" />
        <button type="submit">Sign Up</button>
      </form>
      <div>
        <div>계정이 있으신가요?</div>
        <button onClick={onClickSignIn}>로그인</button>
      </div>
    </div>
  );
};

export default SignUp;
