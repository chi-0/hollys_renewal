import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { color } from "../../common/common";

const NavWrap = styled.nav`
  width: 100%;
  height: 60px;
  margin: 0 auto;
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
  position: relative;

  a {
    color: ${color.BlackColor};
    font-size: 21px;
  }
`;

const SubNavFocus = styled.div`
  width: 80%;
  height: 3px;
  background-color: ${color.RedColor};
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: ${(props) => props.$dis};
`;

export const SubNav = ({ subNav }) => {
  const { id } = useParams();

  return (
    <NavWrap>
      {subNav.map((con) => (
        <SubMenu key={con.id}>
          <Link to={`/${con.location + con.en}`}>{con.title}</Link>
          <SubNavFocus $dis={con.en === id ? "block" : "none"} />
        </SubMenu>
      ))}
    </NavWrap>
  );
};
