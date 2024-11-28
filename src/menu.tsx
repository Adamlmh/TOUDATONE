import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import {
  StarOutlined,
  ProductOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  VideoCameraAddOutlined,
  ToolOutlined,
  MailOutlined
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";

type MenuItem = Required<MenuProps>["items"][number];



const Mmenu: React.FC = () => {
    const { t } = useTranslation();
  const items: MenuItem[] = [
  {
    label: t('menu.nav1'),
    key: "home",
    icon: <ShopOutlined />
  },




  {
    label: t('menu.nav2'),
    key: "SubMenu",
    icon: <ProductOutlined />,
    children: [
      {
        type: "group",
        children: [
          { label: t('Case Studies'), key: "setting:1",icon: <StarOutlined />},
          { label: t('Webinars'), key: "setting:2" ,icon:<VideoCameraAddOutlined />},
          { label: t('Events'), key: "setting:3",icon:<MailOutlined /> },
          { label: t('Help Center'), key: "setting:4" ,icon:<ToolOutlined />},
        ],
      },

    ],
  }, 

   {
    label: t('menu.nav3'),
    key: "price",
    icon: <ShoppingCartOutlined />
  },
];
  const [current, setCurrent] = useState("home");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      style={{ fontWeight: "600",width: "100%" }}
    />
  );
};

export default Mmenu;
