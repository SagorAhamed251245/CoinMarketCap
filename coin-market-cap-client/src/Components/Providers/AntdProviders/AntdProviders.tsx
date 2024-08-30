"use client";

import { ConfigProvider } from "antd";
import React from "react";

function AntdProviders({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemHoverBg: "#ffffff",
            itemHoverColor: "var(--primary-color)",
            itemSelectedBg: "#ffffff",
            itemSelectedColor: "var(--primary-color)",
            lineWidth: 0,
            activeBarHeight: 0,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}

export default AntdProviders;
