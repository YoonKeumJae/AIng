import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 100%;
  border: 4px solid var(--color-white);
  border-radius: 10px;
  padding: 20px 10px;
`;

const Img = styled.img`
  width: 100%;
  margin: 20px 0;
`;
const Title = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--color-red);
`;

const Info = () => {
  return (
    <Wrapper>
      <Title>Info</Title>
      <Img src="/AboutUs.png" />
    </Wrapper>
  );
};

export default Info;
