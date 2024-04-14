import { usePagination } from "../hooks/usePagination";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 100%;
  border: 4px solid var(--color-white);
  border-radius: 10px;
  padding: 20px 0;
`;

const ListWrapper = styled.ul`
  max-width: 100%;
  padding: 10px;
`;

const ListItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  padding: 5px 0;
`;

const Title = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--color-red);
`;

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  margin: 0 10px;
  background-color: var(--color-black);
  color: var(--color-yellow);
  border: none;
`;

const getDummyData = () => {
  const dummy = [
    {
      id: 1,
      title: "notice title 1",
      date: "2021-01-01",
      views: 100,
    },
    {
      id: 2,
      title: "notice title 2",
      date: "2021-01-01",
      views: 100,
    },
    {
      id: 3,
      title: "notice title 3",
      date: "2021-01-01",
      views: 100,
    },
    {
      id: 4,
      title: "notice title 4",
      date: "2021-01-01",
      views: 100,
    },
    {
      id: 5,
      title: "notice title 5",
      date: "2021-01-01",
      views: 100,
    },
    {
      id: 6,
      title: "notice title 6",
      date: "2021-01-01",
      views: 100,
    },
    {
      id: 7,
      title: "notice title 7",
      date: "2021-01-01",
      views: 100,
    },
    {
      id: 8,
      title: "notice title 8",
      date: "2021-01-01",
      views: 100,
    },
    {
      id: 9,
      title: "notice title 9",
      date: "2021-01-01",
      views: 100,
    },
    {
      id: 10,
      title: "notice title 10",
      date: "2021-01-01",
      views: 100,
    },
    {
      id: 11,
      title: "notice title 11",
      date: "2021-01-01",
      views: 100,
    },
  ];
  return dummy;
};

const Notice = () => {
  const { currentPage, currentDataList, onClickPrev, onClickNext } =
    usePagination(getDummyData, 3);

  return (
    <Wrapper>
      <ListWrapper>
      <Title>NOTICE</Title>
        {currentDataList.map((item) => (
          <ListItem key={item.id}>
            <span>{item.id}</span>
            <span>{item.title}</span>
            <span>{item.date}</span>
            <span>{item.views}</span>
          </ListItem>
        ))}
      </ListWrapper>

      <ButtonsWrapper>
        <Button onClick={onClickPrev}>{'<<'}</Button>
        <span>{currentPage}</span>
        <Button onClick={onClickNext}>{'>>'}</Button>
      </ButtonsWrapper>
    </Wrapper>
  );
};

export default Notice;
