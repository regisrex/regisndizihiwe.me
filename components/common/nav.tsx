'use client'
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { GithubIcon, TwitterIcon } from "../icons";
import { IconLink } from "./icon-link";

const navLinks = [
  {
    title: "home",
    href: "/",
  },
  {
    title: "work",
    href: "/work",
  },
  {
    title: "blog",
    href: "/blog",
  }
];

export default function Nav() {
  const { theme, setTheme } = useTheme();

  const pathname = usePathname()

  const toogleTheme = () => {
    if (theme == "dark") setTheme("light");
    else if (theme == "light") setTheme("dark");
    else setTheme("dark");
  };

  const router = useRouter();
  const [selected, setSelected] = useState("home");

  useEffect(() => {
    setSelected(pathname);
  }, [pathname]);

  const checkMatch = (
    path: typeof pathname,
    selected: (typeof navLinks)[0]
  ) => {
    if (selected.title == "home") return path == selected.href;
    else return path.includes(selected.href);
  };
  return (
    <nav className="flex items-center justify-between bg-black shadow-md  py-3 shadow-slate-700 w-full sm:px-[2vw] sm:px-[4vw] md:px-[12vw] lg:px-[16vw] ">
      <span className="font-black text-2xl">Regis N.</span>
      {/* <ul className="flex items-center py-2 gap-6 ">
        {navLinks.map((link, i) => (
          <li key={i}>
            <Link
              href={link.href}
              className={`flex items-center max-w-[76px] my-2 hover:max-w-[84px] duration-500 gap-4 ${checkMatch(selected, link) && "max-w-[76px]"
                }`}
            >
              <div className={`w-full uppercase  duration-100 h-[2px] ${checkMatch(selected, link) ? 'bg-bluish-100 h-[5px] font-semibold' : 'bg-bluish-200'}`} />
              <span
                className={`text-sm font-medium uppercase ${checkMatch(selected, link)
                  ? "text-bluish-100"
                  : "text-bluish-200"
                  }`}
              >
                {link.title}
              </span>
            </Link>
          </li>
        ))}
      </ul> */}
      <div className="flex  gap-2 items-center fixe">
        <IconLink href="https://github.com/regisrex">
          <GithubIcon />
        </IconLink>
        <IconLink href="https://x.com/regissrex">
          <TwitterIcon />
        </IconLink>
      </div>
    </nav>
  );
}
