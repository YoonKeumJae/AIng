import { useState, useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
`;

const ListWrapper = styled.ul`
  width: 100%;
  background-color: #f0f0f0;
  padding: 10px;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  border: 1px solid #e0e0e0;
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
  let pageLength = 3;

  const [currentPage, setCurrentPage] = useState(1);
  const [currentDataList, setCurrentDataList] = useState([]);
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const data = getDummyData();
    setDataList(data);
  }, []);

  useEffect(() => {
    const currentData = dataList.slice(
      (currentPage - 1) * pageLength,
      currentPage * pageLength
    );
    setCurrentDataList(currentData);
  }, [currentPage, dataList, pageLength]);

  const onClickPrev = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };

  const onClickNext = () => {
    if (currentPage === Math.ceil(dataList.length / pageLength)) return;
    setCurrentPage(currentPage + 1);
  };

  return (
    <Wrapper>
      <ListWrapper>
        {currentDataList.map((item) => (
          <ListItem key={item.id}>
            <span>{item.id}</span>
            <span>{item.title}</span>
            <span>{item.date}</span>
            <span>{item.views}</span>
          </ListItem>
        ))}
      </ListWrapper>
      <hr />
      <ul>
        <button onClick={onClickPrev}>이전</button>
        <span>{currentPage}</span>
        <button onClick={onClickNext}>다음</button>
      </ul>
    </Wrapper>
  );
};

export default Notice;
