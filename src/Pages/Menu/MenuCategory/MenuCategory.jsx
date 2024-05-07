import MenuItem from "../../../Components/MenuItem/MenuItem";
import MenuCover from "../MenuCover/MenuCover";

const MenuCategory = ({ items, title, img }) => {
    return (
        <div className="mt-10">
            {title && <MenuCover img={img}
                title={"Our menu"}
            ></MenuCover>}
            <div className="grid md:grid-cols-2 gap-10 lg:mx-20 p-3 mt-20">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;