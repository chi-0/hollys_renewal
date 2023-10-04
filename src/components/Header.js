import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import logo from "../common/img/logo.gif";
import { Link } from "react-router-dom";
import { color, fontWeight } from "../common/common";

const HeaderTopWrap = styled.header`
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  background-color: ${color.RedColor};
`;

const HeaderTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${color.WhiteColor};
  padding: 10px 40px;
`;

const HTLeft = styled.div`
  display: flex;
  align-items: center;

  a {
    margin-right: 40px;
    color: ${color.WhiteColor};
  }
`;

const HTRight = styled.div`
  display: flex;
  align-items: center;
`;

const HTRightNav = styled.div`
  display: flex;
  align-items: center;

  a {
    margin-right: 40px;
    color: ${color.WhiteColor};
  }
`;

const SearchForm = styled.form`
  position: relative;
`;

const SearchInput = styled.input`
  all: unset;
  box-sizing: border-box;
  border: 1px solid ${color.WhiteColor};
  width: 170px;
  height: 33px;
  padding-left: 5px;
  padding-right: 30px;
  background-color: ${color.WhiteColor};
  color: ${color.BlackColor};
`;

const SearchBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 4px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
`;

const HeaderBottomWrap = styled.header`
  max-width: 1920px;
  width: 100%;
  background-color: ${color.WhiteColor};
  margin: 0 auto;
  position: sticky;
  top: 0;
  left: 0;
`;

const HeaderBottom = styled.div`
  max-width: 1530px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
`;

const HBleft = styled.div`
  max-width: 542px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  a {
    color: ${color.BlackColor};
    font-size: 17px;
    font-weight: ${fontWeight.medium};
  }
`;

const Logo = styled.img``;

const HBright = styled.div`
  max-width: 542px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  a {
    color: ${color.BlackColor};
    font-size: 17px;
    font-weight: ${fontWeight.medium};
  }
`;

export const Header = () => {
  return (
    <>
      <HeaderTopWrap>
        <HeaderTop>
          <HTLeft>
            <Link to={"/창업안내"}>창업안내</Link>
            <Link to={"/채용안내"}>채용안내</Link>
            <Link to={"/사업소개"}>사업소개</Link>
          </HTLeft>
          <HTRight>
            <HTRightNav>
              <Link to={"/로그인"}>로그인</Link>
              <Link to={"/회원가입"}>회원가입</Link>
              <Link to={"/매장찾기"}>매장찾기</Link>
              <Link to={"/고객센터"}>고객센터</Link>
              <Link to={"/ENGLISH"}>ENGLISH</Link>
            </HTRightNav>
            <SearchForm>
              <SearchInput type="text"></SearchInput>
              <SearchBtn>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  style={{
                    fontSize: "20px",
                    color: `${color.RedColor}`,
                  }}
                />
              </SearchBtn>
            </SearchForm>
          </HTRight>
        </HeaderTop>
      </HeaderTopWrap>

      <HeaderBottomWrap>
        <HeaderBottom>
          <HBleft>
            <Link to={"/menu/new"}>MENU</Link>
            <Link to={"/hollys_mall"}>HOLLYS MALL</Link>
            <Link to={"/events"}>EVENTS & NEWS</Link>
          </HBleft>
          <Link to={"/"}>
            <Logo src={logo}></Logo>
          </Link>
          <HBright>
            <Link to={"/membership"}>MEMBERSHIP</Link>
            <Link to={"/store"}>STORE</Link>
            <Link to={"/hollys_is"}>HOLLYS IS</Link>
          </HBright>
        </HeaderBottom>
      </HeaderBottomWrap>
    </>
  );
};
