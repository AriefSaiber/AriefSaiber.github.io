import { useState } from "react";

export function useNavbarMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((value) => !value);
  const close = () => setIsOpen(false);

  return { isOpen, toggle, close };
}
