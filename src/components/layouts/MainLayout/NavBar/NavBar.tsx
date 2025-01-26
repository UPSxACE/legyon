"use client";
import { LegyonLogo } from "@/components/assets/svgs";
import Link from "@/components/design-system/Link";
import IconButton from "@/components/ui/IconButton";
import useToggle from "@/hooks/useToggle";
import {
  AiFillX,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineX,
} from "react-icons/ai";
import MobileMenu from "./MobileMenu";
import classes from "./NavBar.module.css";
import NavItems from "./NavItems";

export default function NavBar() {
  const [mobileMenuOpen, { toggle }] = useToggle(false);

  return (
    <div className={classes.stickyWrapper}>
      <header className={classes.header}>
        <div className={classes.branding}>
          <div className={classes.logoWrapper}>
            <Link href="/" className={classes.logo}>
              <LegyonLogo color="white" />
            </Link>
          </div>
        </div>
        <NavItems />
        <div className={classes.profileMenu}>
          <IconButton className={classes.hamburger} onClick={toggle}>
            {mobileMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </IconButton>
        </div>
      </header>
      <MobileMenu open={mobileMenuOpen} />
    </div>
  );
}
