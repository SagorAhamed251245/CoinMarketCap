"use client";
import React from "react";
import { Layout, Menu } from "antd";
import { leftItems, rightItems } from "@/utils/MenuItems";
import { SearchSvg } from "../svg/Svgs";

const { Header } = Layout;

const Navbar: React.FC = () => {
  return (
    <Header
      className="!bg-white  flex"
      style={{ padding: "0  0", border: "none" }}
    >
      <Menu
        mode="horizontal"
        items={leftItems}
        style={{
          flex: 1,
          minWidth: 0,
          fontSize: 14,
          fontWeight: 700,
          padding: 0,
          display: "flex",
          justifyItems: "center",
          alignItems: "center",
        }}
      />
      <Menu
        mode="horizontal"
        items={rightItems}
        style={{
          minWidth: 0,
          fontSize: 14,
          fontWeight: 500,
          padding: 0,
          color: "black",
          display: "flex",
          justifyItems: "center",
          alignItems: "center",
        }}
      />
      <div className="flex justify-center items-center mr-[24px] w-[15%] cursor-pointer">
        <div className="p-2 bg-gray-next w-full rounded relative">
          <p className="text-gray-primary text-sm ml-5">Search</p>
          <div className="absolute top-0 left-3 h-full flex items-center z-0">
            <SearchSvg />
          </div>
          <div className="absolute top-0 right-3 h-full flex items-center justify-center z-0">
            <div className="h-6 w-6 bg-gray-primary flex justify-center items-center rounded">
              <p className="text-white text-xs">/</p>
            </div>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default Navbar;
