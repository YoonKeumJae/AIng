import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const GoogleButton = styled.button`
  width: 200px;
  height: 30px;
  border: none;
  border-radius: 5px;
  background-color: white;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const GoogleLogo = styled.img`
  height: 20px;
  margin-right: 10px;
`;

const GoogleBtn = () => {
  const navigate = useNavigate();
  const onClickGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate("/URP");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <GoogleButton type="button" onClick={onClickGoogle}>
      <GoogleLogo src="/GoogleLogo.svg" />
      Google
    </GoogleButton>
  );
};

export default GoogleBtn;
