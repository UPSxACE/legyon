import Link from "@/components/design-system/Link";
import Typography from "@/components/design-system/Typography";
import cx from "@/lib/utils/cx";
import { Tooltip } from "@mantine/core";
import { ReactNode } from "react";
import classes from "./NavLink.module.css";

export default function NavLink({
  title,
  href,
  icon,
  selected,
  disabled,
  children,
}: NavLinkProps) {
  return (
    <Wrapper renderSoonTooltip={disabled}>
      <Link
        title={disabled || !title ? undefined : title}
        href={disabled ? "#" : href}
        variant="h1"
        className={cx(
          classes.button,
          selected && classes.selected,
          disabled && classes.disabled
        )}
      >
        {icon}
        <Typography component="span" variant="body3" className={classes.link}>
          {children}
        </Typography>
      </Link>
    </Wrapper>
  );
}

function Wrapper({
  renderSoonTooltip: renderTooltip,
  children,
}: {
  renderSoonTooltip?: boolean;
  children: ReactNode;
}) {
  if (renderTooltip) {
    return <Tooltip label="Soon...">{children}</Tooltip>;
  }

  return children;
}

type NavLinkProps = {
  title?: string;
  href: string;
  icon: ReactNode;
  selected?: boolean;
  disabled?: boolean;
  children: ReactNode;
};
