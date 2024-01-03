import React from 'react';
import styled from 'styled-components';

const AnimatedTitleBox = styled.div`
  font-size: 60px;
  font-weight: 300;
  position: relative;
  width: 100%;
  max-width: 100%;
  height: auto;
  padding: 100px 0;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const TrackBox = styled.div`
  position: absolute;
  white-space: nowrap;
  will-change: transform;
  animation: marquee 60s linear infinite;

  @keyframes marquee {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }
  @media (hover: hover) and (min-width: 700px) {
    & .content {
      -webkit-transform: translateY(calc(100% - 8rem));
      transform: translateY(calc(100% - 8rem));
    }
  }
`;

const ImgWrapper = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 10px;
  overflow: hidden;
  line-height: 0;
  flex-shrink: 0;
`;

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const Intro = () => {
  const imgList = [
    'https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202105/18/sportsdonga/20210518161658583frfh.jpg',
    'https://image.news1.kr/system/photos/2021/5/11/4762836/article.jpg/dims/quality/80/optimize',
    'https://cdn.straightnews.co.kr/news/photo/202104/104438_78197_4833.jpg',
  ];
  return (
    <AnimatedTitleBox>
      <TrackBox>
        <div className="content">
          {imgList.map((item) => (
            <>
              <ImgWrapper>
                <Img src={item} />
              </ImgWrapper>
              <ImgWrapper>
                <Img src={item} />
              </ImgWrapper>
              <ImgWrapper>
                <Img src={item} />
              </ImgWrapper>
              <ImgWrapper>
                <Img src={item} />
              </ImgWrapper>
              <ImgWrapper>
                <Img src={item} />
              </ImgWrapper>
              <ImgWrapper>
                <Img src={item} />
              </ImgWrapper>
              <ImgWrapper>
                <Img src={item} />
              </ImgWrapper>
              <ImgWrapper>
                <Img src={item} />
              </ImgWrapper>
              <ImgWrapper>
                <Img src={item} />
              </ImgWrapper>
              <ImgWrapper>
                <Img src={item} />
              </ImgWrapper>
              <ImgWrapper>
                <Img src={item} />
              </ImgWrapper>
              <ImgWrapper>
                <Img src={item} />
              </ImgWrapper>
              <ImgWrapper>
                <Img src={item} />
              </ImgWrapper>
              <ImgWrapper>
                <Img src={item} />
              </ImgWrapper>
              <ImgWrapper>
                <Img src={item} />
              </ImgWrapper>
              <ImgWrapper>
                <Img src={item} />
              </ImgWrapper>
              <ImgWrapper>
                <Img src={item} />
              </ImgWrapper>
              <ImgWrapper>
                <Img src={item} />
              </ImgWrapper>
              <ImgWrapper>
                <Img src={item} />
              </ImgWrapper>
            </>
          ))}
        </div>
      </TrackBox>
    </AnimatedTitleBox>
  );
};

export default Intro;
