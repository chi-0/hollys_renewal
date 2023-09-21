import { Link } from "react-router-dom";
import styled from "styled-components";
import { homeMdArr } from "../homeData";
import { color, fontWeight } from "../../../common/common";

const HomeMdSec = styled.section`
  width: 100%;
`;

const MdWrap = styled.div`
  max-width: 1490px;
  width: 100%;
  margin: 0 auto;
  padding: 90px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const MdText = styled.div`
  color: ${color.BlackColor};

  h3 {
    font-size: 70px;
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
    color: ${color.RedColor};
    border: 1px solid ${color.RedColor};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const MdImgWrap = styled.div`
  display: flex;

  img {
    margin-right: 10px;
  }
`;

const MdImg = styled.img``;

const MdSubImg = styled.div`
  img {
    margin-right: 0;
    background-color: ${color.RedColor + "1a"};
  }

  img:first-child {
    margin-bottom: 10px;
  }
`;

export const HomeMd = () => {
  return (
    <HomeMdSec>
      <MdWrap>
        <MdText>
          <h3>HOLLYS MD</h3>
          <p>할리스만의 다양한 상품을 만나보세요</p>
          <Link to={"/md"}>더보기</Link>
        </MdText>
        <MdImgWrap>
          <MdImg src={homeMdArr[0].imgUrl} />
          <MdImg src={homeMdArr[1].imgUrl} />
          <MdSubImg>
            <MdImg src={homeMdArr[2].imgUrl} />
            <MdImg src={homeMdArr[3].imgUrl} />
          </MdSubImg>
        </MdImgWrap>
      </MdWrap>
    </HomeMdSec>
  );
};
