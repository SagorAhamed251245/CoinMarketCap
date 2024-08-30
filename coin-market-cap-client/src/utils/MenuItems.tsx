import LogoSvg from "@/Components/shared/svg/LogoSvg";
import StartSVg from "@/Components/shared/svg/StartSVg";
import { PortfolioSvg } from "@/Components/shared/svg/Svgs";
import { Popover } from "antd";
import Link from "next/link";
import MenuHover from "@/Components/shared/Navbar/MenuHover";
import React, { ReactNode } from "react"; // Ensure ReactNode is imported if needed for typing
import { cryptocurrenciesMouseHoverData } from "@/data/MouseHoverData";

const styles = {
  itemCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
};

const menuHoverItems = (menuHoverData: any) => {
  return <MenuHover menuHoverData={menuHoverData}></MenuHover>;
};
export const leftItems = [
  {
    key: "logo",
    label: (
      <Link href="/" className="flex justify-center items-center w-full h-full">
        <LogoSvg />
      </Link>
    ),
  },
  {
    key: "Cryptocurrencies",
    label: (
      <Popover content={menuHoverItems(cryptocurrenciesMouseHoverData)}>
        <Link href="/cryptocurrencies">Cryptocurrencies</Link>
      </Popover>
    ),
  },
  {
    key: "Exchanges",
    label: (
      <Popover content={menuHoverItems(cryptocurrenciesMouseHoverData)}>
        <Link href="/exchanges">Exchanges</Link>
      </Popover>
    ),
  },
  {
    key: "Community",
    label: (
      <Popover content={menuHoverItems(cryptocurrenciesMouseHoverData)}>
        <Link
          href="/community"
          className="hover:text-red-500 dark:hover:text-red-500"
        >
          Community
        </Link>
      </Popover>
    ),
  },
  {
    key: "Products",
    label: (
      <Popover content={menuHoverItems(cryptocurrenciesMouseHoverData)}>
        <Link href="/products">Products</Link>
      </Popover>
    ),
  },
  {
    key: "Learn",
    label: (
      <Popover content={menuHoverItems(cryptocurrenciesMouseHoverData)}>
        <Link href="/learn">Learn</Link>
      </Popover>
    ),
  },
];

export const rightItems = [
  {
    key: "Watchlist",
    label: (
      <Popover content={menuHoverItems(cryptocurrenciesMouseHoverData)}>
        <Link href="/watchlist" style={styles.itemCenter}>
          <StartSVg />
          <p className="ml-2">Watchlist</p>
        </Link>
      </Popover>
    ),
  },
  {
    key: "Portfolio",
    label: (
      <Popover content={menuHoverItems(cryptocurrenciesMouseHoverData)}>
        <Link href="/portfolio" style={styles.itemCenter}>
          <PortfolioSvg />
          <p>Portfolio</p>
        </Link>
      </Popover>
    ),
  },
];
