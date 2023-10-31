import styled from "styled-components";
import { SubBanner } from "../components/SubBanner";
import { SubNav } from "../components/SubNav";
import { banner, menu } from "../subData";
import { useParams } from "react-router-dom";
import { MenuCon } from "./components/MenuCon";
import { coffee } from "./data/coffeeData";
import { newMenu } from "./data/newData";
import { drink } from "./data/drinkData";
import { tea } from "./data/teaData";
import { food } from "./data/foodData";
import { MenuCheck } from "./components/MenuCheck";

const Wrap = styled.div`
  max-width: 1490px;
  width: 100%;
  margin: 0 auto;
  padding: 90px 20px 180px 20px;
`;

export const Menu = () => {
  const { id } = useParams();

  return (
    <>
      <SubBanner bannerImg={banner[0].img} bannerTitle={banner[0].title} />
      <Wrap>
        <SubNav subNav={menu} />
        <MenuCheck />
        {id === "newMenu" && <MenuCon menus={newMenu} />}
        {id === "coffee" && <MenuCon menus={coffee} />}
        {id === "drink" && <MenuCon menus={drink} />}
        {id === "tea" && <MenuCon menus={tea} />}
        {id === "food" && <MenuCon menus={food} />}
      </Wrap>
    </>
  );
};
