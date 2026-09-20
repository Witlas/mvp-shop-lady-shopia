"use client";

import { useState } from "react";
import Admin from "./admin";

export default function Home() {
  const [toast, setToast] = useState("");
  const notify = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(""), 2300);
  };

  return <>
    {toast && <div role="status" className="fixed top-5 left-1/2 z-[100] -translate-x-1/2 rounded-full bg-ink px-5 py-3 text-sm text-white shadow-xl">{toast}</div>}
    <Admin notify={notify} />
  </>;
}
