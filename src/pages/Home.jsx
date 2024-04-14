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

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--color-white);
`;

const Home = () => {
  return (
    <Wrapper>
      <ImgContainer>
        <Img src="/Logo.png" />
      </ImgContainer>
      <Title>❤️AING❤️AING❤️AING❤️AING❤️AING❤️AING❤️AING❤️AING❤️AING❤️AING❤️AING❤️AING❤️AING❤️AING❤️AING❤️AING❤️AING❤️AING❤️AING❤️AING❤️AING❤️AING❤️</Title>
    </Wrapper>
  );
};

export default Home;
