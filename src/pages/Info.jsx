import styled from "styled-components";

const Wrapper = styled.div``;
const ImgContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Img = styled.img`
  max-width: 100%;
  height: 400px;
  margin-bottom: 20px;
`;

const Info = () => {
  return (
    <Wrapper>
      <ImgContainer>
        <Img src="/Logo.png" />
      </ImgContainer>
      <Img src="https://via.placeholder.com/800x400" />
    </Wrapper>
  );
};

export default Info;
