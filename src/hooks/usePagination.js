import { useState, useEffect } from 'react';

export const usePagination = (getData, pageLength) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [currentDataList, setCurrentDataList] = useState([]);
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const data = getData(); // 이 부분은 원하는 데이터를 가져오는 로직으로 대체해야 합니다.
    setDataList(data);
  }, [getData]);

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

  return {
    currentPage,
    currentDataList,
    onClickPrev,
    onClickNext
  };
}
