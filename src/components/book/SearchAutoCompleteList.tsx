import React, { FC } from 'react';
import styled from 'styled-components';

const ResultListBox = styled.div`
  width: 100%;
  position: absolute;
  top: 40px;
  display: none;
`;

const ResultList = styled.ul`
  height: ${(props) => (props.isData ? '200px' : 'auto')};
  margin: 8px 0;
  overflow-y: auto;
  list-style: none;
  padding: 8px 0;
  border: 1px solid #ccc;
`;

const Item = styled.li`
  padding: 8px 16px;

  &:hover {
    background: #f6f6f6;
  }
`;

const FlexBox = styled.div`
  display: flex;
  gap: 8px;
`;
const BookImg = styled.img`
  width: 40px;
  height: auto;
`;

const TitleParagraph = styled.p`
  margin: 0;
  align-self: center;
  color: #000;
`;

const NoItem = styled.li`
  text-align: center;
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
      <ResultList isData={data?.length}>
        {data?.length ? (
          data.map((item) => (
            <Item key={item.isbn}>
              <a href={item.link}>
                <FlexBox>
                  <BookImg src={item.image} alt={item.title} />
                  <TitleParagraph>
                    {item.title}({item.pubdate.slice(0, 4)})
                  </TitleParagraph>
                </FlexBox>
              </a>
            </Item>
          ))
        ) : (
          <NoItem>검색결과가 없습니다.</NoItem>
        )}
      </ResultList>
    </ResultListBox>
  );
};

export default SearchAutoCompleteList;
