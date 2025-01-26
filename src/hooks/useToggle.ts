import { useState } from "react";

export default function useToggle(initial?: boolean) {
  const [open, setOpen] = useState(initial || false);

  function toggle() {
    setOpen((x) => !x);
  }

  return [open, { toggle }] as const;
}
