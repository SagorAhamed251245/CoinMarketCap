import LogoSvg from "@/Components/shared/svg/LogoSvg";
import StartSVg from "@/Components/shared/svg/StartSVg";
import { PortfolioSvg } from "@/Components/shared/svg/Svgs";
import { Popover } from "antd";
import Link from "next/link";
import React, { ReactNode } from "react"; // Ensure ReactNode is imported if needed for typing

const styles = {
  itemCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
};

const popoverContent = <div>content</div>;

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
      <Popover content={popoverContent}>
        <Link href="/cryptocurrencies">Cryptocurrencies</Link>
      </Popover>
    ),
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

export const rightItems = [
  {
    key: "Watchlist",
    label: (
      <Link href="/watchlist" style={styles.itemCenter}>
        <StartSVg />
        <p className="ml-2">Watchlist</p>
      </Link>
    ),
  },
  {
    key: "Portfolio",
    label: (
      <Link href="/portfolio" style={styles.itemCenter}>
        <PortfolioSvg />
        <p>Portfolio</p>
      </Link>
    ),
  },
];
