import styled from "styled-components";
import { color, fontWeight } from "../../../common/common";

const Wrap = styled.section`
  max-width: 1290px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  margin-top: 80px;
  gap: 30px;
`;

const MenuItem = styled.div`
  max-width: 300px;
  width: 100%;
  padding-bottom: 30px;
  border: 1px solid ${color.lightGray};
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const MenuItemImg = styled.img`
  margin-bottom: 20px;
`;

const MenuItemName = styled.h3`
  font-size: 21px;
  font-weight: ${fontWeight.bold};
  color: ${color.BlackColor};
`;

const MenuItemEn = styled.p`
  color: ${color.gray};
`;

export const MenuCon = ({ menus }) => {
  return (
    <Wrap>
      {menus.map((con) => (
        <MenuItem key={con.id}>
          <MenuItemImg src={con.itemImg} />
          <MenuItemName>{con.title}</MenuItemName>
          <MenuItemEn>{con.en}</MenuItemEn>
        </MenuItem>
      ))}
    </Wrap>
  );
};
