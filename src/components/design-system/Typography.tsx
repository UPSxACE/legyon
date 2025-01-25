import cx from "@/lib/utils/cx";
import React, { ComponentProps } from "react";

export default function Typography<T extends React.ElementType>({
  component,
  variant = "body1",
  className,
  level,
  ...props
}: TypographyProps<T>) {
  const defaultClassName = variant;
  const Component = component || resolveDefaultComponent(variant);
  const levelClass = level ? `level${level}` : undefined;

  return (
    <Component
      {...props}
      className={cx(defaultClassName, levelClass, className)}
    />
  );
}

function resolveDefaultComponent(variant: Variant) {
  if (variant === "h1") return "h1" as const;
  if (variant === "h2") return "h2" as const;
  if (variant === "h3") return "h3" as const;
  if (variant === "h4") return "h4" as const;
  if (variant === "h5") return "h5" as const;
  if (variant === "h6") return "h6" as const;
  return "p" as const;
}

type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body1"
  | "body2"
  | "body3"
  | "basic";

type BaseProps<T extends React.ElementType> = {
  className?: string;
  component?: T;
  variant?: Variant;
  level?: "0" | "1" | "2" | "3" | "4" | "5" | "6";
};

type TypographyProps<T extends React.ElementType> = BaseProps<T> &
  Omit<ComponentProps<T>, keyof BaseProps<T>>;
