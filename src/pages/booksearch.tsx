import React, { useState } from 'react';
import styled from 'styled-components';
import SearchInput from '../components/book/SearchInput';
import SearchAutoCompleteList from '../components/book/SearchAutoCompleteList';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 150px;
`;

const TitleH1 = styled.h1`
  text-align: center;
`;

const SearchBox = styled.div`
  width: 500px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BookSearch = () => {
  const [value, setValue] = useState<string>('');

  const handleChangeValue = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <Container>
      <TitleH1>📚Book Search</TitleH1>
      <SearchBox>
        <SearchInput onChange={handleChangeValue} value={value} />
        <SearchAutoCompleteList />
      </SearchBox>
    </Container>
  );
};

export default BookSearch;
