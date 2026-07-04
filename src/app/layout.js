import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Joseph Stephen | Software Engineer",
  description:
    "Software engineer guided by clarity, maintainability, and long-term thinking.",
  applicationName: "Joseph Stephen Portfolio",
  authors: [{ name: "Joseph Stephen" }],
  creator: "Joseph Stephen",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body>{children}</body>
    </html>
  );
}
