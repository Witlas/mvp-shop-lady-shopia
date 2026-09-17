import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lady Shopia Shop — Commerce MVP",
  description: "Shop the Lady Shopia collection online.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en"><body className="font-sans antialiased selection:bg-wine selection:text-white">{children}</body></html>;
}
