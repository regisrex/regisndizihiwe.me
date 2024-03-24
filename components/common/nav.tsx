import Pad from "@/layouts/pad";
import { useTheme } from "next-themes";
import { Inter } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { GithubIcon, TwitterIcon } from "../icons";
import { IconLink } from "./icon-link";
const inter = Inter({ subsets: ['latin'] })
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
  },
  {
    title: "me",
    href: "/about",
  },
];

export default function Nav() {
  const { theme, setTheme } = useTheme();

  const toogleTheme = () => {
    if (theme == "dark") setTheme("light");
    else if (theme == "light") setTheme("dark");
    else setTheme("dark");
  };

  const router = useRouter();
  const [selected, setSelected] = useState("home");

  useEffect(() => {
    setSelected(router.pathname);
  }, [router.pathname]);

  const checkMatch = (
    path: typeof router.pathname,
    selected: (typeof navLinks)[0]
  ) => {
    if (selected.title == "home") return path == selected.href;
    else return path.includes(selected.href);
  };
  return (
    <Pad className="grid grid-cols-3 items-center justify-between border-b border-bluish-100/10 py-4">


      <ul className="flex items-center gap-2 justify-start">
        {/* <span className="font-black text-yellow-400 mr-6" style={inter.style}>Regis N.</span> */}
        {navLinks.map((link, i) => (
          <li key={i}>
            <Link
              href={link.href}
              className={`flex items-center max-w-[76px] my-2 hover:max-w-[84px] duration-500 gap-4 ${checkMatch(selected, link) && "max-w-[76px]"
                }`}
            >
              {/* <div className={`w-full uppercase  duration-100 h-[2px] ${checkMatch(selected, link) ? 'bg-bluish-100 h-[5px] font-semibold' : 'bg-bluish-200'}`} /> */}
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
      </ul>
      <span className="font-bold tracking-widest text-white opacity-70 uppercase text-center w-full" style={inter.style}>
       - Regis NDIZIHIWE -
      </span>
      <div className="flex  gap-2 items-center justify-end">
        <IconLink href="https://github.com/regisrex">
          <GithubIcon />
        </IconLink>
        <IconLink href="https://x.com/regissrex">
          <TwitterIcon />
        </IconLink>
      </div>
    </Pad >
  );
}
