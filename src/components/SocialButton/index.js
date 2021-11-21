import React from "react";
import styled from "styled-components";
import { FacebookShareButton, FacebookIcon } from "react-share";
import { TwitterShareButton, TwitterIcon } from "react-share";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useScript } from "hooks";
import { useEffect } from "react";
import kakaoLogo from "assets/images/kakao.png";

const KakaoShareButton = styled.a`
  cursor: pointer;
`;

const KakaoIcon = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 24px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 48px);
  grid-column-gap: 8px;
  justify-content: center;
  margin-bottom: 40px;
`;

const URLShareButton = styled.button`
  width: 48px;
  height: 48px;
  color: white;
  border-radius: 24px;
  border: 0px;
  font-weight: 800;
  font-size: 16px;
  cursor: pointer;
  background-color: ${(props) => props.theme.primaryColor100};
  &:hover {
    background-color: ${(props) => props.theme.primaryColor80};
  }
`;
const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 16px;
  text-align: center;
  margin-bottom: 8px;
  font-weight: bold;
`;

const SocialButtonGroup = () => {
  const currentUrl = window.location.href;
  const status = useScript("https://developers.kakao.com/sdk/js/kakao.js");

  useEffect(() => {
    if (status === "ready" && window.Kakao) {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init("5eb802c571d820bee6253d47e16e4100");
      }
    }
  }, [status]);

  const handleKakaoButton = () => {
    window.Kakao.Link.sendScrap({
      requestUrl: currentUrl,
    });
  };

  function copy() {
    alert("복사 성공!");
  }

  return (
    <FlexContainer>
      <Title>나의 결과 공유하기</Title>
      <GridContainer>
        <CopyToClipboard text={currentUrl}>
          <URLShareButton onClick={copy}>URL</URLShareButton>
        </CopyToClipboard>

        <KakaoShareButton onClick={handleKakaoButton}>
          <KakaoIcon src={kakaoLogo}></KakaoIcon>
        </KakaoShareButton>

        <FacebookShareButton url={currentUrl}>
          <FacebookIcon size={48} round={true} borderRadius={24}></FacebookIcon>
        </FacebookShareButton>

        <TwitterShareButton url={currentUrl}>
          <TwitterIcon size={48} round={true} borderRadius={24}></TwitterIcon>
        </TwitterShareButton>
      </GridContainer>
    </FlexContainer>
  );
};
export default SocialButtonGroup;
