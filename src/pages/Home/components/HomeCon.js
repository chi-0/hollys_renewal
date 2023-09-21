import styled from "styled-components";
import { homeConArr } from "../homeData";
import { color, fontFamily, fontWeight } from "../../../common/common";

const Con = styled.section`
  width: 100%;
`;

const ConWrap = styled.div`
  max-width: 1490px;
  width: 100%;
  margin: 0 auto;
  padding: 90px 20px;
  padding-top: ${(props) => props.$pdTop}px;
  display: flex;
  justify-content: space-between;
  flex-direction: ${(props) => props.$direct};
`;

const ConText = styled.div`
  color: ${color.BlackColor};
  margin-top: 80px;

  h3 {
    font-size: 90px;
    font-weight: ${fontWeight.bold};
    margin-bottom: 10px;
    font-family: ${fontFamily.roboto};
  }

  h5 {
    font-size: 30px;
    font-weight: ${fontWeight.medium};
  }

  h5:last-of-type {
    margin-bottom: 60px;
  }

  p {
    font-size: 16px;
    font-weight: ${fontWeight.light};
    width: 600px;
  }
`;

const Line = styled.div`
  width: 130px;
  height: 10px;
  background-color: ${color.RedColor};
  margin-bottom: 20px;
`;

const ConImg = styled.img``;

export const HomeCon = () => {
  return (
    <>
      {homeConArr.map((con) => (
        <Con key={con.id}>
          <ConWrap
            $pdTop={con.id === 0 ? 180 : 90}
            $direct={con.id % 2 === 1 ? "row-reverse" : "row"}
          >
            <ConText>
              <h3>{con.title}</h3>
              <Line />
              <h5>{con.subTitle}</h5>
              <h5>{con.subTitle2}</h5>
              <p>{con.desc}</p>
            </ConText>
            <ConImg src={con.imgUrl} />
          </ConWrap>
        </Con>
      ))}
    </>
  );
};
