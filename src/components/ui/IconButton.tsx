import cx from "@/lib/utils/cx";
import { Button, ButtonProps, PolymorphicComponentProps } from "@mantine/core";
import { ReactNode } from "react";
import classes from "./IconButton.module.css";

export default function IconButton({ className, ...props }: IconButtonProps) {
  return (
    <Button
      h="auto"
      px="8px"
      py="8px"
      fz="1.5rem"
      className={cx(classes.root, className)}
      {...props}
    />
  );
}

type IconButtonProps = {
  className?: string;
  children: ReactNode;
} & PolymorphicComponentProps<"button", ButtonProps>;
