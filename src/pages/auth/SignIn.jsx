import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const onClickSignUp = () => {
    navigate("/sign-up");
  };

  return (
    <div>
      <form>
        <input type="text" placeholder="email" />
        <input type="password" placeholder="password" />
        <button type="submit">Sign In</button>
        <button type="button">Google</button>
      </form>
      <div>
        <div>계정이 없으신가요?</div>
        <button onClick={onClickSignUp}>회원가입</button>
      </div>
    </div>
  );
};

export default SignIn;
