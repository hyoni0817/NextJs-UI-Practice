import React from 'react';
import styled from 'styled-components';

const ResultListBox = styled.div`
  width: 100%;
  position: absolute;
  top: 40px;
  display: none;
`;

const ResultList = styled.ul`
  margin: 8px 0;
  list-style: none;
  padding: 8px 16px;
  border: 1px solid #ccc;
`;

const SearchAutoCompleteList = () => (
  <ResultListBox className="book-result">
    <ResultList>
      <li>검색결과가 없습니다.</li>
    </ResultList>
  </ResultListBox>
);

export default SearchAutoCompleteList;
