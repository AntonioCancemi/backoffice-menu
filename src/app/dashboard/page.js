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
      <h1>pagina dashboard</h1>
      <Link href={"/dashboard/profucts/a"}>a</Link>
    </div>
  );
}
