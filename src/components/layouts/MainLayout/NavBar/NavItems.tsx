"use client";
import { NAVBAR_LINKS } from "@/config/website";
import { usePathname } from "next/navigation";
import classes from "./NavItems.module.css";
import NavLink from "./NavLink";

export default function NavItems() {
  const pathname = usePathname();

  return (
    <nav className={classes.nav}>
      {NAVBAR_LINKS.map((x, i) => {
        return (
          <NavLink
            title={x.label}
            icon={x.icon}
            key={i}
            href={x.href}
            selected={pathname === x.href}
            disabled={x.disabled}
          >
            {x.label}
          </NavLink>
        );
      })}
    </nav>
  );
}
