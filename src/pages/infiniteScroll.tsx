// IntersectionObserver로 무한 스크롤링 구현하기
import React, { useEffect, useState } from 'react';

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
  const [startNum, setStartNum] = useState<number>(1);

  const callBookList = async () => {
    await fetch(`http://localhost:5555/book/love?keyword=사랑&start=${startNum}`)
      .then((res) => {
        setIsLoading(true);
        return res.json();
      })
      .then((data: ApiDataType) => {
        setIsLoading(false);
        console.log(data.items);
        setBookList([...bookList, ...data.items]);
        if (!data.items.length) {
          setStartNum((prevState) => prevState + 10);
        }
      });
  };
  useEffect(() => {
    callBookList();
  }, []);
  return (
    <div>
      <h1>사랑과 관련된 모든 책 모음</h1>
      {React.Children.toArray(
        bookList.map((item) => (
          <div>
            <h2>{item.title}</h2>
          </div>
        ))
      )}
      {isLoading ? <p>로딩 중...</p> : ''}
    </div>
  );
};

export default infiniteScroll;
