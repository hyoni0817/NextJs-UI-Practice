import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
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
  const [timer, setTimer] = useState<any>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [bookList, setBookList] = useState<[]>([]);
  const optionRef = useRef(null);

  const handleClickOutside = ({ target }) => {
    if (!optionRef.current.contains(target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleChangeValue = (e) => {
    const currentValue = e.target.value;
    setValue(currentValue);

    if (timer) {
      clearTimeout(timer as number);
    }

    const newTimer = setTimeout(async () => {
      try {
        if (!e.target.value.length) {
          setBookList([]);
        } else {
          const res = await axios.get(`http://localhost:5555/search/book?keyword=${currentValue}`, {
            headers: {
              withCredentials: true,
            },
          });
          setBookList(res.data.items);
        }
      } catch (error) {
        console.error(error);
      }
    }, 2000);

    setTimer(newTimer);
  };

  const handleOpenList = () => {
    setIsOpen(true);
  };

  return (
    <Container>
      <TitleH1>📚Book Search</TitleH1>
      <SearchBox ref={optionRef}>
        <SearchInput onChange={handleChangeValue} value={value} onOpenList={handleOpenList} />
        {isOpen && <SearchAutoCompleteList data={bookList} />}
      </SearchBox>
    </Container>
  );
};

export default BookSearch;
