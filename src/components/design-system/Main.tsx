import cx from "@/lib/utils/cx";
import { ComponentProps } from "react";
import classes from "./Main.module.css";

export default function Main({ className, ...props }: ComponentProps<"main">) {
  return <main {...props} className={cx(classes.main, className)} />;
}
