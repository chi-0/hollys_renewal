import { SubBanner } from "../components/SubBanner";
import { SubNav } from "../components/SubNav";
import { banner } from "../subData";
import { menuMenu } from "./menuData";

export const Menu = () => {
  return (
    <>
      <SubBanner bannerImg={banner[0].img} bannerTitle={banner[0].title} />
      <SubNav subNav={menuMenu} />
    </>
  );
};
