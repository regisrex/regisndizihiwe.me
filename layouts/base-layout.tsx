import Footer from "@/components/common/footer";
import { IconLink } from "@/components/common/icon-link";
import Nav from "@/components/common/nav";
import { GithubIcon, TwitterIcon } from "@/components/icons";

export default function BaseLayout({ children }: any) {
  return (
    <div
      className="flex flex-col bg-blur-md gap-4 w-full  min-h-screen color-bluish-200 bg-black  selection:bg-white selection:text-black  font-medium scrollbar-w-0px leading-7 py-12  flex flex-col gap-4  sm:px-[2vw] sm:px-[4vw] md:px-[10vw] lg:px-[22vw] font-inter-var bg-top bg-cover bg-center bg-fixed"
      style={{
        // backgroundImage: `url(${BBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "fixed",
      }}
    >
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
