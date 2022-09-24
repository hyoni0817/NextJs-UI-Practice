import React, { useEffect } from 'react';
import styled from 'styled-components';
import useScript from '../hooks/useScript';
import ReactHelmet from '../components/share/ReactHelmet';

const Title = styled.h1`
  text-align: center;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
`;

const KakaoButton = styled.button`
  line-height: 1;
  border: none;
  background: none;
`;

const TwitterButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  background: #1d9bf0;
`;

const SnsShare = () => {
  const kakaoScript = useScript('https://developers.kakao.com/sdk/js/kakao.js');

  // kakao sdk 초기화하기
  // kakaoScript가 변경될 때마다 실행되며, status가 ready일 때 초기화를 시도합니다.
  useEffect(() => {
    if (kakaoScript === 'ready' && (window as any).Kakao) {
      // 중복 initialization 방지
      if (!(window as any).Kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        (window as any).Kakao.init(`${process.env.NEXT_PUBLIC_APP_KAKAO_JAVASCRIPT_KEY}`);
      }
    }
  }, [kakaoScript]);

  const handleClickKakaoShare = () => {
    (window as any).Kakao.Link.sendScrap({
      requestUrl: 'http://localhost:3000/snsshare',
      templateId: Number(process.env.NEXT_PUBLIC_KAKAO_TEMPLATE_ID),
      templateArgs: {
        currentUrl: '/snsshare',
        pageName: '/booksearch',
        title: '제목 영역입니다.',
        description: '설명 영역입니다.',
        profileName: 'Kakao',
        profileImgUrl:
          'https://mud-kage.kakao.com/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
        likeCount: 20,
        commentCount: 30,
      },
    });
  };

  const handleClickTwitterShare = () => {
    const sendText = 'SNS 공유하기'; // 전달할 텍스트
    const sendUrl = 'http://localhost:3000/snsshare'; // 전달할 URL
    window.open(`https://twitter.com/intent/tweet?text=${sendText}&url=${sendUrl}`);
  };

  return (
    <>
      <ReactHelmet title="SNS 공유하기" description="SNS 공유 버튼 구현 연습 페이지 입니다." siteName="UI TEST" />
      <Title>SNS 공유하기</Title>
      <FlexBox>
        <KakaoButton type="button" onClick={handleClickKakaoShare}>
          <img
            src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
            alt="카카오톡 공유 보내기 버튼"
          />
        </KakaoButton>
        <TwitterButton type="button" onClick={handleClickTwitterShare}>
          트위터
        </TwitterButton>
      </FlexBox>
    </>
  );
};

export default SnsShare;
