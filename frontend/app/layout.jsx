import { Inter } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({
  weight: ["300", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Parkoasis",
  description: "Parkoasis - Where Reservation Meets Acceleration.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{    // hide signup option
        elements: {
          footer: "hidden",
        },
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          <div className="gradient-background" />
          <main>{children}</main>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
