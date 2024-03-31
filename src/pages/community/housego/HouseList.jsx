import HouseItem from "./HouseItem";
import { HouselistWrap} from "./housecss";




const HouseList = ({data}) => {
    return (
        <HouselistWrap>
            <ul>
                {
                    data.map(item=><HouseItem key={item.id}  item={item}/> )
                }
            </ul>
        </HouselistWrap>
    );
};

export default HouseList;
