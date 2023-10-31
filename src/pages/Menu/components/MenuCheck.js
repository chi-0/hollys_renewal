import styled from "styled-components";
import { color } from "../../../common/common";

const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 30px;
`;

const MenuSelect = styled.fieldset`
  all: unset;
  display: flex;
  justify-content: center;

  input[type="checkbox"] {
    display: none;
  }
  input[type="checkbox"] + label {
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  input[type="checkbox"] + label::before {
    content: "";
    display: inline-block;
    width: 18px;
    height: 18px;
    background-color: ${color.lightGray};
    margin-right: 10px;
  }
  input[type="checkbox"]:checked + label::before {
    content: "";
    display: inline-block;
    width: 18px;
    height: 18px;
    background-color: ${color.RedColor};
  }
`;

const Menu = styled.div`
  margin-right: 20px;
`;

export const MenuCheck = () => {
  return (
    <Wrap>
      <MenuSelect>
        <Menu>
          <input type="checkbox" id="all" checked onClick={test} />
          <label for="all">전체</label>
        </Menu>
        <Menu>
          <input type="checkbox" id="espresso" />
          <label for="espresso">에스프레소</label>
        </Menu>
        <Menu>
          <input type="checkbox" id="latte" />
          <label for="latte">라떼</label>
        </Menu>
        <Menu>
          <input type="checkbox" id="decaf" />
          <label for="decaf">디카페인</label>
        </Menu>
      </MenuSelect>
    </Wrap>
  );
};
