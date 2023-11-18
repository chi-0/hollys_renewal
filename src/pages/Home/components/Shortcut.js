import { Link } from "react-router-dom";
import homeIcon from "../img/Home Page.png";
import telIcon from "../img/Ringer Volume.png";
import styled from "styled-components";
import { color, fontWeight } from "../../../common/common";

const Shortcuts = styled.div`
  position: fixed;
  top: 230px;
  right: 40px;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background-color: ${color.RedColor};
    color: ${color.WhiteColor};
    font-weight: ${fontWeight.bold};
  }
  a:first-child {
    margin-bottom: 20px;
  }
  img {
    margin-bottom: 10px;
  }
`;

export const Shortcut = () => {
  return (
    <Shortcuts>
      <Link to={"/가맹문의"}>
        <img src={homeIcon} alt="homeIcon" />
        <span>가맹문의</span>
      </Link>
      <Link to={"/가맹상담"}>
        <img src={telIcon} alt="telIcon" />
        <span>가맹상담</span>
      </Link>
    </Shortcuts>
  );
};
