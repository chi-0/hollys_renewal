import styled from "styled-components";
import { color, fontFamily, fontWeight } from "../../common/common";

const SubBannerWrap = styled.section`
  width: 100%;
  height: 57vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.$bannerImg}) no-repeat center / cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BannerText = styled.div`
  color: ${color.WhiteColor};
  text-align: center;
  font-weight: ${fontWeight.bold};

  h3 {
    font-size: 70px;
    font-family: ${fontFamily.roboto};
    margin-bottom: 20px;
  }
  p {
    font-size: 21px;
  }
`;

export const SubBanner = ({ bannerImg, bannerTitle }) => {
  return (
    <SubBannerWrap $bannerImg={bannerImg}>
      <BannerText>
        <h3>{bannerTitle}</h3>
        <p>
          할리스는 ‘의미 있는 작은 차이가 평범함과 특별함을 가르는 기준이
          된다’고 생각합니다
        </p>
      </BannerText>
    </SubBannerWrap>
  );
};
