"use client";
import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Link from "next/link";

const { Header, Content, Footer } = Layout;

const items = [
  {
    key: "Cryptocurrencies",
    label: <Link href="/cryptocurrencies">Cryptocurrencies</Link>,
  },
  {
    key: "Exchanges",
    label: <Link href="/exchanges">Exchanges</Link>,
  },
  {
    key: "Community",
    label: (
      <Link
        href="/community"
        className="hover:text-red-500 dark:hover:text-red-500"
        // style={{ color: "var(--primary-color)" }}
      >
        Community
      </Link>
    ),
  },
  {
    key: "Products",
    label: <Link href="/products">Products</Link>,
  },
  {
    key: "Learn",
    label: <Link href="/learn">Learn</Link>,
  },
];

const Navbar: React.FC = () => {
  return (
    <Header className="!bg-white">
      <div className="demo-logo" />
      <Menu
        className="bg-white"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={items}
        style={{ flex: 1, minWidth: 0 }}
      />
    </Header>
  );
};

export default Navbar;
