// IntersectionObserver로 무한 스크롤링 구현하기
import React, { useEffect, useState, useRef } from 'react';
import Highlighter from 'react-highlight-words';
import styled from 'styled-components';

const TitleH1 = styled.h1`
  margin-top: 20px;
  text-align: center;
  font-weight: 700;
`;

const BookListBox = styled.div`
  width: 1080px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;

  & div:not(:last-child) {
    padding-bottom: 20px;
    border-bottom: 1px solid #ccc;
  }
`;

const ItemBox = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
  align-items: center;
`;

const ThumbnailImg = styled.img`
  width: 50px;
  height: auto;
`;

type BookListType = {
  author: string;
  description: string;
  discount: string;
  image: string;
  isbn: string;
  link: string;
  pubdate: string;
  publisher: string;
  title: string;
}[];
type ApiDataType = {
  display: number;
  items: BookListType;
  lastBuildDate: string;
  start: number;
  total: number;
};

const infiniteScroll = () => {
  const [bookList, setBookList] = useState<BookListType>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pageNum, setPageNum] = useState<number>(1);
  const [lastElement, setLastElement] = useState(null);
  const [totalPageNum, setTotalPageNum] = useState<number>(0);
  const observer = useRef(null);

  const callBookList = async () => {
    await fetch(`http://localhost:5555/book/love?keyword=사랑&pageNum=${pageNum}`)
      .then((res) => {
        setIsLoading(true);
        return res.json();
      })
      .then((data: ApiDataType) => {
        setIsLoading(false);
        setTotalPageNum(Math.ceil(data.total / 20));
        setBookList([...bookList, ...data.items]);
      });
  };

  useEffect(() => {
    callBookList();
  }, [pageNum]);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      const first = entries[0];
      if (first.isIntersecting) {
        setPageNum((prevState) => prevState + 1);
      }
    });
    const currentElement = lastElement;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [lastElement]);
  return (
    <div>
      <TitleH1>❤️사랑과 관련된 모든 책 모음❤️</TitleH1>
      <BookListBox>
        <div>
          {React.Children.toArray(
            bookList.map((item, idx) =>
              idx === bookList.length - 1 && !isLoading && pageNum <= totalPageNum ? (
                <ItemBox ref={setLastElement}>
                  <ThumbnailImg src={item.image} alt={item.title} loading="lazy" />
                  <h2>
                    <Highlighter
                      highlightClassName="keyword-highlight"
                      searchWords={['사랑']}
                      autoEscape
                      textToHighlight={item.title}
                    />
                  </h2>
                </ItemBox>
              ) : (
                <ItemBox>
                  <ThumbnailImg src={item.image} alt={item.title} loading="lazy" />
                  <h2>
                    <Highlighter
                      highlightClassName="keyword-highlight"
                      searchWords={['사랑']}
                      autoEscape
                      textToHighlight={item.title}
                    />
                  </h2>
                </ItemBox>
              )
            )
          )}
          {isLoading ? <p>로딩 중...</p> : ''}
        </div>
      </BookListBox>
    </div>
  );
};

export default infiniteScroll;
