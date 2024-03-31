import HouseItem from "./House3DItem";
import { Houselist3DWrap } from "./house3Dcss";




const House3DList = ({data}) => {
    return (
        <Houselist3DWrap>
            <ul>
                {
                    data.map(item=><HouseItem key={item.id}  item={item}/> )
                }
            </ul>
        </Houselist3DWrap>
    );
};

export default House3DList;
