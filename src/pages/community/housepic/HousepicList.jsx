import HouseItem from "./HousepicItem";
import {HousepiclistWrap} from "./housepiccss";




const HouseList = ({data}) => {
    return (
        <HousepiclistWrap>
            <ul>
                {
                    data.map(item=><HouseItem key={item.id}  item={item}/> )
                }
            </ul>
        </HousepiclistWrap>
    );
};

export default HouseList;
