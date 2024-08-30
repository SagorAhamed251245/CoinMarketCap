import { Menu } from "antd";
import { icons } from "antd/es/image/PreviewGroup";
import Image from "next/image";

const MenuHover = ({ menuHoverData }) => {
  const menuStyles = {
    minWidth: 0,
    fontSize: 14,
    fontWeight: 700,
    padding: 0,
  };

  return (
    <div className="grid grid-cols-2 grid-rows-2 grid-flow-col ">
      {menuHoverData.map((item, index) => (
        <div key={index} className="col-span-1">
          <div>
            <div className="font-bold">{item.title}</div>
            <Menu
              className="bg-white h-auto"
              mode="vertical"
              defaultSelectedKeys={["1"]}
              items={item?.items}
              style={menuStyles}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuHover;
