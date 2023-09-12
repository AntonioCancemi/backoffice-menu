"use client";
import Topnav from "@/components/Topnav";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Page() {
  const pathname = usePathname();
  console.log(pathname === "/" ? "fs-1" : "fs-5");
  return (
    <div>
      <Topnav></Topnav>
      <h1>pagina login</h1>
      <Link className={pathname === "/" ? "fs-1" : "fs-5"} href={"/"}>
        Home
      </Link>
      <Link className={pathname === "/login" ? "fs-1" : "fs-5"} href={"/login"}>
        Login
      </Link>
    </div>
  );
}
