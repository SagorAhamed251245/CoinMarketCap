"use client";

import { ReactNode } from "react";
import AntdProviders from "../AntdProviders/AntdProviders";
import { AntdRegistry } from "@ant-design/nextjs-registry";

function MainProviders({ children }: { children: ReactNode }) {
  return (
    <AntdRegistry>
      <AntdProviders>{children}</AntdProviders>
    </AntdRegistry>
  );
}

export default MainProviders;
