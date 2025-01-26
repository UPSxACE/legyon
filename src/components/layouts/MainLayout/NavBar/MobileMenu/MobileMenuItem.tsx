import Link from "@/components/design-system/Link";
import Typography from "@/components/design-system/Typography";
import cx from "@/lib/utils/cx";
import { ReactNode } from "react";
import { IoChevronForward } from "react-icons/io5";
import classes from "./MobileMenuItem.module.css";

export default function MobileMenuItem({
  title,
  href,
  icon,
  selected,
  disabled,
  children,
}: MobileMenuItemProps) {
  return (
    <Link
      title={disabled || !title ? undefined : title}
      href={disabled ? "#" : href}
      className={cx(
        classes.menuItem,
        selected && classes.selected,
        disabled && classes.disabled
      )}
    >
      <Typography component="span" variant="body1" className={classes.icon}>
        {icon}
      </Typography>
      {children}
      <Typography
        component="span"
        variant={disabled ? "body2" : "body1"}
        className={classes.cta}
      >
        {disabled ? "Soon..." : <IoChevronForward />}
      </Typography>
    </Link>
  );
}

type MobileMenuItemProps = {
  title?: string;
  href: string;
  icon: ReactNode;
  selected?: boolean;
  disabled?: boolean;
  children: ReactNode;
};
