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
  gap: 16px;
`;

const SnsShareButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  background: ${(props) => {
    switch (props.snsType) {
      case 'twitter':
        return '#1d9bf0';
      case 'facebook':
        return '#3865ad';
      case 'kakao':
        return '#fae100';
      default:
        return '#1d9bf0';
    }
  }};
`;

const Img = styled.img`
  object-fit: cover;
  width: 90%;
  height: 90%;
  border-radius: 50%;
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

  const handleClickFacebook = () => {
    const sendUrl = 'http://localhost:3000/snsshare'; // 전달할 URL
    window.open(`http://www.facebook.com/sharer/sharer.php?u=${sendUrl}`);
  };

  return (
    <>
      <ReactHelmet title="SNS 공유하기" description="SNS 공유 버튼 구현 연습 페이지 입니다." siteName="UI TEST" />
      <Title>SNS 공유하기</Title>
      <FlexBox>
        <SnsShareButton type="button" snsType="kakao" onClick={handleClickKakaoShare}>
          <Img
            src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
            alt="카카오톡 공유 보내기 버튼"
          />
        </SnsShareButton>
        <SnsShareButton type="button" snsType="twitter" onClick={handleClickTwitterShare}>
          트위터
        </SnsShareButton>
        <SnsShareButton type="button" snsType="facebook" onClick={handleClickFacebook}>
          페이스북
        </SnsShareButton>
      </FlexBox>
    </>
  );
};

export default SnsShare;
