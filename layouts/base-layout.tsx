import Footer from "@/components/common/footer";
import { IconLink } from "@/components/common/icon-link";
import Nav from "@/components/common/nav";
import { GithubIcon, TwitterIcon } from "@/components/icons";
import { useEffect } from "react";

export default function BaseLayout({ children }: any) {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className=" flex items-center border-b border-bluish-200/20 justify-between">
        <Nav />
        <div className="flex  gap-2 items-center fixe">
          <IconLink href="https://github.com/regisrex">
            <GithubIcon />
          </IconLink>
          <IconLink href="https://x.com/regissrex">
            <TwitterIcon />
          </IconLink>
        </div>
      </div>
      <div className="">
        {children}
        <div className="py-4"></div>
      </div>
      <Footer />
    </div>
  );
}
