import { CumuWrap } from "./CumuStyle";
import CumuCategory from "../Category/CumuCategory";
import CumuVisual from "../contents/Visual/CumuVisual";
import BestDeal from "../contents/BestDeal/BestDeal";
import InterierTypeA from "../contents/Interier/InterierTypeA";
import SuggeInter from "../contents/Best/SuggeInter";
import TodayTips from "../contents/TodayTips/TodayTips";
import MenuCate from "../MenuCate/MenuCate";
const cumuHome = () => {
    return (
        <CumuWrap  className="inner">
            <CumuVisual/>
            <MenuCate/>
            <InterierTypeA/>
            <TodayTips/>
            <SuggeInter/>
            <CumuCategory/>
            <BestDeal/>
        </CumuWrap>
    );
};

export default cumuHome;