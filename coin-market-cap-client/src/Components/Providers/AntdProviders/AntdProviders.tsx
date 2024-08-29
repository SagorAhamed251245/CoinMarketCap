"use client";

import { ConfigProvider } from "antd";
import React from "react";

function AntdProviders({ children }: { children: React.ReactNode }) {
  return <ConfigProvider>{children}</ConfigProvider>;
}

export default AntdProviders;
