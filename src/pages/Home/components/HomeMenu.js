import { Link } from "react-router-dom";
import styled from "styled-components";
import { color, fontWeight } from "../../../common/common";

const HomeMenuSec = styled.section`
  width: 100%;
  padding: 90px 20px;
  text-align: center;
  background-color: ${color.RedColor + "1a"};

  h3 {
    font-size: 90px;
    font-weight: ${fontWeight.medium};
    margin-bottom: 50px;
    color: ${color.RedColor};
  }
  a {
    color: ${color.RedColor};
    margin: 0 auto;
    margin-bottom: 80px;
    font-size: 21px;
    width: fit-content;
  }
  a:last-child {
    margin-bottom: 0;
  }
`;

export const HomeMenu = () => {
  return (
    <HomeMenuSec>
      <h3>HOLLYS MENU</h3>
      <Link to={"/menu/coffee"}>COFEE</Link>
      <Link to={"/menu/drink"}>DRINK</Link>
      <Link to={"/menu/tea"}>TEA</Link>
      <Link to={"/menu/food"}>FOOD</Link>
    </HomeMenuSec>
  );
};
