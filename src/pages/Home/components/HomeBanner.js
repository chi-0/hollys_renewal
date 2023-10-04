import styled from "styled-components";
import { color, fontFamily, fontWeight } from "../../../common/common";
import homeBanner from "../img/homeBanner.jpg";

const Banner = styled.section`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${homeBanner}) no-repeat center / cover;
  background-attachment: fixed;
`;

const BannerText = styled.div`
  text-align: center;
  font-family: ${fontFamily.roboto};
  color: ${color.WhiteColor};
  font-weight: ${fontWeight.bold};

  h3 {
    font-size: 70px;
    margin-bottom: 20px;
  }

  p {
    font-size: 21px;
  }
`;

export const HomeBanner = () => {
  return (
    <Banner>
      <BannerText>
        <h3>Making coffee fun</h3>
        <p>“The aesthetics of a small difference”</p>
      </BannerText>
    </Banner>
  );
};
