"use client";

import { useState } from "react";
import { CheckIcon, CopyIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

export function CopyEmail({ email, className }: { email: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = email;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy email address ${email}`}
      className={cn(
        "group inline-flex items-center gap-4 rounded-full border border-hairline px-7 py-4 font-mono text-sm transition-colors duration-300 hover:border-accent md:px-9 md:py-5 md:text-base",
        className,
      )}
    >
      <span>{email}</span>
      <span className="text-accent transition-transform duration-300 group-hover:scale-110">
        {copied ? <CheckIcon className="h-4 w-4" /> : <CopyIcon className="h-4 w-4" />}
      </span>
      <span
        className={cn(
          "text-xs uppercase tracking-widest text-muted transition-opacity duration-300",
          copied ? "opacity-100 text-accent" : "opacity-0",
        )}
        aria-live="polite"
      >
        Copied
      </span>
    </button>
  );
}
