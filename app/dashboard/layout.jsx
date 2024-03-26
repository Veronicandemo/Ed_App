import React from "react";
import MarginWidthWrapper from "./MarginWrapper";
import SideNav from "./SideNav";
import PageWrapper from "./pageWrapper";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const DashboardLayout = ({ children }) => {
  return (
    <body className={`!bg-white ${inter.className} overflow-y-hidden`}>
      <main className="flex flex-col">
        {/* <HeaderMobile /> */}
        <MarginWidthWrapper>
          <SideNav />
          <PageWrapper>{children}</PageWrapper>
        </MarginWidthWrapper>
      </main>
    </body>
  );
};

export default DashboardLayout;
