import { CateWrap } from "./MenuStyle";
import { Menu_Category } from "../../../../assets/api/categorydata";
 const MenuCate = () => {
    return (
        <CateWrap>
            {Menu_Category.map(item=>
                <div key={item.id}>
                    <img src={item.imgurl} />
                    <p>{item.txt}</p>
                </div>
            )}
            
        </CateWrap>
    );
 };
 
 export default MenuCate;