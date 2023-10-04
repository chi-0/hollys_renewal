import styled from "styled-components";
import { color } from "../../common/common";
import { HomeBanner } from "./components/HomeBanner";
import { HomeCon } from "./components/HomeCon";
import { HomeMenu } from "./components/HomeMenu";
import { HomeLocation } from "./components/HomeLocation";
import { HomeMd } from "./components/HomeMd";
import { Shortcut } from "./components/Shortcut";

const Wrap = styled.div`
  max-width: 1920px;
  width: 100%;
  background-color: ${color.WhiteColor};
  margin: 0 auto;
`;

export const Home = () => {
  return (
    <>
      <Wrap>
        <Shortcut />
        <HomeBanner />
        <HomeCon />
        <HomeMenu />
        <HomeLocation />
        <HomeMd />
      </Wrap>
    </>
  );
};
