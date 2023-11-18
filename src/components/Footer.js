import { Link } from "react-router-dom";
import styled from "styled-components";
import { color, fontWeight } from "../common/common";

const FooterWrap = styled.footer`
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  background-color: ${color.RedColor};
`;

const FooterTop = styled.div`
  max-width: 1490px;
  width: 100%;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  position: relative;

  a {
    color: ${color.WhiteColor};
  }
  > a {
    margin-right: 100px;
    font-size: 21px;
    font-weight: ${fontWeight.bold};
  }
`;

const FooterTopNav = styled.div`
  display: flex;

  a {
    margin-right: 30px;
    font-size: 14px;
  }
  a:last-child {
    margin-right: 0;
  }
`;

const PageUp = styled.button`
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  border: 2px solid white;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
`;

const FooterBottom = styled.div`
  max-width: 1490px;
  width: 100%;
  padding: 40px 20px 80px 20px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const FooterBox1 = styled.ul`
  font-size: 14px;
  color: #eaeaea;

  li {
    float: left;
    margin-bottom: 10px;
  }

  li:nth-child(1) {
    margin-right: 15px;
  }
  li:nth-child(3) {
    clear: left;
    margin-right: 15px;
  }
  li:nth-child(5) {
    clear: left;
  }
  li:nth-child(6) {
    clear: left;
    margin-bottom: 0;
  }
`;

const FooterBox2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FooterSns = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const FacebookBtn = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: white;
  margin-right: 30px;
`;

const InstaBtn = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: white;
`;

const FooterTel = styled.div`
  display: flex;
  justify-content: flex-end;
  color: ${color.WhiteColor};
  font-weight: ${fontWeight.medium};
  transform: translateY(10px);
`;

const MainTel = styled.div`
  margin-right: 100px;

  span:nth-of-type(1) {
    font-size: 21px;
    margin-right: 10px;
  }
  span:nth-of-type(2) {
    font-size: 30px;
  }
`;

const RefTel = styled.div`
  span:nth-of-type(1) {
    font-size: 21px;
    margin-right: 10px;
  }
  span:nth-of-type(2) {
    font-size: 30px;
  }
`;

export const Footer = () => {
  return (
    <>
      <FooterWrap>
        <FooterTop>
          <Link to={"/"}>HOLLYS</Link>
          <FooterTopNav>
            <Link
              to={
                "https://www.hollys.co.kr/customer/policy/customerInfoPolicy.do"
              }
              target="blank_"
            >
              개인정보처리방침
            </Link>
            <Link
              to={"https://www.hollys.co.kr/customer/policy/serviceTerms.do"}
              target="blank_"
            >
              서비스이용약관
            </Link>
            <Link
              to={"https://www.hollys.co.kr/customer/policy/membershipTerms.do"}
              target="blank_"
            >
              멤버쉽이용약관
            </Link>
            <Link
              to={"https://www.hollys.co.kr/customer/policy/hollysCardTerms.do"}
              target="blank_"
            >
              할리스카드이용약관
            </Link>
            <Link
              to={"https://www.hollys.co.kr/customer/inquiry.do"}
              target="blank_"
            >
              고객문의
            </Link>
            <Link
              to={"https://www.hollys.co.kr/customer/survey/surveyInfo.do"}
              target="blank_"
            >
              고객설문
            </Link>
            <Link to={"/사이트맵"}>사이트맵</Link>
            <Link to={"/bi소개"}>BI소개</Link>
          </FooterTopNav>
          <PageUp></PageUp>
        </FooterTop>

        <FooterBottom>
          <FooterBox1>
            <li>법인명: (주) 케이지할리스에프앤비</li>
            <li>대표자: 이종현</li>
            <li>사업자등록번호 211-87-61044</li>
            <li>통신판매업: 제2019-서울종로-0193호</li>
            <li>주소 : 서울특별시 중구 통일로 92, 9층(순화동, 케이지타워)</li>
            <li>COPYRIGHT (C) KG HOLLYS F&B. All Rights Reserved.</li>
          </FooterBox1>
          <FooterBox2>
            <FooterSns>
              <FacebookBtn></FacebookBtn>
              <InstaBtn></InstaBtn>
            </FooterSns>
            <FooterTel>
              <MainTel>
                <span>대표전화</span>
                <span>02-2188-7100</span>
              </MainTel>
              <RefTel>
                <span>가맹문의</span>
                <span>02-6350-7229</span>
              </RefTel>
            </FooterTel>
          </FooterBox2>
        </FooterBottom>
      </FooterWrap>
    </>
  );
};
