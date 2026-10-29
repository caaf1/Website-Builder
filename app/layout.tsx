import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Website Builder",
  description: "Bookings and invoices for small service businesses.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
