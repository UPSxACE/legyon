import LinkNext from "next/link";
import Typography, { TypographyProps } from "./Typography";

export default function Link(props: TypographyProps<typeof LinkNext>) {
  return <Typography component={LinkNext} {...props} />;
}
