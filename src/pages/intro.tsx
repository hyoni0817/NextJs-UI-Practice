import React from 'react';
import styled, { keyframes } from 'styled-components';

const images = [
  'https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202105/18/sportsdonga/20210518161658583frfh.jpg',
  'https://image.news1.kr/system/photos/2021/5/11/4762836/article.jpg/dims/quality/80/optimize',
  'https://cdn.straightnews.co.kr/news/photo/202104/104438_78197_4833.jpg',
  'https://image.xportsnews.com/contents/images/upload/article/2021/0430/mb_1619745619292694.jpg',
];

// 이미지가 가로로 움직이는 것이 무한 캐러셀처럼 동작하게 하기 위해서 아래와 같은 배열 리스트를 생성
const imageList = [...images, ...images];

const Section = styled.section`
  margin: 0 auto;
  width: 800px;
  overflow: hidden;
`;

const moveRight = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-${(100 / (images.length / 2)) * imageList.length}%);
  }
`;

const CarouselContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
`;

const ImageWrapper = styled.div`
  display: flex;
  width: fit-content;
  animation: ${moveRight} 10s linear infinite;
`;

const Image = styled.img`
  width: 200px;
  height: auto;
`;

const Intro2 = () => {
  return (
    <Section>
      <CarouselContainer>
        {images.map((image, index) => (
          <ImageWrapper key={index}>
            <Image src={image} alt={`Image ${index + 1}`} />
          </ImageWrapper>
        ))}
      </CarouselContainer>
    </Section>
  );
};

export default Intro2;
