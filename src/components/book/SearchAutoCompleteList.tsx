import React, { FC } from 'react';
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

type SearchAutoCompleteLisProps = {
  data: {
    title: string;
    link: string;
    image: string;
    author: string;
    discount: string;
    publisher: string;
    pubdate: string;
    isbn: string;
    description: string;
  }[];
};

const SearchAutoCompleteList: FC<SearchAutoCompleteLisProps> = (props) => {
  const { data } = props;

  return (
    <ResultListBox className="book-result">
      <ResultList>
        {data?.length ? (
          data.map((item) => (
            <li>
              <a href={item.link}>{item.title}</a>
            </li>
          ))
        ) : (
          <li> 검색결과가 없습니다.</li>
        )}
      </ResultList>
    </ResultListBox>
  );
};

export default SearchAutoCompleteList;
