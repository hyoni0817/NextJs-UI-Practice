import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { Modal } from 'antd';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon } from 'react-share';
import useScript from '../hooks/useScript';
import ReactHelmet from '../components/share/ReactHelmet';
import facebookLogo from '../public/img/snsLogo/facebook.png';
import TwitterLogo from '../public/img/snsLogo/twitter.svg';

const Title = styled.h1`
  text-align: center;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

const KakaoShareButton = styled.button`
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  background: #fae100;
  cursor: pointer;
`;

const Img = styled.img`
  object-fit: cover;
  width: 90%;
  height: 90%;
  border-radius: 50%;
`;

const UrlCopyButton = styled.button`
  width: auto;
  height: 48px;
  padding: 0 16px;
  border: none;
  border-radius: 48px;
`;

const ShareButton = styled.button`
  padding: 16px;
  border: none;
  border-radius: 50%;
  background: #ff6633;
  color: #ffffff;
`;

type SnsShareProps = {
  isMobile: boolean;
};

const SnsShare: FC<SnsShareProps> = (props) => {
  const router = useRouter();
  const { isMobile } = props;
  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);
  const title = 'SNS 공유하기';
  const currentUrl = `${process.env.NEXT_PUBLIC_HOST}${router.asPath}`;
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
      requestUrl: `${process.env.NEXT_PUBLIC_HOST}/snsshare`,
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
    const sendUrl = `${process.env.NEXT_PUBLIC_HOST}/snsshare`; // 전달할 URL
    window.open(`https://twitter.com/intent/tweet?text=${sendText}&url=${sendUrl}`);
  };

  const handleClickShare = () => {
    if (isMobile) {
      // 모바일인 경우에만 Web Share API 실행
      if (navigator.share) {
        navigator
          .share({
            title,
            url: currentUrl,
          })
          .then(() => {
            console.log('Thanks for sharing!');
          })
          .catch(console.error);
      } else {
        // fallback
        setIsShareModalOpen(true);
      }
    } else {
      setIsShareModalOpen(true);
    }
  };

  const handleShareModalCancel = () => {
    setIsShareModalOpen(false);
  };

  return (
    <>
      <ReactHelmet title="SNS 공유하기" description="SNS 공유 버튼 구현 연습 페이지 입니다." siteName="UI TEST" />
      <Title>SNS 공유하기</Title>
      <FlexBox>
        <ShareButton type="button" onClick={handleClickShare}>
          공유
        </ShareButton>
      </FlexBox>
      <Modal title="공유하기" open={isShareModalOpen} onCancel={handleShareModalCancel} footer={null}>
        <FlexBox>
          <KakaoShareButton type="button" snsType="kakao" onClick={handleClickKakaoShare}>
            <Img
              src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
              alt="카카오톡 공유 보내기 버튼"
            />
          </KakaoShareButton>
          <TwitterShareButton url={currentUrl} title={title}>
            <TwitterIcon size={48} round borderRadius={24} />
          </TwitterShareButton>
          <FacebookShareButton url={currentUrl}>
            <FacebookIcon size={48} round borderRadius={24} />
          </FacebookShareButton>
          <CopyToClipboard text={currentUrl} onCopy={() => alert('링크가 복사되었습니다.')}>
            <UrlCopyButton type="button">링크 복사</UrlCopyButton>
          </CopyToClipboard>
        </FlexBox>
      </Modal>
    </>
  );
};

export default SnsShare;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context;

  // 모바일 기기 접속 여부 체크
  const detectMobileDevice = (agent) => {
    const mobileRegex = [/Android/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i];
    return mobileRegex.some((mobile) => agent.match(mobile));
  };

  const isMobile = detectMobileDevice(req.headers['user-agent']);

  return {
    props: { isMobile },
  };
};
