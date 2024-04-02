import styled from "styled-components";

const Wrapper = styled.div``;
const Banner = styled.div`
  width: 100%;
  height: 400px;
  background-color: var(--color-white);
  margin-bottom: 20px;
`;

const Home = () => {
  return (
    <Wrapper>
      <Banner />
      <h1>Welcome to our website!</h1>
    </Wrapper>
  );
};

export default Home;
