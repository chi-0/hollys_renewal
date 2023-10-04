import { Link } from "react-router-dom";
import styled from "styled-components";
import { color } from "../../common/common";
import { menuMenu } from "../Menu/menuData";

const NavWrap = styled.nav`
  max-width: 1200px;
  width: 100%;
  height: 60px;
  margin: 90px auto 80px auto;
  border-bottom: 1px solid ${color.gray};
  display: flex;
  justify-content: center;
`;

const SubMenu = styled.div`
  width: 200px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: ${color.BlackColor};
    font-size: 21px;
  }
`;

export const SubNav = ({ subNav }) => {
  return (
    <NavWrap>
      {subNav.map((con) => (
        <SubMenu>
          <Link to={"/menu/" + con.location}>{con.title}</Link>
        </SubMenu>
      ))}
    </NavWrap>
  );
};
