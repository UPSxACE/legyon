"use client";
import Typography from "@/components/design-system/Typography";
import { NAVBAR_LINKS } from "@/config/website";
import { Transition } from "@mantine/core";
import { usePathname } from "next/navigation";
import classes from "./MobileMenu.module.css";
import MobileMenuItem from "./MobileMenuItem";

export default function MobileMenu({ open }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <Transition
      mounted={open}
      transition="slide-down"
      duration={300}
      timingFunction="ease"
    >
      {(styles) => (
        <div style={styles} className={classes.wrapper}>
          <header className={classes.menuHeader}>
            <Typography component="h1">Welcome to Legyon</Typography>
          </header>
          <nav className={classes.menuLinks}>
            {NAVBAR_LINKS.map((x, i) => (
              <MobileMenuItem
                key={i}
                href={x.href}
                icon={x.icon}
                title={x.label}
                disabled={x.disabled}
                selected={x.href === pathname}
              >
                {x.label}
              </MobileMenuItem>
            ))}
          </nav>
        </div>
      )}
    </Transition>
  );
}

type MobileMenuProps = {
  open: boolean;
};
