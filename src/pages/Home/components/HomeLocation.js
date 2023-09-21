import { Link } from "react-router-dom";
import styled from "styled-components";
import locationImg from "../img/location.png";
import { color, fontWeight } from "../../../common/common";

const LocationSec = styled.section`
  width: 100%;
`;

const LocationWrap = styled.div`
  max-width: 1490px;
  width: 100%;
  margin: 0 auto;
  padding: 90px 20px;
  display: flex;
  align-items: center;
`;

const LocationImg = styled.img`
  margin-right: 160px;
`;

const LocationText = styled.div`
  color: ${color.BlackColor};

  h3 {
    font-size: 90px;
    font-weight: ${fontWeight.medium};
    margin-bottom: 10px;
  }
  p {
    font-weight: ${fontWeight.light};
    margin-bottom: 50px;
  }
  a {
    width: 149px;
    height: 53px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${color.RedColor};
    color: ${color.RedColor};
  }
`;

export const HomeLocation = () => {
  return (
    <LocationSec>
      <LocationWrap>
        <LocationImg src={locationImg} />
        <LocationText>
          <h3>LOCATION</h3>
          <p>내 주변의 할리스 매장을 찾아보세요</p>
          <Link to={"/매장찾기"}>매장찾기</Link>
        </LocationText>
      </LocationWrap>
    </LocationSec>
  );
};
