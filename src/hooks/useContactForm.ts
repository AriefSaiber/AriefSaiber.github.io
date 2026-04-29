import { useEffect, useState, type FormEvent } from "react";

const SUCCESS_DURATION_MS = 3200;

export function useContactForm() {
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    if (!isSent) {
      return undefined;
    }

    const timer = window.setTimeout(() => setIsSent(false), SUCCESS_DURATION_MS);
    return () => window.clearTimeout(timer);
  }, [isSent]);

  const submitPreview = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSent(true);
  };

  return { isSent, submitPreview };
}
